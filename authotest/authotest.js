import {assert} from 'chai';
const except = require('chai').expect;
describe('Test Complex Counter. General', () => {
    it('should have the right title', () => {
        browser.url('https://likejean.github.io/homework-5/');
        const actualTitle = browser.getTitle();
        const expectedTitle = 'Complex Counter App';
        //expect(actualTitle).toEqual(expectedTitle);
        assert.equal(actualTitle,expectedTitle);
    });
    it(' Verify  that the header is present', ()=> {
        const header = $('[class="header"]').isDisplayed()
        expect(header).toEqual(true)
    })
    it('verify that the header says counters', ()=> {
        const headerText = $('.header').getText();
        assert.equal('Counters',headerText);
    });
    it('verify that total result is present', function () {
        const totalRes =  $('h3').isDisplayed();
        expect(totalRes).toEqual(true)
    });
    it('verify total result says Total: ', function () {
        const totalText = $('h3').getText();
        assert.equal('Total: 0' ,totalText );
    });
    it('verify that Enter Counter Title is present', function () {
        const totalCounterTitle =  $('[name="name"]').isDisplayed()
        expect(totalCounterTitle).toEqual(true)
    });
    it('verify that the Enter Counter Title text is Enter Counter Title:', function () {
        const labelArr = $$('label');
        const labelArr1 = labelArr[1].getText()
        labelArr[1].isDisplayed()
        expect(labelArr1).toEqual('Enter Counter Title:')
    });
    it('verify that the Add Name Field button text is "Counter Name" ', function () {
        const addNameText = $('[name="name"]').getValue();
        $('[name="name"]').isDisplayed();
        assert.equal(addNameText, 'Counter Name')
    });
    it('verify that the New Counter Default Value Field is present ', function () {
        const defaultValue = $('[data-testid="counter-value-input"]').isDisplayed();
        expect(defaultValue).toEqual(true)
    });
    it('verify that Enter Initial Count text = 50 by default', function () {
        const enterInitialCount =  $$('label')[2].isDisplayed();
        expect(enterInitialCount).toEqual(true)
    });
    it('verify that Enter Initial Count text = 50 by default', function () {
        const textField = $('[name="value"]').getValue()
        assert.equal(textField,'50')
    });
    it('should display text Enter Initial Count', function () {
        const labelArr = $$('label');
        const labelArr2 = labelArr[2].getText();
        assert.equal(labelArr2 , 'Enter Initial Count:');
    });
    it('verify that the Add Counter Button is present ', function () {
        const addCounterButton = $(".btn-success.btn").isDisplayed()
        expect(addCounterButton).toEqual(true)
    });
    it('verify that Add Count Button Text ia "Add Counter" ', function () {
        const addCountButton = $(".btn-success.btn").getText()
        expect(addCountButton).toEqual('ADD COUNTER')
    });
});

describe('Default Counter', () => {
    it('Verify that Counter name is present', function () {
        const defaultCounter = $$('h3')[1].isDisplayed();
        expect(defaultCounter).toEqual(true);
    });
    it('Verify that Counter name is present', function () {
        const defaultCounter = $$('h3')[1].getText();
        expect(defaultCounter).toEqual('1. Default Counter');
    });

   it('Verify that LF1 is present', function () {
       const limitField1 = $$('.btn-info.btn-outline-info.btn.Ripple-parent')[0].isDisplayed();
       expect(limitField1).toEqual(true);
   });
    it('Verify that Counter Name is "Change Step Options?"', function () {
       const limitField1 = $$('.btn-info.btn-outline-info.btn.Ripple-parent')[0].getText();
       expect(limitField1).toEqual('CHANGE STEP OPTIONS?');
    });
    it('Verify that the LF1 is "1"', function () {
        $$('.btn-info.btn-outline-info.btn.Ripple-parent')[0].click()
        const lF1 = $('[name="lower"]').getValue()
        expect(lF1).toEqual('1');
    });
    it('Verify that the red cross button is present(LF1)', function () {
        $$('.btn-info.btn-outline-info.btn.Ripple-parent')[0].click();
        const crossButton = $('[name="negative"]').isDisplayed();
        expect(crossButton).toEqual(true);
    });
    it('Verify that LF2 is present', function () {
        browser.url('https://likejean.github.io/homework-5/');
        const limitField2 = $$('.btn-info.btn-outline-info.btn.Ripple-parent')[1].isDisplayed();
        expect(limitField2).toEqual(true);
    });





});