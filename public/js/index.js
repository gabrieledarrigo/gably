import { shortUrlHandler } from './handlers/short-url.js';
import { clipboardHandler } from './handlers/clipboard.js';

function init() {
    shortUrlHandler();
    clipboardHandler();
}

document.addEventListener('DOMContentLoaded', init);