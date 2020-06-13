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
    it('verify total result says "Total: 0"', function () {
        const totalText = $('h3').getText();
        assert.equal('Total: 0' ,totalText );
    });
    it('verify that Add Name Field is present', function () {
        const totalCounterTitle =  $('[name="name"]').isDisplayed()
        expect(totalCounterTitle).toEqual(true)
    });
    it('verify that the Add Name Field button Title text is "Enter Counter Title:"', function () {
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
    it('verify that the Default Value Field is present ', function () {
        const defaultValue = $('[data-testid="counter-value-input"]').isDisplayed();
        expect(defaultValue).toEqual(true)
    });
    it('verify that the Add Name Field button Title text is "Enter Initial Count:"', function () {
        const labelArr = $$('label');
        const labelArr2 = labelArr[2].getText();
        assert.equal(labelArr2 , 'Enter Initial Count:');
    });
    it('verify that Enter Initial Count text = 50 by default', function () {
        const enterInitialCount =  $$('label')[2].isDisplayed();
        expect(enterInitialCount).toEqual(true)
    });
    it('verify that Enter Initial Count text "50" (by default)', function () {
        const textField = $('[name="value"]').getValue()
        assert.equal(textField,'50')
    });
    it('verify that the Add Counter Button is present ', function () {
        const addCounterButton = $(".btn-success.btn").isDisplayed()
        expect(addCounterButton).toEqual(true)
    });
    it('verify that Add Count Button Text is "Add Counter" ', function () {
        const addCountButton = $(".btn-success.btn").getText()
        expect(addCountButton).toEqual('ADD COUNTER')
    });
});





