/*!
 * Quill Custom Link Module v1.0.0
 * https://github.com/flamasweb/quill2-custom-link
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("Quill")):"function"==typeof define&&define.amd?define(["Quill"],e):"object"==typeof exports?exports.QuillCustomLink=e(require("Quill")):t.QuillCustomLink=e(t.Quill)}(this,(t=>(()=>{"use strict";var e=[,e=>{e.exports=t}],r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={exports:{}};return e[t](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var o={};n.d(o,{default:()=>Z});var i=n(1),l=n.n(i);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,u(n.key),n)}}function u(t){var e=function(t,e){if("object"!=a(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==a(e)?e:e+""}function c(t,e,r){return e=h(e),function(t,e){if(e&&("object"==a(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,p()?Reflect.construct(e,r||[],h(t).constructor):e.apply(t,r))}function p(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(p=function(){return!!t})()}function f(t,e,r,n){var o=d(h(1&n?t.prototype:t),e,r);return 2&n&&"function"==typeof o?function(t){return o.apply(r,t)}:o}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!{}.hasOwnProperty.call(t,e)&&null!==(t=h(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},d.apply(null,arguments)}function h(t){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},h(t)}function v(t,e){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},v(t,e)}var m=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,e,arguments)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&v(t,e)}(e,t),r=e,o=[{key:"create",value:function(t){var r=t,n=!1;"object"===a(t)&&(r=t.url||"",n="true"===t.blank||!0===t.blank);var o=f(e,"create",this,2)([r]);return o.setAttribute("data-blank",n.toString()),o}},{key:"formats",value:function(t){return{url:t.getAttribute("href"),blank:t.getAttribute("data-blank")||"false"}}}],(n=[{key:"format",value:function(t,r){"link"===t&&r?"object"===a(r)?(r.text&&(this.domNode.textContent=r.text),r.url&&this.domNode.setAttribute("href",r.url),this.domNode.setAttribute("data-blank",("true"===r.blank||!0===r.blank).toString()),"true"===r.blank||!0===r.blank?(this.domNode.setAttribute("target","_blank"),this.domNode.setAttribute("rel","noopener noreferrer")):(this.domNode.removeAttribute("target"),this.domNode.removeAttribute("rel"))):this.domNode.setAttribute("href",r):f(e,"format",this,3)([t,r])}}])&&s(r.prototype,n),o&&s(r,o),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n,o}(l().import("formats/link"));const y=(t,e)=>e.some((e=>e instanceof RegExp?e.test(t):e===t)),b=new Set(["https:","http:","file:"]);function g(t,e){if("string"!=typeof(e={defaultProtocol:"http",normalizeProtocol:!0,forceHttp:!1,forceHttps:!1,stripAuthentication:!0,stripHash:!1,stripTextFragment:!0,stripWWW:!0,removeQueryParameters:[/^utm_\w+/i],removeTrailingSlash:!0,removeSingleSlash:!0,removeDirectoryIndex:!1,removeExplicitPort:!1,sortQueryParameters:!0,...e}).defaultProtocol||e.defaultProtocol.endsWith(":")||(e.defaultProtocol=`${e.defaultProtocol}:`),t=t.trim(),/^data:/i.test(t))return((t,{stripHash:e})=>{const r=/^data:(?<type>[^,]*?),(?<data>[^#]*?)(?:#(?<hash>.*))?$/.exec(t);if(!r)throw new Error(`Invalid URL: ${t}`);let{type:n,data:o,hash:i}=r.groups;const l=n.split(";");i=e?"":i;let a=!1;"base64"===l[l.length-1]&&(l.pop(),a=!0);const s=l.shift()?.toLowerCase()??"",u=[...l.map((t=>{let[e,r=""]=t.split("=").map((t=>t.trim()));return"charset"===e&&(r=r.toLowerCase(),"us-ascii"===r)?"":`${e}${r?`=${r}`:""}`})).filter(Boolean)];return a&&u.push("base64"),(u.length>0||s&&"text/plain"!==s)&&u.unshift(s),`data:${u.join(";")},${a?o.trim():o}${i?`#${i}`:""}`})(t,e);if((t=>{try{const{protocol:e}=new URL(t);return e.endsWith(":")&&!e.includes(".")&&!b.has(e)}catch{return!1}})(t))return t;const r=t.startsWith("//");!r&&/^\.*\//.test(t)||(t=t.replace(/^(?!(?:\w+:)?\/\/)|^\/\//,e.defaultProtocol));const n=new URL(t);if(e.forceHttp&&e.forceHttps)throw new Error("The `forceHttp` and `forceHttps` options cannot be used together");if(e.forceHttp&&"https:"===n.protocol&&(n.protocol="http:"),e.forceHttps&&"http:"===n.protocol&&(n.protocol="https:"),e.stripAuthentication&&(n.username="",n.password=""),e.stripHash?n.hash="":e.stripTextFragment&&(n.hash=n.hash.replace(/#?:~:text.*?$/i,"")),n.pathname){const t=/\b[a-z][a-z\d+\-.]{1,50}:\/\//g;let e=0,r="";for(;;){const o=t.exec(n.pathname);if(!o)break;const i=o[0],l=o.index;r+=n.pathname.slice(e,l).replace(/\/{2,}/g,"/"),r+=i,e=l+i.length}r+=n.pathname.slice(e,n.pathname.length).replace(/\/{2,}/g,"/"),n.pathname=r}if(n.pathname)try{n.pathname=decodeURI(n.pathname)}catch{}if(!0===e.removeDirectoryIndex&&(e.removeDirectoryIndex=[/^index\.[a-z]+$/]),Array.isArray(e.removeDirectoryIndex)&&e.removeDirectoryIndex.length>0){let t=n.pathname.split("/");const r=t[t.length-1];y(r,e.removeDirectoryIndex)&&(t=t.slice(0,-1),n.pathname=t.slice(1).join("/")+"/")}if(n.hostname&&(n.hostname=n.hostname.replace(/\.$/,""),e.stripWWW&&/^www\.(?!www\.)[a-z\-\d]{1,63}\.[a-z.\-\d]{2,63}$/.test(n.hostname)&&(n.hostname=n.hostname.replace(/^www\./,""))),Array.isArray(e.removeQueryParameters))for(const t of[...n.searchParams.keys()])y(t,e.removeQueryParameters)&&n.searchParams.delete(t);if(Array.isArray(e.keepQueryParameters)||!0!==e.removeQueryParameters||(n.search=""),Array.isArray(e.keepQueryParameters)&&e.keepQueryParameters.length>0)for(const t of[...n.searchParams.keys()])y(t,e.keepQueryParameters)||n.searchParams.delete(t);if(e.sortQueryParameters){n.searchParams.sort();try{n.search=decodeURIComponent(n.search)}catch{}}e.removeTrailingSlash&&(n.pathname=n.pathname.replace(/\/$/,"")),e.removeExplicitPort&&n.port&&(n.port="");const o=t;return t=n.toString(),e.removeSingleSlash||"/"!==n.pathname||o.endsWith("/")||""!==n.hash||(t=t.replace(/\/$/,"")),(e.removeTrailingSlash||"/"===n.pathname)&&""===n.hash&&e.removeSingleSlash&&(t=t.replace(/\/$/,"")),r&&!e.normalizeProtocol&&(t=t.replace(/^http:\/\//,"//")),e.stripProtocol&&(t=t.replace(/^(?:https?:)?\/\//,"")),t}function k(t){return/^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\/\S*)?$/.test(t)}function w(t){var e=t.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g);return e?e[0]:null}function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function O(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,A(n.key),n)}}function _(t,e,r){return e=j(e),function(t,e){if(e&&("object"==x(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,P()?Reflect.construct(e,r||[],j(t).constructor):e.apply(t,r))}function P(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(P=function(){return!!t})()}function S(t,e,r,n){var o=q(j(1&n?t.prototype:t),e,r);return 2&n&&"function"==typeof o?function(t){return o.apply(r,t)}:o}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!{}.hasOwnProperty.call(t,e)&&null!==(t=j(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},q.apply(null,arguments)}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}function L(t,e){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},L(t,e)}function E(t,e,r){return(e=A(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function A(t){var e=function(t,e){if("object"!=x(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=x(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==x(e)?e:e+""}var R=function(t){function e(t,r,n){var o;(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),E(o=_(this,e,[t,r]),"urlInput",void 0),E(o,"textInput",void 0),E(o,"targetCheckbox",void 0),E(o,"saveButton",void 0),E(o,"removeButton",void 0),E(o,"translations",{}),E(o,"allowAnyStringAsURL",!1),E(o,"autocomplete",{active:!1,fn:null}),E(o,"url",null),E(o,"blank",!1),o.translations=n.translations,o.allowAnyStringAsURL=n.allowAnyStringAsURL,o.root.classList.add("ql-custom-link-tooltip"),o.root.innerHTML='<div> <input type="hidden" id="ql-custom-link-url"> <div class="ql-custom-link-tabs"> <nav> <div class="active" data-ref="manual" data-l10n="link_tab">Link</div> <div data-ref="resource" data-l10n="search_tab">Search</div> </nav> <div class="ql-custom-link-tab active" data-ref="manual"> <div class="form-group"> <label for="ql-custom-link-url" data-l10n="url_or_email_label">URL or e-mail address</label> <div class="url-wrapper"> <input type="text" class="ql-custom-link-url" placeholder="https://www.google.com"> <span class="open-url" data-tip="Test URL"><svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m21.0035 10c.5523 0 1-.44772 1-1v-6c0-.55228-.4477-1-1-1h-6.0036c-.5523 0-1 .44771-1 1 0 .55228.4477 1 1 1h3.5896l-8.60667 8.6066c-.39052.3905-.39052 1.0237 0 1.4142.39057.3906 1.02367.3906 1.41417 0l8.6065-8.60643v3.58563c0 .55228.4477 1 1 1zm-16.0035-5c-1.65685 0-3 1.34315-3 3v11c0 1.6569 1.34315 3 3 3h11c1.6569 0 3-1.3431 3-3v-6c0-.5523-.4477-1-1-1s-1 .4477-1 1v6c0 .5523-.4477 1-1 1h-11c-.55228 0-1-.4477-1-1v-11c0-.55228.44772-1 1-1h6c.5523 0 1-.44772 1-1s-.4477-1-1-1z" fill="rgb(0,0,0)" fill-rule="evenodd"></path></svg></span> </div> </div> </div> <div class="ql-custom-link-tab" data-ref="resource"> <div class="form-group"> <label for="ql-custom-link-url" data-l10n="start_search_label">Start typing...</label> <div class="url-wrapper"> <div class="ql-custom-link-autocomplete-container"> <input type="text" id="ql-custom-link-autocomplete-input" placeholder="..."> <span class="loading-icon"><svg enable-background="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><path d="m12 23c-6.1 0-11-4.9-11-11 0-.6.4-1 1-1s1 .4 1 1c0 5 4 9 9 9s9-4 9-9-4-9-9-9c-.6 0-1-.4-1-1s.4-1 1-1c6.1 0 11 4.9 11 11s-4.9 11-11 11z" fill="rgb(0,0,0)"></path></g></svg></span> <div id="ql-custom-link-autocomplete-results"></div> </div> <span class="open-url" data-tip="Test URL"><svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m21.0035 10c.5523 0 1-.44772 1-1v-6c0-.55228-.4477-1-1-1h-6.0036c-.5523 0-1 .44771-1 1 0 .55228.4477 1 1 1h3.5896l-8.60667 8.6066c-.39052.3905-.39052 1.0237 0 1.4142.39057.3906 1.02367.3906 1.41417 0l8.6065-8.60643v3.58563c0 .55228.4477 1 1 1zm-16.0035-5c-1.65685 0-3 1.34315-3 3v11c0 1.6569 1.34315 3 3 3h11c1.6569 0 3-1.3431 3-3v-6c0-.5523-.4477-1-1-1s-1 .4477-1 1v6c0 .5523-.4477 1-1 1h-11c-.55228 0-1-.4477-1-1v-11c0-.55228.44772-1 1-1h6c.5523 0 1-.44772 1-1s-.4477-1-1-1z" fill="rgb(0,0,0)" fill-rule="evenodd"></path></svg></span> </div> </div> </div> </div> <div class="form-group"> <label for="ql-custom-link-text" data-l10n="text_label">Link text</label> <input type="text" class="ql-custom-link-text" placeholder="..."> </div> <div class="form-group checkbox-group"> <input type="checkbox" class="ql-custom-link-blank" id="ql-custom-link-blank"> <label for="ql-custom-link-blank" data-l10n="target_blank">Open in new window</label> </div> <div class="ql-custom-link-url-error" data-l10n="invalid_url_error">Please insert a valid URL or email address</div> <div class="btn-group"> <button class="ql-custom-link-remove" data-l10n="remove_button">Remove</button> <button class="ql-custom-link-save" data-l10n="save_button">Save</button> </div> </div>',o._localize(),o.urlInput=o.root.querySelector("#ql-custom-link-url"),o.manualUrlInput=o.root.querySelector(".ql-custom-link-url"),o.manualUrlInput.addEventListener("keyup",(function(t){return o.urlInput.value=t.target.value})),o.textInput=o.root.querySelector(".ql-custom-link-text"),o.targetCheckbox=o.root.querySelector(".ql-custom-link-blank"),o.saveButton=o.root.querySelector(".ql-custom-link-save"),o.removeButton=o.root.querySelector(".ql-custom-link-remove"),o.saveButton.addEventListener("click",o.save.bind(o)),o.removeButton.addEventListener("click",o.remove.bind(o)),o.visitURL=o.root.querySelectorAll("span.open-url"),o.visitURL.forEach((function(t){t.addEventListener("click",o._visitURL.bind(o))})),o._handleClickOutside=o._handleClickOutside.bind(o),o._handleTextChange(),o._handleTips(),n.autocomplete.active&&"function"==typeof n.autocomplete.fn)?(o.autocomplete=n.autocomplete,o._handleAutocomplete()):o.root.querySelectorAll('[data-ref="resource"]').forEach((function(t){t.style.display="none"}));return o._handleTabs(),o.hide(),o}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&L(t,e)}(e,t),r=e,n=[{key:"position",value:function(t){var e=this.root.offsetWidth,r=(this.root.offsetHeight,this.quill.container.getBoundingClientRect()),n=t.left+window.scrollX;n+e>r.right&&(n=r.right-e);var o=t.bottom+window.scrollY+5;this.root.style.left="".concat(n,"px"),this.root.style.top="".concat(o,"px")}},{key:"show",value:function(t){var r=this,n=this.quill.getSelection();null!=n&&(this.range=n,this._reset(),S(e,"show",this,3)([]),this.textInput.value=this.quill.getText(n.index,n.length),Object.keys(t).length>0&&(this.removeButton.style.display="block",this.textInput.parentElement.style.display="none",this.urlInput.value=t.url,this.manualUrlInput.value=t.url.replace(/^mailto:/,""),this.targetCheckbox.checked="true"===t.blank),this.position(this.quill.getBounds(n)),setTimeout((function(){document.addEventListener("click",r._handleClickOutside)}),10))}},{key:"save",value:function(){this._toggleURLError(!1);var t=this.urlInput.value.trim(),e=this.textInput.value,r=this.targetCheckbox.checked;if(this.range&&t){var n,o=w(t);if(o)n="mailto:"+o;else if(this.allowAnyStringAsURL)n=t;else{if(!k(t))return void this._toggleURLError(!0);n=g(t,{stripWWW:!1,normalizeProtocol:!1,forceHttps:!0})}this.range.length>0&&this.quill.deleteText(this.range.index,this.range.length),this.quill.insertText(this.range.index,e,"link",{url:n,blank:r}),this.quill.setSelection(this.range.index,e.length),this.hide()}}},{key:"hide",value:function(){S(e,"hide",this,3)([]),document.removeEventListener("click",this._handleClickOutside)}},{key:"remove",value:function(){this.quill.format("link",!1),this.hide()}},{key:"_reset",value:function(){this.url=null,this.blank=!1,this.urlInput.value="",this.textInput.value="",this.targetCheckbox.checked=!1,this.manualUrlInput.value="",this.textInput.parentElement.style.display="block",this.removeButton.style.display="none",this.tabNavItems[0].click(),this._resetAutocomplete()}},{key:"_handleTips",value:function(){var t;document.getElementById("ql-custom-link-tip")||((t=document.createElement("div")).id="ql-custom-link-tip",t.style.position="absolute",t.style.backgroundColor="#333",t.style.color="#fff",t.style.padding="5px 10px",t.style.borderRadius="4px",t.style.fontSize="10px",t.style.display="none",t.style.zIndex="1000",document.body.appendChild(t)),this.root.querySelectorAll("[data-tip]").forEach((function(e){e.addEventListener("mouseenter",(function(r){t.textContent=r.target.getAttribute("data-tip"),t.style.display="block";var n=e.getBoundingClientRect();t.style.left="".concat(n.left+n.width/2-t.offsetWidth/2,"px"),t.style.top="".concat(n.top-t.offsetHeight-5,"px")})),e.addEventListener("mouseleave",(function(){t.style.display="none"}))}))}},{key:"_handleTabs",value:function(){var t=this.root.querySelectorAll(".ql-custom-link-tabs nav div");this.tabNavItems=t;var e=this.root.querySelectorAll(".ql-custom-link-tab");t.forEach((function(r){r.addEventListener("click",(function(){t.forEach((function(t){return t.classList.remove("active")})),r.classList.add("active"),e.forEach((function(t){t.classList.remove("active"),t.dataset.ref===r.dataset.ref&&t.classList.add("active")}))}))}))}},{key:"_toggleURLError",value:function(t){var e=this.root.querySelector(".ql-custom-link-url-error");t?(e.style.display="block",this.manualUrlInput.classList.add("error")):(e.style.display="none",this.manualUrlInput.classList.remove("error"))}},{key:"_resetAutocomplete",value:function(){var t=this.root.querySelector("#ql-custom-link-autocomplete-input"),e=this.root.querySelector("#ql-custom-link-autocomplete-results");t&&(t.value=""),e&&(e.innerHTML="",e.style.display="none")}},{key:"_handleAutocomplete",value:function(){var t,e,r,n=this,o=this.root.querySelector("#ql-custom-link-url"),i=this.root.querySelector("#ql-custom-link-autocomplete-input"),l=this.root.querySelector("#ql-custom-link-autocomplete-results");i.addEventListener("input",(t=function(){var t=i.value.trim();0!==t.length?(i.parentElement.classList.add("loading"),i.disabled=!0,n.autocomplete.fn(t).then((function(t){i.parentElement.classList.remove("loading"),i.disabled=!1,i.focus(),function(t){if(l.innerHTML="",0!==t.length){var e=t.reduce((function(t,e){return void 0===e.group&&(e.group="Results"),void 0===t[e.group]&&(t[e.group]=[]),t[e.group].push(e),t}),{});Object.keys(e).forEach((function(t){var r=e[t],n=document.createElement("div");n.classList.add("group-title"),n.textContent=t,l.appendChild(n);var a=document.createElement("ul");r.forEach((function(t){var e=document.createElement("li");e.textContent=t.label,e.addEventListener("click",(function(){i.value=t.label,o.value=t.url,l.style.display="none"})),a.appendChild(e)})),l.appendChild(a)})),l.style.display="block"}else l.style.display="none"}(t)}),(function(t){i.parentElement.classList.remove("loading"),i.disabled=!1,i.focus(),console.error(t)}))):l.style.display="none"},e=250,function(){for(var n=this,o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];clearTimeout(r),r=setTimeout((function(){t.apply(n,i)}),e)})),this.root.addEventListener("click",(function(t){i.contains(t.target)||l.contains(t.target)||(l.style.display="none")}))}},{key:"_localize",value:function(){var t=this;Object.keys(this.translations).forEach((function(e){var r=t.root.querySelector('[data-l10n="'+e+'"]');r&&(r.textContent=t.translations[e])}))}},{key:"_visitURL",value:function(t){var e,r=this.urlInput.value,n=w(r);if(n)e="mailto:"+n;else{if(!k(r))return;e=g(r,{stripWWW:!1,normalizeProtocol:!1,forceHttps:!0})}e&&window.open(e,"_blank"),t.preventDefault()}},{key:"_handleClickOutside",value:function(t){this.root.contains(t.target)||this.hide()}},{key:"_handleTextChange",value:function(){var t=this;this.quill.on("text-change",(function(e,r,n){"user"===n&&t.hide()}))}}],n&&O(r.prototype,n),o&&O(r,o),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n,o}(l().import("ui/tooltip"));const T={allowAnyStringAsURL:!1,translations:{link_tab:"Link",search_tab:"Search",url_or_email_label:"URL or e-mail address",start_search_label:"Start typing...",text_label:"Link text",target_blank:"Open in new window",remove_button:"Remove",save_button:"Save",invalid_url_error:"Please insert a valid URL or email address."},autocomplete:{active:!0,fn:null}};function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function I(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function U(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?I(Object(r),!0).forEach((function(e){z(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function z(t,e,r){return(e=H(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function B(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,H(n.key),n)}}function H(t){var e=function(t,e){if("object"!=C(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=C(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==C(e)?e:e+""}function Q(t,e,r){return e=$(e),function(t,e){if(e&&("object"==C(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,W()?Reflect.construct(e,r||[],$(t).constructor):e.apply(t,r))}function W(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(W=function(){return!!t})()}function $(t){return $=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},$(t)}function D(t,e){return D=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},D(t,e)}var N=window.Quill||l(),M=function(t){function e(t,r){var n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=Q(this,e,[t,r])).quill=t,n.range=null,n.options=U(U({},T),r),n.options.autocomplete.active&&"function"!=typeof n.options.autocomplete.fn&&(console.warn("[Missing config] 'autocomplete.fn' function that returns a promise is required when 'autocomplete.active' is true."),n.options.autocomplete.active=!1,n.options.autocomplete.fn=null),N.register("formats/link",m,!0),n.tooltip=new R(t,t.container,{allowAnyStringAsURL:n.options.allowAnyStringAsURL,translations:n.options.translations,autocomplete:n.options.autocomplete});var o=t.getModule("toolbar");return o&&o.addHandler("link",(function(){n.tooltip.hide(),setTimeout((function(){var t=n.quill.getSelection();if(null==t)n.editLink(null);else{var e=n.getRangeLinkParams(t);n.tooltip.show(e)}}))})),t.on("selection-change",(function(e,r,o){try{if(null==e||null==t||!t.hasFocus())return;var i;if("user"===o)null===(i=n.quill.theme)||void 0===i||i.tooltip.hide()}catch(t){console.error("Link Listener Error: ",t)}})),t.root.addEventListener("click",(function(t){if("A"===t.target.tagName){t.preventDefault();var e=t.target,r=N.find(e);r&&n.editLink(r)}})),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&D(t,e)}(e,t),r=e,(n=[{key:"getRangeLinkParams",value:function(t){var e,r,n=this.quill.getContents(t.index,t.length);return 1===n.ops.length&&null!==(e=n.ops[0].attributes)&&void 0!==e&&e.link?null===(r=n.ops[0].attributes)||void 0===r?void 0:r.link:{}}},{key:"editLink",value:function(t){var e={};if(t){var r=this.quill.getIndex(t),n=t.length();this.quill.setSelection(r,n),e=this.quill.getContents(r,n).ops[0].attributes.link}this.tooltip.show(e)}}])&&B(r.prototype,n),o&&B(r,o),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n,o}(N.import("core/module"));"undefined"!=typeof window&&(window.QuillCustomLink=M);const Z=M;return o=o.default})()));