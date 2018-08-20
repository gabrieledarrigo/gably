import { logError } from '../utils/log.js';

function copyToClipboard(e) {
    e.trigger.textContent = 'Copied';

    setTimeout(() => {
        e.trigger.textContent = 'Copy to clipboard';
    }, 2500);
}

export function clipboardHandler() {
    const clipboard = new window.ClipboardJS('.result__copy');
    clipboard.on('success', copyToClipboard);
    clipboard.on('error', logError);
}