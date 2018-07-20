jest.mock('shortid');

const shortid = require('shortid');
const UrlService = require('../../../api/services/UrlService.js');

describe('UrlService', () => {
  
    it('should save a url into the storage layer', () => {
        const original = 'http://www.google.it';
        const shortId = 'xyz';

        shortid.generate.mockReturnValue('xyz');

        const urlService = new UrlService();
        const shortUrl = urlService.createShortUrl(original);


        expect(shortUrl).toEqual({
            original,
            shortId
        })
    });
});