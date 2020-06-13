const expect = require('chai').expect;
import {assert} from 'chai';

describe('Default Counter', () => {
    it('Verify that Counter name is present', function () {
        browser.url('https://likejean.github.io/homework-5/');
        const defaultCounter = $$('h3')[1].isDisplayed();
        expect(defaultCounter).equal(true);
    });
    it('Verify that Counter name text is "1. Default Counter"', function () {
        const defaultCounter = $$('h3')[1].getText();
        expect(defaultCounter).equal('1. Default Counter');
    });
    it('Verify that LF1 is present', function () {
        browser.url('https://likejean.github.io/homework-5/');
        const limitField1 = $$('.btn-info.btn-outline-info.btn.Ripple-parent')[0].isDisplayed();
        expect(limitField1).equal(true);
    });
    it('Verify that LF1 text is "CHANGE STEP OPTIONS?"', function () {
        const limitField1 = $$('.btn-info.btn-outline-info.btn.Ripple-parent')[0].getText();
        expect(limitField1).equal('CHANGE STEP OPTIONS?');
    });
    it('Verify that the LF1 text changed to "1" by click', function () {
        browser.url('https://likejean.github.io/homework-5/');
        $$('.btn-info.btn-outline-info.btn.Ripple-parent')[0].click()
        const limitField1 = $('[name="lower"]').getValue();
        expect(limitField1).equal('1');
    });
    it('Verify that the red cross button is present(LF1)', function () {
        browser.url('https://likejean.github.io/homework-5/');
        $$('.btn-info.btn-outline-info.btn.Ripple-parent')[0].click();
        const crossButtonLeft = $('[name="negative"]').isDisplayed();
        expect(crossButtonLeft).equal(true);
    });
    it('Verify that LF2 is present', function () {
        browser.url('https://likejean.github.io/homework-5/');
        const limitField2 = $$('.btn-info.btn-outline-info.btn.Ripple-parent')[1].isDisplayed();
        expect(limitField2).equal(true);
    });
    it('Verify that the LF2 text is "CHANGE STEP OPTIONS?"', function () {
        const limitField2 = $$('.btn-info.btn-outline-info.btn.Ripple-parent')[1].getText();
        expect(limitField2).equal('CHANGE STEP OPTIONS?');
    });
    it('Verify that the LF2 text changed to "1" by click', function () {
        browser.url('https://likejean.github.io/homework-5/');
        $$('.btn-info.btn-outline-info.btn.Ripple-parent')[1].click();
        const limitField2 = $('[name="upper"]').getValue();
        expect(limitField2).equal('3');
    });
    it('Verify that rounded red circle button is present(LF2)', function () {
        browser.url('https://likejean.github.io/homework-5/');
        $$('.btn-info.btn-outline-info.btn.Ripple-parent')[1].click();
        const crossButtonRight = $('[name="positive"]').isDisplayed();
        expect(crossButtonRight).equal(true);
    });
    it('should verify that black buttons "-1" appears(LF1) ', function () {
        const negative1 = $$('[class="btn-black btn Ripple-parent"]')[0].isDisplayed();
        expect(negative1).equal(true);
    });
    it('should verify that black buttons "-2" appears(LF1) ', function () {
        const negative2 = $$('[class="btn-black btn Ripple-parent"]')[1].isDisplayed();
        expect(negative2).equal(true);
    });
    it('should verify that black buttons "-3" appears(LF1) ', function () {
        const negative3 = $$('[class="btn-black btn Ripple-parent"]')[2].isDisplayed();
        expect(negative3).equal(true);
    });
    it('should verify that black buttons "1" appears(LF1) ', function () {
        const positive1 = $$('[class="btn-black btn Ripple-parent"]')[3].isDisplayed();
        expect(positive1).equal(true);
    });
    it('should verify that black buttons "2" appears(LF1) ', function () {
        const positive2 = $$('[class="btn-black btn Ripple-parent"]')[4].isDisplayed();
        expect(positive2).equal(true);
    });
    it('should verify that black buttons "3" appears(LF1) ', function () {
        const positive3 = $$('[class="btn-black btn Ripple-parent"]')[5].isDisplayed();
        expect(positive3).equal(true);
    });
    it('should verify that the Count Value field is present', function () {
        const countValue = $('[data-test="badge"]').isDisplayed();
        expect(countValue).equal(true);
    });
    it('should verify that the Count Value = "0"', function () {
        const countValue = $('[data-test="badge"]').getText();
        expect(countValue).eq('0');
    });




});

