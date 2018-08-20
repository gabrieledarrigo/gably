export function checkStatus(res) {
    if (res.status >= 200 && res.status < 300) {
        return res;
    } else {
        const err = new Error(res.statusText)
        err.res = res;
        throw err;
    }
}

export function parseJSON(res) {
    return res.json();
}