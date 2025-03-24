import Quill from 'quill';

const Inline = Quill.import('blots/inline');

export default class CustomLinkInlineBlot extends Inline {


	static blotName = 'custom_link';
	static tagName = 'a';

	static create(value) {
		console.log('CustomLinkInlineBlot.create', value);
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
		console.log('CustomLinkInlineBlot.formats', node);
		return {
			url: node.getAttribute('href'),
			blank: node.getAttribute('data-blank') || 'false'
		};
	}

	format(name, value) {
		console.log('CustomLinkInlineBlot.format', name, value);
		if (name === 'custom_link' && value) {
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
		} else if (name === 'custom_link' && !value) {
			super.format(name, value);
		} else {
			super.format(name, value);
		}
	}
}