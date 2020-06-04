import {assert} from 'chai';

describe('Test Complex Counter', () => {

    it('should have the right title', () => {
        browser.url('https://likejean.github.io/homework-5/');
        const actualTitle = browser.getTitle();
        const expectedTitle = 'Complex Counter App';
        //expect(actualTitle).toEqual(expectedTitle);
        assert.equal(actualTitle,expectedTitle);
    });

    it('should the header is present', () => {
       $('h1').isDisplayed();
    });

    it('should the header text Counters', () => {
        const headerText = $('.header').getText();
        assert.equal('Counters', headerText)
    });

    it('should The Total Result is present', function () {
        $('h3').isDisplayed();
    });

    it('should the total result text is "Total: 0"', function () {
       const totalResultText = $('h3').getText();
       assert.equal('Total: 0',totalResultText)
    });

    it('should the Add Name Field is present', function () {
        $('Counter Name').isDisplayed();
    });
    // it('should the Add Name Field has a name "Counter Name"', function () {
    //     const AddNameFieldText = $('Counter Name').getText();
    //     assert.equal('Counter Name',AddNameFieldText)
    //
    // });


});
