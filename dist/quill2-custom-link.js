/*!
 * Quill Custom Link Module v1.0.3
 * https://github.com/flamasweb/quill2-custom-link
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Quill"));
	else if(typeof define === 'function' && define.amd)
		define(["Quill"], factory);
	else if(typeof exports === 'object')
		exports["QuillCustomLink"] = factory(require("Quill"));
	else
		root["QuillCustomLink"] = factory(root["Quill"]);
})(this, (__WEBPACK_EXTERNAL_MODULE__1__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ src)
});

// UNUSED EXPORTS: QuillCustomLink

// EXTERNAL MODULE: external "Quill"
var external_Quill_ = __webpack_require__(1);
var external_Quill_default = /*#__PURE__*/__webpack_require__.n(external_Quill_);
;// ./src/imports/CustomLinkBlot.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var Link = external_Quill_default()["import"]('formats/link');
var CustomLinkBlot = /*#__PURE__*/function (_Link) {
  function CustomLinkBlot() {
    _classCallCheck(this, CustomLinkBlot);
    return _callSuper(this, CustomLinkBlot, arguments);
  }
  _inherits(CustomLinkBlot, _Link);
  return _createClass(CustomLinkBlot, [{
    key: "format",
    value: function format(name, value) {
      if (name === 'link' && value) {
        if (_typeof(value) === 'object') {
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
        _superPropGet(CustomLinkBlot, "format", this, 3)([name, value]);
      } else {
        // Gestisci altri formati
        _superPropGet(CustomLinkBlot, "format", this, 3)([name, value]);
      }
    }
  }], [{
    key: "create",
    value: function create(value) {
      var url = value;
      var blank = false;
      if (_typeof(value) === 'object') {
        url = value.url || '';
        blank = value.blank === 'true' || value.blank === true;
      }
      var node = _superPropGet(CustomLinkBlot, "create", this, 2)([url]);
      node.setAttribute('data-blank', blank.toString());
      return node;
    }
  }, {
    key: "formats",
    value: function formats(node) {
      return {
        url: node.getAttribute('href'),
        blank: node.getAttribute('data-blank') || 'false'
      };
    }
  }]);
}(Link);

;// ./node_modules/normalize-url/index.js
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
const DATA_URL_DEFAULT_MIME_TYPE = 'text/plain';
const DATA_URL_DEFAULT_CHARSET = 'us-ascii';

const testParameter = (name, filters) => filters.some(filter => filter instanceof RegExp ? filter.test(name) : filter === name);

const supportedProtocols = new Set([
	'https:',
	'http:',
	'file:',
]);

const hasCustomProtocol = urlString => {
	try {
		const {protocol} = new URL(urlString);

		return protocol.endsWith(':')
			&& !protocol.includes('.')
			&& !supportedProtocols.has(protocol);
	} catch {
		return false;
	}
};

const normalizeDataURL = (urlString, {stripHash}) => {
	const match = /^data:(?<type>[^,]*?),(?<data>[^#]*?)(?:#(?<hash>.*))?$/.exec(urlString);

	if (!match) {
		throw new Error(`Invalid URL: ${urlString}`);
	}

	let {type, data, hash} = match.groups;
	const mediaType = type.split(';');
	hash = stripHash ? '' : hash;

	let isBase64 = false;
	if (mediaType[mediaType.length - 1] === 'base64') {
		mediaType.pop();
		isBase64 = true;
	}

	// Lowercase MIME type
	const mimeType = mediaType.shift()?.toLowerCase() ?? '';
	const attributes = mediaType
		.map(attribute => {
			let [key, value = ''] = attribute.split('=').map(string => string.trim());

			// Lowercase `charset`
			if (key === 'charset') {
				value = value.toLowerCase();

				if (value === DATA_URL_DEFAULT_CHARSET) {
					return '';
				}
			}

			return `${key}${value ? `=${value}` : ''}`;
		})
		.filter(Boolean);

	const normalizedMediaType = [
		...attributes,
	];

	if (isBase64) {
		normalizedMediaType.push('base64');
	}

	if (normalizedMediaType.length > 0 || (mimeType && mimeType !== DATA_URL_DEFAULT_MIME_TYPE)) {
		normalizedMediaType.unshift(mimeType);
	}

	return `data:${normalizedMediaType.join(';')},${isBase64 ? data.trim() : data}${hash ? `#${hash}` : ''}`;
};

function normalizeUrl(urlString, options) {
	options = {
		defaultProtocol: 'http',
		normalizeProtocol: true,
		forceHttp: false,
		forceHttps: false,
		stripAuthentication: true,
		stripHash: false,
		stripTextFragment: true,
		stripWWW: true,
		removeQueryParameters: [/^utm_\w+/i],
		removeTrailingSlash: true,
		removeSingleSlash: true,
		removeDirectoryIndex: false,
		removeExplicitPort: false,
		sortQueryParameters: true,
		...options,
	};

	// Legacy: Append `:` to the protocol if missing.
	if (typeof options.defaultProtocol === 'string' && !options.defaultProtocol.endsWith(':')) {
		options.defaultProtocol = `${options.defaultProtocol}:`;
	}

	urlString = urlString.trim();

	// Data URL
	if (/^data:/i.test(urlString)) {
		return normalizeDataURL(urlString, options);
	}

	if (hasCustomProtocol(urlString)) {
		return urlString;
	}

	const hasRelativeProtocol = urlString.startsWith('//');
	const isRelativeUrl = !hasRelativeProtocol && /^\.*\//.test(urlString);

	// Prepend protocol
	if (!isRelativeUrl) {
		urlString = urlString.replace(/^(?!(?:\w+:)?\/\/)|^\/\//, options.defaultProtocol);
	}

	const urlObject = new URL(urlString);

	if (options.forceHttp && options.forceHttps) {
		throw new Error('The `forceHttp` and `forceHttps` options cannot be used together');
	}

	if (options.forceHttp && urlObject.protocol === 'https:') {
		urlObject.protocol = 'http:';
	}

	if (options.forceHttps && urlObject.protocol === 'http:') {
		urlObject.protocol = 'https:';
	}

	// Remove auth
	if (options.stripAuthentication) {
		urlObject.username = '';
		urlObject.password = '';
	}

	// Remove hash
	if (options.stripHash) {
		urlObject.hash = '';
	} else if (options.stripTextFragment) {
		urlObject.hash = urlObject.hash.replace(/#?:~:text.*?$/i, '');
	}

	// Remove duplicate slashes if not preceded by a protocol
	// NOTE: This could be implemented using a single negative lookbehind
	// regex, but we avoid that to maintain compatibility with older js engines
	// which do not have support for that feature.
	if (urlObject.pathname) {
		// TODO: Replace everything below with `urlObject.pathname = urlObject.pathname.replace(/(?<!\b[a-z][a-z\d+\-.]{1,50}:)\/{2,}/g, '/');` when Safari supports negative lookbehind.

		// Split the string by occurrences of this protocol regex, and perform
		// duplicate-slash replacement on the strings between those occurrences
		// (if any).
		const protocolRegex = /\b[a-z][a-z\d+\-.]{1,50}:\/\//g;

		let lastIndex = 0;
		let result = '';
		for (;;) {
			const match = protocolRegex.exec(urlObject.pathname);
			if (!match) {
				break;
			}

			const protocol = match[0];
			const protocolAtIndex = match.index;
			const intermediate = urlObject.pathname.slice(lastIndex, protocolAtIndex);

			result += intermediate.replace(/\/{2,}/g, '/');
			result += protocol;
			lastIndex = protocolAtIndex + protocol.length;
		}

		const remnant = urlObject.pathname.slice(lastIndex, urlObject.pathname.length);
		result += remnant.replace(/\/{2,}/g, '/');

		urlObject.pathname = result;
	}

	// Decode URI octets
	if (urlObject.pathname) {
		try {
			urlObject.pathname = decodeURI(urlObject.pathname);
		} catch {}
	}

	// Remove directory index
	if (options.removeDirectoryIndex === true) {
		options.removeDirectoryIndex = [/^index\.[a-z]+$/];
	}

	if (Array.isArray(options.removeDirectoryIndex) && options.removeDirectoryIndex.length > 0) {
		let pathComponents = urlObject.pathname.split('/');
		const lastComponent = pathComponents[pathComponents.length - 1];

		if (testParameter(lastComponent, options.removeDirectoryIndex)) {
			pathComponents = pathComponents.slice(0, -1);
			urlObject.pathname = pathComponents.slice(1).join('/') + '/';
		}
	}

	if (urlObject.hostname) {
		// Remove trailing dot
		urlObject.hostname = urlObject.hostname.replace(/\.$/, '');

		// Remove `www.`
		if (options.stripWWW && /^www\.(?!www\.)[a-z\-\d]{1,63}\.[a-z.\-\d]{2,63}$/.test(urlObject.hostname)) {
			// Each label should be max 63 at length (min: 1).
			// Source: https://en.wikipedia.org/wiki/Hostname#Restrictions_on_valid_host_names
			// Each TLD should be up to 63 characters long (min: 2).
			// It is technically possible to have a single character TLD, but none currently exist.
			urlObject.hostname = urlObject.hostname.replace(/^www\./, '');
		}
	}

	// Remove query unwanted parameters
	if (Array.isArray(options.removeQueryParameters)) {
		// eslint-disable-next-line unicorn/no-useless-spread -- We are intentionally spreading to get a copy.
		for (const key of [...urlObject.searchParams.keys()]) {
			if (testParameter(key, options.removeQueryParameters)) {
				urlObject.searchParams.delete(key);
			}
		}
	}

	if (!Array.isArray(options.keepQueryParameters) && options.removeQueryParameters === true) {
		urlObject.search = '';
	}

	// Keep wanted query parameters
	if (Array.isArray(options.keepQueryParameters) && options.keepQueryParameters.length > 0) {
		// eslint-disable-next-line unicorn/no-useless-spread -- We are intentionally spreading to get a copy.
		for (const key of [...urlObject.searchParams.keys()]) {
			if (!testParameter(key, options.keepQueryParameters)) {
				urlObject.searchParams.delete(key);
			}
		}
	}

	// Sort query parameters
	if (options.sortQueryParameters) {
		urlObject.searchParams.sort();

		// Calling `.sort()` encodes the search parameters, so we need to decode them again.
		try {
			urlObject.search = decodeURIComponent(urlObject.search);
		} catch {}
	}

	if (options.removeTrailingSlash) {
		urlObject.pathname = urlObject.pathname.replace(/\/$/, '');
	}

	// Remove an explicit port number, excluding a default port number, if applicable
	if (options.removeExplicitPort && urlObject.port) {
		urlObject.port = '';
	}

	const oldUrlString = urlString;

	// Take advantage of many of the Node `url` normalizations
	urlString = urlObject.toString();

	if (!options.removeSingleSlash && urlObject.pathname === '/' && !oldUrlString.endsWith('/') && urlObject.hash === '') {
		urlString = urlString.replace(/\/$/, '');
	}

	// Remove ending `/` unless removeSingleSlash is false
	if ((options.removeTrailingSlash || urlObject.pathname === '/') && urlObject.hash === '' && options.removeSingleSlash) {
		urlString = urlString.replace(/\/$/, '');
	}

	// Restore relative protocol, if applicable
	if (hasRelativeProtocol && !options.normalizeProtocol) {
		urlString = urlString.replace(/^http:\/\//, '//');
	}

	// Remove http/https
	if (options.stripProtocol) {
		urlString = urlString.replace(/^(?:https?:)?\/\//, '');
	}

	return urlString;
}

;// ./src/assets/quill2-custom-link-template.html
// Module
var code = `<div> <input type="hidden" id="ql-custom-link-url"> <div class="ql-custom-link-tabs"> <nav> <div class="active" data-ref="manual" data-l10n="link_tab">Link</div> <div data-ref="resource" data-l10n="search_tab">Search</div> </nav> <div class="ql-custom-link-tab active" data-ref="manual"> <div class="form-group"> <label for="ql-custom-link-url" data-l10n="url_or_email_label">URL or e-mail address</label> <div class="url-wrapper"> <input type="text" class="ql-custom-link-url" placeholder="https://www.google.com"> <span class="open-url" data-tip="Test URL"><svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m21.0035 10c.5523 0 1-.44772 1-1v-6c0-.55228-.4477-1-1-1h-6.0036c-.5523 0-1 .44771-1 1 0 .55228.4477 1 1 1h3.5896l-8.60667 8.6066c-.39052.3905-.39052 1.0237 0 1.4142.39057.3906 1.02367.3906 1.41417 0l8.6065-8.60643v3.58563c0 .55228.4477 1 1 1zm-16.0035-5c-1.65685 0-3 1.34315-3 3v11c0 1.6569 1.34315 3 3 3h11c1.6569 0 3-1.3431 3-3v-6c0-.5523-.4477-1-1-1s-1 .4477-1 1v6c0 .5523-.4477 1-1 1h-11c-.55228 0-1-.4477-1-1v-11c0-.55228.44772-1 1-1h6c.5523 0 1-.44772 1-1s-.4477-1-1-1z" fill="rgb(0,0,0)" fill-rule="evenodd"></path></svg></span> </div> </div> </div> <div class="ql-custom-link-tab" data-ref="resource"> <div class="form-group"> <label for="ql-custom-link-url" data-l10n="start_search_label">Start typing...</label> <div class="url-wrapper"> <div class="ql-custom-link-autocomplete-container"> <input type="text" id="ql-custom-link-autocomplete-input" placeholder="..."> <span class="loading-icon"><svg enable-background="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><path d="m12 23c-6.1 0-11-4.9-11-11 0-.6.4-1 1-1s1 .4 1 1c0 5 4 9 9 9s9-4 9-9-4-9-9-9c-.6 0-1-.4-1-1s.4-1 1-1c6.1 0 11 4.9 11 11s-4.9 11-11 11z" fill="rgb(0,0,0)"></path></g></svg></span> <div id="ql-custom-link-autocomplete-results"></div> </div> <span class="open-url" data-tip="Test URL"><svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m21.0035 10c.5523 0 1-.44772 1-1v-6c0-.55228-.4477-1-1-1h-6.0036c-.5523 0-1 .44771-1 1 0 .55228.4477 1 1 1h3.5896l-8.60667 8.6066c-.39052.3905-.39052 1.0237 0 1.4142.39057.3906 1.02367.3906 1.41417 0l8.6065-8.60643v3.58563c0 .55228.4477 1 1 1zm-16.0035-5c-1.65685 0-3 1.34315-3 3v11c0 1.6569 1.34315 3 3 3h11c1.6569 0 3-1.3431 3-3v-6c0-.5523-.4477-1-1-1s-1 .4477-1 1v6c0 .5523-.4477 1-1 1h-11c-.55228 0-1-.4477-1-1v-11c0-.55228.44772-1 1-1h6c.5523 0 1-.44772 1-1s-.4477-1-1-1z" fill="rgb(0,0,0)" fill-rule="evenodd"></path></svg></span> </div> </div> </div> </div> <div class="form-group"> <label for="ql-custom-link-text" data-l10n="text_label">Link text</label> <input type="text" class="ql-custom-link-text" placeholder="..."> </div> <div class="form-group checkbox-group"> <input type="checkbox" class="ql-custom-link-blank" id="ql-custom-link-blank"> <label for="ql-custom-link-blank" data-l10n="target_blank">Open in new window</label> </div> <div class="ql-custom-link-url-error" data-l10n="invalid_url_error">Please insert a valid URL or email address</div> <div class="btn-group"> <button class="ql-custom-link-remove" data-l10n="remove_button">Remove</button> <button class="ql-custom-link-save" data-l10n="save_button">Save</button> </div> </div>`;
// Exports
/* harmony default export */ const quill2_custom_link_template = (code);
;// ./src/imports/Utils.js
function isValidURL(text) {
  var urlRegex = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\/\S*)?$/;
  return urlRegex.test(text);
}
function extractEmail(text) {
  var emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
  var emails = text.match(emailRegex);
  return emails ? emails[0] : null;
}
;// ./src/imports/CustomLinkTooltip.js
function CustomLinkTooltip_typeof(o) { "@babel/helpers - typeof"; return CustomLinkTooltip_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, CustomLinkTooltip_typeof(o); }
function CustomLinkTooltip_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function CustomLinkTooltip_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, CustomLinkTooltip_toPropertyKey(o.key), o); } }
function CustomLinkTooltip_createClass(e, r, t) { return r && CustomLinkTooltip_defineProperties(e.prototype, r), t && CustomLinkTooltip_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function CustomLinkTooltip_callSuper(t, o, e) { return o = CustomLinkTooltip_getPrototypeOf(o), CustomLinkTooltip_possibleConstructorReturn(t, CustomLinkTooltip_isNativeReflectConstruct() ? Reflect.construct(o, e || [], CustomLinkTooltip_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function CustomLinkTooltip_possibleConstructorReturn(t, e) { if (e && ("object" == CustomLinkTooltip_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return CustomLinkTooltip_assertThisInitialized(t); }
function CustomLinkTooltip_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function CustomLinkTooltip_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (CustomLinkTooltip_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function CustomLinkTooltip_superPropGet(t, o, e, r) { var p = CustomLinkTooltip_get(CustomLinkTooltip_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function CustomLinkTooltip_get() { return CustomLinkTooltip_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = CustomLinkTooltip_superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, CustomLinkTooltip_get.apply(null, arguments); }
function CustomLinkTooltip_superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = CustomLinkTooltip_getPrototypeOf(t));); return t; }
function CustomLinkTooltip_getPrototypeOf(t) { return CustomLinkTooltip_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, CustomLinkTooltip_getPrototypeOf(t); }
function CustomLinkTooltip_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && CustomLinkTooltip_setPrototypeOf(t, e); }
function CustomLinkTooltip_setPrototypeOf(t, e) { return CustomLinkTooltip_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, CustomLinkTooltip_setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = CustomLinkTooltip_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function CustomLinkTooltip_toPropertyKey(t) { var i = CustomLinkTooltip_toPrimitive(t, "string"); return "symbol" == CustomLinkTooltip_typeof(i) ? i : i + ""; }
function CustomLinkTooltip_toPrimitive(t, r) { if ("object" != CustomLinkTooltip_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != CustomLinkTooltip_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




var Tooltip = external_Quill_default()["import"]('ui/tooltip');
var CustomLinkTooltip = /*#__PURE__*/function (_Tooltip) {
  function CustomLinkTooltip(quill, boundsContainer, options) {
    var _this;
    CustomLinkTooltip_classCallCheck(this, CustomLinkTooltip);
    _this = CustomLinkTooltip_callSuper(this, CustomLinkTooltip, [quill, boundsContainer]);
    _defineProperty(_this, "urlInput", void 0);
    _defineProperty(_this, "textInput", void 0);
    _defineProperty(_this, "targetCheckbox", void 0);
    _defineProperty(_this, "saveButton", void 0);
    _defineProperty(_this, "removeButton", void 0);
    _defineProperty(_this, "translations", {});
    _defineProperty(_this, "allowAnyStringAsURL", false);
    _defineProperty(_this, "autocomplete", {
      active: false,
      fn: null
    });
    // Valori di default
    _defineProperty(_this, "url", null);
    _defineProperty(_this, "blank", false);
    _this.translations = options.translations;
    _this.allowAnyStringAsURL = options.allowAnyStringAsURL;
    _this.root.classList.add('ql-custom-link-tooltip');
    _this.root.innerHTML = quill2_custom_link_template;
    _this._localize();
    _this.urlInput = _this.root.querySelector('#ql-custom-link-url');
    _this.manualUrlInput = _this.root.querySelector('.ql-custom-link-url');
    _this.manualUrlInput.addEventListener('keyup', function (event) {
      return _this.urlInput.value = event.target.value;
    });
    _this.textInput = _this.root.querySelector('.ql-custom-link-text');
    _this.targetCheckbox = _this.root.querySelector('.ql-custom-link-blank');
    _this.saveButton = _this.root.querySelector('.ql-custom-link-save');
    _this.removeButton = _this.root.querySelector('.ql-custom-link-remove');
    _this.saveButton.addEventListener('click', _this.save.bind(_this));
    _this.removeButton.addEventListener('click', _this.remove.bind(_this));
    _this.visitURL = _this.root.querySelectorAll('span.open-url');
    _this.visitURL.forEach(function (el) {
      el.addEventListener('click', _this._visitURL.bind(_this));
    });
    _this._handleClickOutside = _this._handleClickOutside.bind(_this);
    _this._handleTextChange();
    _this._handleTips();
    if (options.autocomplete.active && typeof options.autocomplete.fn === 'function') {
      _this.autocomplete = options.autocomplete;
      _this._handleAutocomplete();
    } else {
      var resourceElements = _this.root.querySelectorAll('[data-ref="resource"]');
      resourceElements.forEach(function (el) {
        el.style.display = 'none';
      });
    }
    _this._handleTabs();
    _this.hide();
    return _this;
  }

  // Sovrascrivo metodo originale per posizionare la tooltip
  CustomLinkTooltip_inherits(CustomLinkTooltip, _Tooltip);
  return CustomLinkTooltip_createClass(CustomLinkTooltip, [{
    key: "position",
    value: function position(bounds) {
      var tooltipWidth = this.root.offsetWidth;
      var tooltipHeight = this.root.offsetHeight;
      var editorBounds = this.quill.container.getBoundingClientRect();
      var left = bounds.left + window.scrollX;
      if (left + tooltipWidth > editorBounds.right) {
        left = editorBounds.right - tooltipWidth;
      }
      var top = bounds.bottom + window.scrollY + 5; // 5px di margine
      // if (top + tooltipHeight > window.innerHeight) {
      // 	// Se la tooltip non entra nello schermo posiziona sopra
      // 	top = bounds.top + window.scrollY - tooltipHeight - 5;
      // }
      this.root.style.left = "".concat(left, "px");
      this.root.style.top = "".concat(top, "px");
    }

    // Sovrascrivo metodo originale per mostrare la tooltip
  }, {
    key: "show",
    value: function show(params) {
      var _this2 = this;
      var range = this.quill.getSelection();
      if (range == null) return;
      this.range = range;
      this._reset();
      CustomLinkTooltip_superPropGet(CustomLinkTooltip, "show", this, 3)([]);
      this.textInput.value = this.quill.getText(range.index, range.length);
      if (Object.keys(params).length > 0) {
        this.removeButton.style.display = 'block';
        this.textInput.parentElement.style.display = 'none';
        this.urlInput.value = params.url;
        this.manualUrlInput.value = params.url.replace(/^mailto:/, '');
        this.targetCheckbox.checked = params.blank === 'true';
      }
      this.position(this.quill.getBounds(range));
      setTimeout(function () {
        document.addEventListener('click', _this2._handleClickOutside);
      }, 10);
    }

    // Sovrascrivo metodo originale salvare i dati e chiudere la tooltip
  }, {
    key: "save",
    value: function save() {
      this._toggleURLError(false);
      var url = this.urlInput.value.trim();
      var text = this.textInput.value;
      var isBlank = this.targetCheckbox.checked;
      if (!this.range || !url) return;
      var urlString;
      var email = extractEmail(url);
      if (email) {
        urlString = 'mailto:' + email;
      } else {
        if (this.allowAnyStringAsURL) {
          urlString = url;
        } else {
          if (isValidURL(url)) {
            urlString = normalizeUrl(url, {
              stripWWW: false,
              normalizeProtocol: false,
              forceHttps: true
            });
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
  }, {
    key: "hide",
    value: function hide() {
      CustomLinkTooltip_superPropGet(CustomLinkTooltip, "hide", this, 3)([]);
      document.removeEventListener('click', this._handleClickOutside);
    }

    // Sovrascrivo metodo originale per rimuovere il link
  }, {
    key: "remove",
    value: function remove() {
      this.quill.format('link', false);
      this.hide();
    }
  }, {
    key: "_reset",
    value: function _reset() {
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
  }, {
    key: "_handleTips",
    value: function _handleTips() {
      // Create tooltip div if it doesn't exist already
      var tooltip;
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
      var tipElements = this.root.querySelectorAll("[data-tip]");
      tipElements.forEach(function (element) {
        element.addEventListener("mouseenter", function (e) {
          tooltip.textContent = e.target.getAttribute('data-tip');
          tooltip.style.display = "block";
          var rect = element.getBoundingClientRect();
          tooltip.style.left = "".concat(rect.left + rect.width / 2 - tooltip.offsetWidth / 2, "px");
          tooltip.style.top = "".concat(rect.top - tooltip.offsetHeight - 5, "px");
          // tooltip.style.top = `${rect.bottom + 5}px`;
        });
        element.addEventListener("mouseleave", function () {
          tooltip.style.display = "none";
        });
      });
    }
  }, {
    key: "_handleTabs",
    value: function _handleTabs() {
      var tabNavItems = this.root.querySelectorAll('.ql-custom-link-tabs nav div');
      this.tabNavItems = tabNavItems;
      var tabContents = this.root.querySelectorAll('.ql-custom-link-tab');
      tabNavItems.forEach(function (navItem) {
        navItem.addEventListener('click', function () {
          tabNavItems.forEach(function (item) {
            return item.classList.remove('active');
          });
          navItem.classList.add('active');
          tabContents.forEach(function (tab) {
            tab.classList.remove('active');
            if (tab.dataset.ref === navItem.dataset.ref) {
              tab.classList.add('active');
            }
          });
        });
      });
    }
  }, {
    key: "_toggleURLError",
    value: function _toggleURLError(show) {
      var errorEl = this.root.querySelector('.ql-custom-link-url-error');
      if (show) {
        errorEl.style.display = 'block';
        this.manualUrlInput.classList.add('error');
      } else {
        errorEl.style.display = 'none';
        this.manualUrlInput.classList.remove('error');
      }
    }
  }, {
    key: "_resetAutocomplete",
    value: function _resetAutocomplete() {
      var input = this.root.querySelector('#ql-custom-link-autocomplete-input');
      var resultsContainer = this.root.querySelector('#ql-custom-link-autocomplete-results');
      if (input) input.value = '';
      if (resultsContainer) {
        resultsContainer.innerHTML = '';
        resultsContainer.style.display = 'none';
      }
    }
  }, {
    key: "_handleAutocomplete",
    value: function _handleAutocomplete() {
      var _this4 = this;
      var urlInput = this.root.querySelector('#ql-custom-link-url');
      var input = this.root.querySelector('#ql-custom-link-autocomplete-input');
      var resultsContainer = this.root.querySelector('#ql-custom-link-autocomplete-results');
      function debounce(func, delay) {
        var timeoutId;
        return function () {
          var _this3 = this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          clearTimeout(timeoutId);
          timeoutId = setTimeout(function () {
            func.apply(_this3, args);
          }, delay);
        };
      }
      function showResults(results) {
        resultsContainer.innerHTML = '';
        if (results.length === 0) {
          resultsContainer.style.display = 'none';
          return;
        }
        var groups = results.reduce(function (prev, curr) {
          if (typeof curr.group === 'undefined') {
            curr.group = 'Results';
          }
          if (typeof prev[curr.group] === 'undefined') {
            prev[curr.group] = [];
          }
          prev[curr.group].push(curr);
          return prev;
        }, {});
        Object.keys(groups).forEach(function (g) {
          var group = groups[g];
          var title = document.createElement('div');
          title.classList.add('group-title');
          title.textContent = g;
          resultsContainer.appendChild(title);
          var ul = document.createElement('ul');
          group.forEach(function (result) {
            var li = document.createElement('li');
            li.textContent = result.label;
            li.addEventListener('click', function () {
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
      var handleInput = function handleInput() {
        var query = input.value.trim();
        if (query.length === 0) {
          resultsContainer.style.display = 'none';
          return;
        }
        input.parentElement.classList.add('loading');
        input.disabled = true;
        _this4.autocomplete.fn(query).then(function (results) {
          input.parentElement.classList.remove('loading');
          input.disabled = false;
          input.focus();
          showResults(results);
        }, function (error) {
          input.parentElement.classList.remove('loading');
          input.disabled = false;
          input.focus();
          console.error(error);
        });
      };
      input.addEventListener('input', debounce(handleInput, 250));
      this.root.addEventListener('click', function (event) {
        if (!input.contains(event.target) && !resultsContainer.contains(event.target)) {
          resultsContainer.style.display = 'none';
        }
      });
    }
  }, {
    key: "_localize",
    value: function _localize() {
      var _this5 = this;
      Object.keys(this.translations).forEach(function (k) {
        var el = _this5.root.querySelector('[data-l10n="' + k + '"]');
        if (el) el.textContent = _this5.translations[k];
      });
    }
  }, {
    key: "_visitURL",
    value: function _visitURL(event) {
      var url = this.urlInput.value;
      var urlString;
      var email = extractEmail(url);
      if (email) {
        urlString = 'mailto:' + email;
      } else if (isValidURL(url)) {
        urlString = normalizeUrl(url, {
          stripWWW: false,
          normalizeProtocol: false,
          forceHttps: true
        });
      } else return;
      if (urlString) window.open(urlString, '_blank');
      event.preventDefault();
    }
  }, {
    key: "_handleClickOutside",
    value: function _handleClickOutside(event) {
      if (!this.root.contains(event.target)) {
        this.hide();
      }
    }
  }, {
    key: "_handleTextChange",
    value: function _handleTextChange() {
      var _this6 = this;
      this.quill.on('text-change', function (delta, oldDelta, source) {
        if (source === 'user') {
          _this6.hide();
        }
      });
    }
  }]);
}(Tooltip);

;// ./src/imports/CustomLinkDefaults.js
/* harmony default export */ const CustomLinkDefaults = ({
  allowAnyStringAsURL: false,
  translations: {
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
    active: false,
    fn: null
  }
});
;// ./src/QuillCustomLink.js
function QuillCustomLink_typeof(o) { "@babel/helpers - typeof"; return QuillCustomLink_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, QuillCustomLink_typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { QuillCustomLink_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function QuillCustomLink_defineProperty(e, r, t) { return (r = QuillCustomLink_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function QuillCustomLink_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function QuillCustomLink_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, QuillCustomLink_toPropertyKey(o.key), o); } }
function QuillCustomLink_createClass(e, r, t) { return r && QuillCustomLink_defineProperties(e.prototype, r), t && QuillCustomLink_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function QuillCustomLink_toPropertyKey(t) { var i = QuillCustomLink_toPrimitive(t, "string"); return "symbol" == QuillCustomLink_typeof(i) ? i : i + ""; }
function QuillCustomLink_toPrimitive(t, r) { if ("object" != QuillCustomLink_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != QuillCustomLink_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function QuillCustomLink_callSuper(t, o, e) { return o = QuillCustomLink_getPrototypeOf(o), QuillCustomLink_possibleConstructorReturn(t, QuillCustomLink_isNativeReflectConstruct() ? Reflect.construct(o, e || [], QuillCustomLink_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function QuillCustomLink_possibleConstructorReturn(t, e) { if (e && ("object" == QuillCustomLink_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return QuillCustomLink_assertThisInitialized(t); }
function QuillCustomLink_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function QuillCustomLink_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (QuillCustomLink_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function QuillCustomLink_getPrototypeOf(t) { return QuillCustomLink_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, QuillCustomLink_getPrototypeOf(t); }
function QuillCustomLink_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && QuillCustomLink_setPrototypeOf(t, e); }
function QuillCustomLink_setPrototypeOf(t, e) { return QuillCustomLink_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, QuillCustomLink_setPrototypeOf(t, e); }

var Quill = window.Quill || (external_Quill_default());



var Module = Quill["import"]('core/module');
var QuillCustomLink = /*#__PURE__*/function (_Module) {
  function QuillCustomLink(quill, options) {
    var _this;
    QuillCustomLink_classCallCheck(this, QuillCustomLink);
    _this = QuillCustomLink_callSuper(this, QuillCustomLink, [quill, options]);
    _this.quill = quill;
    _this.range = null;
    _this.options = _objectSpread(_objectSpread({}, CustomLinkDefaults), options);
    if (_this.options.autocomplete.active && typeof _this.options.autocomplete.fn !== "function") {
      console.warn("[Missing config] 'autocomplete.fn' function that returns a promise is required when 'autocomplete.active' is true.");
      _this.options.autocomplete.active = false;
      _this.options.autocomplete.fn = null;
    }
    Quill.register('formats/link', CustomLinkBlot, true);
    _this.tooltip = new CustomLinkTooltip(quill, quill.container, {
      allowAnyStringAsURL: _this.options.allowAnyStringAsURL,
      translations: _this.options.translations,
      autocomplete: _this.options.autocomplete
    });
    var toolbar = quill.getModule('toolbar');
    if (toolbar) {
      toolbar.addHandler('link', function () {
        _this.tooltip.hide();
        setTimeout(function () {
          var range = _this.quill.getSelection();
          if (range == null) {
            _this.editLink(null);
          } else {
            var params = _this.getRangeLinkParams(range);
            _this.tooltip.show(params);
          }
        });
      });
    }
    quill.on('selection-change', function (range, oldRange, source) {
      try {
        if (range == null || !(quill !== null && quill !== void 0 && quill.hasFocus())) return;
        if (source === 'user') {
          var _this$quill$theme;
          (_this$quill$theme = _this.quill.theme) === null || _this$quill$theme === void 0 || _this$quill$theme.tooltip.hide(); // Chiudo la tooltip di default
        }
      } catch (e) {
        console.error('Link Listener Error: ', e);
      }
    });
    quill.root.addEventListener('click', function (event) {
      if (event.target.tagName === 'A') {
        event.preventDefault();
        var node = event.target;
        var blot = Quill.find(node);
        if (blot) _this.editLink(blot);
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
    return _this;
  }
  QuillCustomLink_inherits(QuillCustomLink, _Module);
  return QuillCustomLink_createClass(QuillCustomLink, [{
    key: "getRangeLinkParams",
    value: function getRangeLinkParams(range) {
      var _delta$ops$0$attribut;
      var delta = this.quill.getContents(range.index, range.length);
      if (delta.ops.length === 1 && (_delta$ops$0$attribut = delta.ops[0].attributes) !== null && _delta$ops$0$attribut !== void 0 && _delta$ops$0$attribut.link) {
        var _delta$ops$0$attribut2;
        return (_delta$ops$0$attribut2 = delta.ops[0].attributes) === null || _delta$ops$0$attribut2 === void 0 ? void 0 : _delta$ops$0$attribut2.link;
      }
      return {};
    }
  }, {
    key: "editLink",
    value: function editLink(blot) {
      var params = {};
      if (blot) {
        var index = this.quill.getIndex(blot);
        var length = blot.length();
        this.quill.setSelection(index, length);
        var delta = this.quill.getContents(index, length);
        params = delta.ops[0].attributes.link;
      }
      this.tooltip.show(params);
    }
  }]);
}(Module);
;// ./src/index.js


if (typeof window !== "undefined") {
  window.QuillCustomLink = QuillCustomLink;
}
/* harmony default export */ const src = (QuillCustomLink); // ES6
 // For UMD
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});