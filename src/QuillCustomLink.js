import QuillImport from 'quill';
const Quill = window.Quill || QuillImport;
import CustomLinkBlot from './imports/CustomLinkBlot';
import CustomLinkTooltip from './imports/CustomLinkTooltip';
import CustomLinkDefaults from './imports/CustomLinkDefaults';

const Module = Quill.import('core/module');

export class QuillCustomLink extends Module {
		

	constructor(quill, options) {
	
    	super(quill, options);
		
		this.quill = quill;

		this.range = null;

		this.options = {...CustomLinkDefaults, ...options};
		
		if (this.options.autocomplete.active && typeof this.options.autocomplete.fn !== "function") {
			console.warn("[Missing config] 'autocomplete.fn' function that returns a promise is required when 'autocomplete.active' is true.");
			this.options.autocomplete.active = false;
			this.options.autocomplete.fn = null;
		}

		Quill.register('formats/link', CustomLinkBlot, true);

		this.tooltip = new CustomLinkTooltip(quill, quill.container, {
			allowAnyStringAsURL: this.options.allowAnyStringAsURL, 
			translations: this.options.translations, 
			autocomplete: this.options.autocomplete
		});

		const toolbar = quill.getModule('toolbar');
		if (toolbar) {
			toolbar.addHandler('link', () => {
				this.tooltip.hide();
				setTimeout(() => {
					const range = this.quill.getSelection();
					if (range == null) {
						this.editLink(null);
					} else {
						let params = this.getRangeLinkParams(range);
						this.tooltip.show(params);
					}	
				});
			});
		}

		quill.on('selection-change', (range, oldRange, source) => {
			try {
				if (range == null || !quill?.hasFocus()) return;
				if (source === 'user') {
					this.quill.theme?.tooltip.hide(); // Chiudo la tooltip di default
				}
			} catch (e) {
				console.error('Link Listener Error: ', e);
			}
		});
		
		quill.root.addEventListener('click', (event) => {
			if (event.target.tagName === 'A') {
				event.preventDefault();
				const node = event.target;
				const blot = Quill.find(node);
				if (blot) this.editLink(blot);
			}
		});

		// quill.on('text-change', (delta, oldDelta, source) => {
		// 	if (source === 'user') {
		// 		delta.ops.forEach((op) => {
		// 			if (op.insert && typeof op.insert === 'string' && op.attributes?.link) {
		// 				console.log('Nuovo link aggiunto:', op.attributes.link);
		// 				// Qui puoi aprire la modale o modificare il comportamento
		// 			}
		// 		});
		// 	}
		// });
		
	}


	getRangeLinkParams(range) {
		const delta = this.quill.getContents(range.index, range.length);
		if (delta.ops.length === 1 && delta.ops[0].attributes?.link) {
			return delta.ops[0].attributes?.link;
		}
		return {};
	}


	editLink(blot) {
		let params = {};
		if (blot) {
			const index = this.quill.getIndex(blot);
			const length = blot.length();
			this.quill.setSelection(index, length);
			const delta = this.quill.getContents(index, length);
			params = delta.ops[0].attributes.link;
		}
		this.tooltip.show(params);
	}


}