const config = require('config');
const sinon = require('sinon');
const UrlService = require('../../../api/services/UrlService');
const { shorten, redirect } = require('../../../api/controllers/shorten-controller');
const { APPLICATION_BASE_URL } = config;

describe('shortenController', () => {
    let res = {
        status(){ return this; },
        json() {},
        redirect() {}
    },
    jsonFn,
    redirectFn,
    getShortUrlByIdFn,
    saveFn;
    
    beforeEach(() => {
        jsonFn = sinon.stub(res, 'json').callsFake(data => JSON.stringify(data));
        redirectFn = sinon.stub(res, 'redirect');
        getShortUrlByIdFn = sinon.stub(UrlService.prototype, 'getShortUrlById');
        saveFn = sinon.stub(UrlService.prototype, 'save');
    });

    afterEach(() => {
        sinon.restore();
    });

    it('should save a short url', async () => {
        const url = 'http://www.google.it';
        const shortUrl = {
            _id: 'xyz',
            originalUrl: url,
            value: 'http://gab.ly/xyz'
        };

        saveFn.returns(shortUrl);

        const handler = shorten();
        const result = await handler({
            body: {
                url
            }
        }, res, null);

        expect(saveFn.calledOnceWith(url)).toBe(true);
        expect(jsonFn.calledOnceWith(shortUrl)).toBe(true);
        expect(result).toEqual(JSON.stringify(shortUrl));
    });

    it('should return an error if the url is invalid', async () => {
        const handler = shorten();
        const result = await handler({
            body: {
                url: null
            }
        }, res, null);

        expect(saveFn.notCalled).toBe(true);
        expect(result).toEqual(JSON.stringify({
            message: 'Invalid url value'
        }));
    });

    it('should redirect to the original url when a user navigate to an existent short url', async () => {
        const id = 'xyz';
        const url = 'http://www.google.it';
        const shortUrl = {
            _id: id,
            originalUrl: url,
            value: 'http://gab.ly/xyz'
        };

        getShortUrlByIdFn.returns(shortUrl);

        const handler = redirect();
        const result = await handler({
            params: {
                id
            }
        }, res, null);

        expect(getShortUrlByIdFn.calledOnceWith(id)).toBe(true);
        expect(redirectFn.calledOnceWith(url)).toBe(true);
    });

    it('should redirect to the APPLICATION_BASE_URL when a user navigate to an not existent short url', async () => {
        const id = 'abc';
        getShortUrlByIdFn.returns(null);

        const handler = redirect();
        const result = await handler({
            params: {
                id
            }
        }, res, null);

        expect(getShortUrlByIdFn.calledOnceWith(id)).toBe(true);
        expect(redirectFn.calledOnceWith(APPLICATION_BASE_URL)).toBe(true);
    });
});
