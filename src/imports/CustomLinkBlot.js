import Quill from 'quill';

const Link = Quill.import('formats/link');

export default class CustomLinkBlot extends Link {
	static create(value) {

		let url = value;
		// let typology = 'external';
		// let itemId = null;
		let blank = false;

		// Se il valore è un oggetto, estrai le proprietà
		if (typeof value === 'object') {
			url = value.url || '';
			// typology = value.typology || 'external';
			// itemId = value.itemId || null;
			blank = value.blank === 'true' || value.blank === true;
		}

		// Crea il nodo utilizzando il metodo della classe genitore
		const node = super.create(url);

		// Imposta gli attributi personalizzati
		// node.setAttribute('data-typology', typology);
		// if (itemId) node.setAttribute('data-item-id', itemId);

		node.setAttribute('data-blank', blank.toString());

		return node;
	}

	static formats(node) {
		return {
			url: node.getAttribute('href'),
			// typology: node.getAttribute('data-typology') || 'external',
			// itemId: node.getAttribute('data-item-id') || null,
			blank: node.getAttribute('data-blank') || 'false'
		};
	}

	format(name, value) {
		if (name === 'link' && value) {
			// Gestisci il formato come oggetto
			if (typeof value === 'object') {

				if (value.text) this.domNode.textContent = value.text;
				if (value.url) this.domNode.setAttribute('href', value.url);

				// this.domNode.setAttribute('data-typology', value.typology || 'external');
				
				// if (value.itemId) this.domNode.setAttribute('data-item-id', value.itemId);
				
				this.domNode.setAttribute('data-blank', (value.blank === 'true' || value.blank === true).toString());
				
				// Gestisci target blank
				if (value.blank === 'true' || value.blank === true) {
					this.domNode.setAttribute('target', '_blank');
					this.domNode.setAttribute('rel', 'noopener noreferrer');
				} else {
					this.domNode.removeAttribute('target');
					this.domNode.removeAttribute('rel');
				}
			} else {
				// Se è una stringa, trattala come URL
				this.domNode.setAttribute('href', value);
			}
		} else if (name === 'link' && !value) {
			// Rimuovi il link
			super.format(name, value);
		} else {
			// Gestisci altri formati
			super.format(name, value);
		}
	}
}