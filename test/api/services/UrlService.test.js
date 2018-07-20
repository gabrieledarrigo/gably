jest.mock('shortid');

const shortid = require('shortid');
const config = require('config');
const UrlService = require('../../../api/services/UrlService.js');

describe('UrlService', () => {
    it('should create a shortUrl object', () => {
        const _id = 'xyz';
        const originalUrl = 'http://www.google.it';
        
        shortid.generate.mockReturnValue(_id);

        const urlService = new UrlService();
        const shortUrl = urlService.createShortUrl(originalUrl);
        
        expect(shortUrl).toEqual({
            _id,
            originalUrl,
            url: `${config.get('BASE_URL')}${_id}`
        })
    });
});


