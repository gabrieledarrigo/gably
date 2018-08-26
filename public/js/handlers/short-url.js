import { logError } from '../utils/log.js';
import { checkStatus, parseJSON } from '../http/index.js';

function shortUrlCreated(data = {}) {
    const results = document.querySelector('.results');
    results.insertAdjacentHTML('beforeend', `
        <li class="results__item">
            <article class="result">
                <h3 class="result__original">
                    <a href="${data.originalUrl}" class="link color__gray-500">
                        ${data.originalUrl}
                    </a>
                </h3>
                <h4 class="result__short">
                    <a href="${window.location.href}${data._id}" class="link color__orange-500">
                        ${window.location.href}${data._id}
                    </a>
                </h4>
                <button class="result__copy" data-clipboard-text="${window.location.href}${data._id}">
                    Copy <span>to clipboard</span>
                </button>
            </article>
        </li>
    `);
}

export function shortUrlHandler() {
    const form = document.querySelector('.shorten-url__form');
    const input = form.querySelector('.shorten-url__input');

    form.addEventListener('submit', e => {
        e.preventDefault();

        const url = input.value;

        fetch('/shorten', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                url
            })
        })
        .then(checkStatus)
        .then(parseJSON)
        .then(shortUrlCreated)
        .catch(logError);
    });
}