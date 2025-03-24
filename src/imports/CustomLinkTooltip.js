import normalizeUrl from 'normalize-url';
import Quill from 'quill';
import linkTemplate from '../assets/quill2-custom-link-template.html';
import { extractEmail, isValidURL } from './Utils';

const Tooltip = Quill.import('ui/tooltip');

export default class CustomLinkTooltip extends Tooltip {

	urlInput;
	textInput;
	targetCheckbox;
	saveButton;
	removeButton;

	translations = {};

	allowAnyStringAsURL = false;

	autocomplete = {
		active: false,
		fn: null
	};

	// Valori di default
	url = null;
	// typology = 'external';
	// itemId = null;
	blank = false;


	constructor(quill, boundsContainer, options) {

		super(quill, boundsContainer);

		this.translations = options.translations;
		this.allowAnyStringAsURL = options.allowAnyStringAsURL;

		this.root.classList.add('ql-custom-link-tooltip');
		this.root.innerHTML = linkTemplate;

		this._localize();
		
		this.urlInput = this.root.querySelector('#ql-custom-link-url');

		this.manualUrlInput = this.root.querySelector('.ql-custom-link-url');
		this.manualUrlInput.addEventListener('keyup', (event) => this.urlInput.value = event.target.value);

		this.textInput = this.root.querySelector('.ql-custom-link-text');

		this.targetCheckbox = this.root.querySelector('.ql-custom-link-blank');

		this.saveButton = this.root.querySelector('.ql-custom-link-save');
		this.removeButton = this.root.querySelector('.ql-custom-link-remove');
		this.saveButton.addEventListener('click', this.save.bind(this));
		this.removeButton.addEventListener('click', this.remove.bind(this));
		
		this.visitURL = this.root.querySelectorAll('span.open-url');
		this.visitURL.forEach((el) => {
			el.addEventListener('click', this._visitURL.bind(this));
		});
		
    	this._handleClickOutside = this._handleClickOutside.bind(this);

		this._handleTextChange();

		this._handleTips();
    			
		if (options.autocomplete.active && typeof options.autocomplete.fn === 'function') {
			this.autocomplete = options.autocomplete;
			this._handleAutocomplete();
		} else {
			const resourceElements = this.root.querySelectorAll('[data-ref="resource"]');
			resourceElements.forEach((el) => {
				el.style.display = 'none';
			});
		}

		this._handleTabs();

		this.hide();
	}


	// Sovrascrivo metodo originale per posizionare la tooltip
	position(bounds) {
		const tooltipWidth = this.root.offsetWidth;
		const tooltipHeight = this.root.offsetHeight;
		const editorBounds = this.quill.container.getBoundingClientRect()
		let left = bounds.left + window.scrollX;
		if (left + tooltipWidth > editorBounds.right) {
			left = editorBounds.right - tooltipWidth;
		}
		let top = bounds.bottom + window.scrollY + 5; // 5px di margine
		// if (top + tooltipHeight > window.innerHeight) {
		// 	// Se la tooltip non entra nello schermo posiziona sopra
		// 	top = bounds.top + window.scrollY - tooltipHeight - 5;
		// }
		this.root.style.left = `${left}px`;
		this.root.style.top = `${top}px`;
	}

	// Sovrascrivo metodo originale per mostrare la tooltip
	show(params) {

		const range = this.quill.getSelection();
		if (range == null) return;

		this.range = range;

		this._reset();

		super.show();

		this.textInput.value = this.quill.getText(range.index, range.length);

		if (Object.keys(params).length > 0) {
			this.removeButton.style.display = 'block';
			this.textInput.parentElement.style.display = 'none';
			this.urlInput.value = params.url;
			this.manualUrlInput.value = params.url.replace(/^mailto:/, '');
			this.targetCheckbox.checked = params.blank === 'true';
		}
		
		this.position(this.quill.getBounds(range));

		setTimeout(() => {
    		document.addEventListener('click', this._handleClickOutside);
		}, 10);
		
	}

