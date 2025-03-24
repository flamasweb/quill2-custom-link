# Quill Custom Link Module

A module that extends Quill rich text editor link management, adding the ability to:
• Open the link in a new window;
• Search for a resource in a personal database to create automatic links;
• … Suggestions are welcome for future implementations :)


### Install

Install with npm:

```bash
npm install quill2-custom-link --save
```


### Options (defaults)

```javascript
const customLinkOptions = {
	allowAnyStringAsURL: false, // If true, user can type enything as URL
	translations: { // Default translations
		link_tab: "Link",
		search_tab: "Search",
		url_or_email_label: "URL or e-mail address",
		start_search_label: "Start typing...",
		text_label: "Link text",
		target_blank: "Open in new window",
		remove_button: "Remove",
		save_button: "Save",
		invalid_url_error: "Please insert a valid URL or email address."
	},
	autocomplete: {
		active: true, // If true, enable the "autocomplete" tab where user can type and search
		fn: null // Callback function for the autocomplete input
	}
};
```


### Autocomplete callback function

The autocomplete function accepts one parameter (the query string typed by the user) and must return a promise with an array of objects structured as follows:
1. label: Visible label for autocomplete list;
2. url: The URL for the link;
3. group: For results grouping.

Example:
```javascript
const yourAutocompleteFunction = function(query) {
	return new Promise((resolve, reject) => {
		const fakeData = [
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
		let filtered = fakeData.filter(item => 
			item.label.toLowerCase().includes(query.toLowerCase())
		);
		setTimeout(() => {
			resolve(filtered);
		}, 100);
	});
}
```


### Quickstart (Webpack/ES6)

```javascript
import Quill from "quill";
import QuillCustomLink from "quill2-custom-link";

// Register QuillCustomLink
Quill.register("modules/customLink", QuillCustomLink);

const quill = new Quill(editor, {
  // ...
  modules: {
    // ...
    customLink: {}
  },
});
```


### Quickstart (script tag)

```javascript

// Import quill2-custom-link.css
// <link href="/dist/quill2-custom-link.css" rel="stylesheet">

// Import quill2-custom-link.js after the quill.js import
// <script src="/dist/quill2-custom-link.js"></script>

// register QuillCustomLink
Quill.register("modules/customLink", QuillCustomLink);

var quill = new Quill(editor, {
  // ...
  modules: {
    // ...
    customLink: {}
  }
});
```
