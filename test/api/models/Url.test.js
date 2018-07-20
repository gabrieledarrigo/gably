const Url = require('../../../api/models/Url.js');

describe('Url', () => {
    it('model a url with both the original and the shorten values', () => {
        const shortId = 'xyz';
        const original = 'http://www.google.it';
        const short = 'http://gab.ly/xyz';
        
        const url = new Url({
            shortId,
            original,
            short
        });

        expect(url.shortId).toEqual(shortId);
        expect(url.original).toEqual(original);
        expect(url.short).toEqual(short);
    });
});