	// Sovrascrivo metodo originale salvare i dati e chiudere la tooltip
	save() {
		this._toggleURLError(false);
		const url = this.urlInput.value.trim();
		const text = this.textInput.value;
		const isBlank = this.targetCheckbox.checked;
		if (!this.range || !url) return;
		let urlString;
		const email = extractEmail(url);
		if (email) {
			urlString = 'mailto:' + email;
		} else {
			if (this.allowAnyStringAsURL) {
				urlString = url;
			} else {
				if (isValidURL(url)) {
					urlString = normalizeUrl(url, { stripWWW: false, normalizeProtocol: false, forceHttps: true });
				} else {
					this._toggleURLError(true);
					return;
				}
			}
		}
		
		if (this.range.length > 0) {
			this.quill.deleteText(this.range.index, this.range.length);
		}
		this.quill.insertText(this.range.index, text, 'link', {
			url: urlString,
			// typology: 'external',
			// itemId: 'null',
			blank: isBlank
		});
		this.quill.setSelection(this.range.index, text.length);
		this.hide();
	}

	// Sovrascrivo metodo originale per nascondere la tooltip
	hide() {
		super.hide();
		document.removeEventListener('click', this._handleClickOutside);
	}

	// Sovrascrivo metodo originale per rimuovere il link
	remove() {
		this.quill.format('link', false);
		this.hide();
	}




	_reset() {
		this.url = null;
		// this.typology = 'external';
		// this.itemId = null;
		this.blank = false;
		this.urlInput.value = '';
		this.textInput.value = '';
		this.targetCheckbox.checked = false;
		this.manualUrlInput.value = '';
		this.textInput.parentElement.style.display = 'block';
		this.removeButton.style.display = 'none';
		this.tabNavItems[0].click();
		this._resetAutocomplete();
	}	




