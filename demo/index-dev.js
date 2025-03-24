import 'quill/dist/quill.snow.css'

import Quill from 'quill';
import QuillCustomLink from '../src/index'

Quill.register('modules/customLink', QuillCustomLink);

const editor = new Quill('#editor-container', {
	theme: 'snow',
	modules: {
		toolbar: [
			[{ size: [] }],
			['bold', 'italic', 'underline', 'strike', { align: [] }, { color: [] }],
			[{ list: 'ordered' }, { list: 'bullet' }],
			['link', 'image', 'video'],
			['clean']
		],
		
		customLink: {
			autocomplete: {
				active: true,
				fn: (query) => {
					return new Promise((resolve, reject) => {
						const autocompleteData = [
							{ label: "Apple", url: "https://www.apple.com", group: "Fruits" },
							{ label: "Banana", url: "https://www.banana.com", group: "Fruits" },
							{ label: "Cherry", url: "https://www.cherry.com", group: "Fruits" },
							{ label: "Date", url: "https://www.date.com", group: "Fruits" },
							{ label: "Elderberry", url: "https://www.elderberry.com", group: "Fruits" },
							{ label: "Fig", url: "https://www.fig.com", group: "Better fruits" },
							{ label: "Grape", url: "https://www.grape.com", group: "Better fruits" },
							{ label: "Honeydew", url: "https://www.honeydew.com", group: "Better fruits" },
							{ label: "Kiwi", url: "https://www.kiwi.com", group: "Better fruits" },
							{ label: "Lemon", url: "https://www.lemon.com", group: "Better fruits" }
						];
						let filtered = autocompleteData.filter(item => 
							item.label.toLowerCase().includes(query.toLowerCase())
						);
						setTimeout(() => {
							resolve(filtered);
						}, 100);
					});
				}
			}
		}
	}
});
