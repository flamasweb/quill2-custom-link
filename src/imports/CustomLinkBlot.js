import Quill from 'quill';

const Link = Quill.import('formats/link');

export default class CustomLinkBlot extends Link {
	
	static create(value) {
		let url = value;
		let blank = false;
		if (typeof value === 'object') {
			url = value.url || '';
			blank = value.blank === 'true' || value.blank === true;
		}
		const node = super.create(url);
		node.setAttribute('data-blank', blank.toString());
		return node;
	}

	static formats(node) {
		return {
			url: node.getAttribute('href'),
			blank: node.getAttribute('data-blank') || 'false'
		};
	}

	format(name, value) {
		if (name === 'link' && value) {
			if (typeof value === 'object') {
				if (value.text) this.domNode.textContent = value.text;
				if (value.url) this.domNode.setAttribute('href', value.url);				
				this.domNode.setAttribute('data-blank', (value.blank === 'true' || value.blank === true).toString());
				if (value.blank === 'true' || value.blank === true) {
					this.domNode.setAttribute('target', '_blank');
					this.domNode.setAttribute('rel', 'noopener noreferrer');
				} else {
					this.domNode.removeAttribute('target');
					this.domNode.removeAttribute('rel');
				}
			} else {
				this.domNode.setAttribute('href', value);
			}
		} else if (name === 'link' && !value) {
			super.format(name, value);
		} else {
			// Gestisci altri formati
			super.format(name, value);
		}
	}
}