	_handleTips() {
		// Create tooltip div if it doesn't exist already
		let tooltip;
		if (!document.getElementById('ql-custom-link-tip')) {
			tooltip = document.createElement('div');
			tooltip.id = 'ql-custom-link-tip';
			tooltip.style.position = 'absolute';
			tooltip.style.backgroundColor = '#333';
			tooltip.style.color = '#fff';
			tooltip.style.padding = '5px 10px';
			tooltip.style.borderRadius = '4px';
			tooltip.style.fontSize = '10px';
			tooltip.style.display = 'none';
			tooltip.style.zIndex = '1000';
			document.body.appendChild(tooltip);
		}

		const tipElements = this.root.querySelectorAll("[data-tip]");

		tipElements.forEach((element) => {

			element.addEventListener("mouseenter", function (e) {
				tooltip.textContent = e.target.getAttribute('data-tip');
				tooltip.style.display = "block";
				const rect = element.getBoundingClientRect();
				tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`;
				tooltip.style.top = `${rect.top - tooltip.offsetHeight - 5}px`;
				// tooltip.style.top = `${rect.bottom + 5}px`;
			});

			element.addEventListener("mouseleave", function () {
				tooltip.style.display = "none";
			});			

		});
	}



	_handleTabs() {
		const tabNavItems = this.root.querySelectorAll('.ql-custom-link-tabs nav div');
		this.tabNavItems = tabNavItems;
		const tabContents = this.root.querySelectorAll('.ql-custom-link-tab');
		tabNavItems.forEach(navItem => {
			navItem.addEventListener('click', () => {
				tabNavItems.forEach(item => item.classList.remove('active'));
				navItem.classList.add('active');
				tabContents.forEach(tab => {
					tab.classList.remove('active');
					if (tab.dataset.ref === navItem.dataset.ref) {
						tab.classList.add('active');
					}
				});
			});
		});
	}



	_toggleURLError(show) {
		const errorEl = this.root.querySelector('.ql-custom-link-url-error');
		if (show) {
			errorEl.style.display = 'block';
			this.manualUrlInput.classList.add('error');
		} else {
			errorEl.style.display = 'none';
			this.manualUrlInput.classList.remove('error');
		}
	}



	_resetAutocomplete() {
		const input = this.root.querySelector('#ql-custom-link-autocomplete-input');
		const resultsContainer = this.root.querySelector('#ql-custom-link-autocomplete-results');
		if (input) input.value = '';
		if (resultsContainer) {
			resultsContainer.innerHTML = '';
			resultsContainer.style.display = 'none';
		}
	}

	_handleAutocomplete() {	
		const urlInput = this.root.querySelector('#ql-custom-link-url');
		const input = this.root.querySelector('#ql-custom-link-autocomplete-input');
		const resultsContainer = this.root.querySelector('#ql-custom-link-autocomplete-results');


		function debounce(func, delay) {
			let timeoutId;
			return function (...args) {
				clearTimeout(timeoutId);
				timeoutId = setTimeout(() => {
					func.apply(this, args);
				}, delay);
			};
		}

		function showResults(results) {
			resultsContainer.innerHTML = '';
			if (results.length === 0) {
				resultsContainer.style.display = 'none';
				return;
			}
			let groups = results.reduce((prev, curr) => {
				if (typeof curr.group === 'undefined') {
					curr.group = 'Results';
				}
				if (typeof prev[curr.group] === 'undefined') {
					prev[curr.group] = [];
				}
				prev[curr.group].push(curr);
				return prev;
			}, {});			
			Object.keys(groups).forEach(g => {
				const group = groups[g];
				const title = document.createElement('div');
				title.classList.add('group-title');
				title.textContent = g;
				resultsContainer.appendChild(title);
				const ul = document.createElement('ul');
				group.forEach(result => {
					const li = document.createElement('li');
					li.textContent = result.label;
					li.addEventListener('click', () => {
						input.value = result.label;
						urlInput.value = result.url;
						resultsContainer.style.display = 'none';
					});
					ul.appendChild(li);
				});				
				resultsContainer.appendChild(ul);
			});
			resultsContainer.style.display = 'block';
		}


		const handleInput = () => {
			const query = input.value.trim();
			if (query.length === 0) {
				resultsContainer.style.display = 'none';
				return;
			}
			input.parentElement.classList.add('loading');
			input.disabled = true;
			this.autocomplete.fn(query).then(results => {
				input.parentElement.classList.remove('loading');
				input.disabled = false;
				input.focus();
				showResults(results);
			}, (error) => {
				input.parentElement.classList.remove('loading');
				input.disabled = false;
				input.focus();
				console.error(error);
			});
		};

		input.addEventListener('input', debounce(handleInput, 250));

		this.root.addEventListener('click', (event) => {
			if (!input.contains(event.target) && !resultsContainer.contains(event.target)) {
				resultsContainer.style.display = 'none';
			}
		});

	}



	_localize() {
		Object.keys(this.translations).forEach(k => {
			const el = this.root.querySelector('[data-l10n="'+k+'"]');
			if (el) el.textContent = this.translations[k];
		});
	}


	_visitURL(event) {
		let url = this.urlInput.value;
		let urlString;
		const email = extractEmail(url);
		if (email) {
			urlString = 'mailto:' + email;
		} else if (isValidURL(url)) {
			urlString = normalizeUrl(url, { stripWWW: false, normalizeProtocol: false, forceHttps: true });
		} else return;
		if (urlString) window.open(urlString, '_blank');
		event.preventDefault();
	}
	
	_handleClickOutside(event) {
		if (!this.root.contains(event.target)) {
			this.hide();
		}
	}
	_handleTextChange() {
		this.quill.on('text-change', (delta, oldDelta, source) => {
			if (source === 'user') {
				this.hide();
			}
		});
	}

}