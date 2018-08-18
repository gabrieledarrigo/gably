const config = require('config');
const sinon = require('sinon');
const shortid = require('shortid');
const ShortUrl = require('../../../api/models/ShortUrl');
const UrlService = require('../../../api/services/UrlService.js');
const { APPLICATION_BASE_URL } = config;

describe('UrlService', () => {
    let _id = 'xyz',
        originalUrl = 'http://www.google.it',
        shortUrl = {
            _id,
            originalUrl,
            url: `${APPLICATION_BASE_URL}${_id}`
        }, 
        generateFn,
        findByIdFn;

    beforeEach(() => {
        generateFn = sinon.stub(shortid, 'generate').returns(_id);
        findByIdFn = sinon.stub(ShortUrl, 'findById');
    });

    afterEach(() => {
        sinon.restore();
    });

    fit('should return the server base url', () => {
        const urlService = new UrlService();

        expect(urlService.baseUrl()).toEqual(APPLICATION_BASE_URL);
    });

    it('should return, given a unique _id, a short url', () => {
        const urlService = new UrlService();
        expect(urlService.shortUrl(_id)).toEqual(`${APPLICATION_BASE_URL}${_id}`);
    });

    it('should create a shortUrl object that contain: a unique _id, the original url and the short url', () => {
        const urlService = new UrlService();
        const shortUrl = urlService.createShortUrlObject(originalUrl);

        expect(generateFn.calledOnce).toBe(true);
        expect(shortUrl).toEqual({
            _id,
            originalUrl,
            url: `${config.APPLICATION_BASE_URL}${_id}`
        })
    });

    it('should return a shortUrl by its unique id', async () => {
        findByIdFn.withArgs(_id).returns(shortUrl);

        const urlService = new UrlService();
        expect(await urlService.getShortUrlById(_id)).toEqual(shortUrl);
    });
});
