import './assets/quill2-custom-link.scss';

import { QuillCustomLink } from './QuillCustomLink';

if (typeof window !== "undefined") {
    window.QuillCustomLink = QuillCustomLink;
}

export default QuillCustomLink; // ES6
export { QuillCustomLink }; // For UMD