const config = require('dotenv').config();
const sinon = require('sinon');
const shortid = require('shortid');
const ShortUrl = require('../../../api/models/ShortUrl');
const UrlService = require('../../../api/services/UrlService');
const { shorten, redirect } = require('../../../api/controllers/shorten-controller');

describe('shortenController', () => {
    let req = {};
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

        const handler = shorten({
            body: {
                url
            }
        }, res, null);

        saveFn.returns(shortUrl);

        const result = await handler();

        expect(saveFn.calledOnceWith(url)).toBe(true);
        expect(jsonFn.calledOnceWith(shortUrl)).toBe(true);
        expect(result).toEqual(JSON.stringify(shortUrl));
    });

    it('should return an error if the url is invalid', async () => {
        const handler = shorten({
            body: {
                url: null
            }
        }, res, null);

        const result = await handler();

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

        const handler = redirect({
            params: {
                id
            }
        }, res, null);

        const result = await handler();

        expect(getShortUrlByIdFn.calledOnceWith(id)).toBe(true);
        expect(redirectFn.calledOnceWith(url)).toBe(true);
    });
});
