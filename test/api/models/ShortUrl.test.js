const ShortUrl = require('../../../api/models/ShortUrl.js');

describe('ShortUrl', () => {
    it('should model a short url with both the original and the shorten values', () => {
        const _id = 'xyz';
        const originalUrl = 'http://www.google.it';
        const value = 'http://gab.ly/xyz';
        
        const url = new ShortUrl({
            _id,
            originalUrl,
            value
        });

        expect(url.id).toEqual(_id);
        expect(url.originalUrl).toEqual(originalUrl);
        expect(url.value).toEqual(value);
    });
});