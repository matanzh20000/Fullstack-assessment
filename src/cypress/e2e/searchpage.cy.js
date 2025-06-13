import 'cypress-real-events/support';
const SearchPage = require('../pages/SearchPage');

describe('React searchPage tests', () => {

    // visit the react homepage (baseURL) before each test
    beforeEach(() => {
        cy.visit('')
    });

    it('can navigate to search page', () => {
        //Open the search overlay
        SearchPage.openSearch();
        // Type in the string 'custom hook'
        cy.get('input[type="search"]').type('custom hook');
        // Check that the search results are displayed after clicking
        SearchPage.getSearchResult('Reusing Logic with Custom Hooks').click();

        // This time, open the search overlay with keyboard
        SearchPage.openSearchWithKeyboard();
        // Click the star icon to save to favorites, and check thatit was saved
        cy.get('.DocSearch-Hit-Container')
            .find('.DocSearch-Hit-action-button')
            .first().click();
    });

    it('can navigate search results with keyboard', () => {
        // Open the search overlay
        SearchPage.openSearch();
        // Type in the string 'custom hook'
        cy.get('input[type="search"]').type('custom hook');
        // press down the arrow key to navigate to the first search result
        cy.pressArrowKeyTimes(2, 'Down');
         // Check that the search results are displayed
        SearchPage.getSearchResult(/when to use custom hooks/i).click();
    });
});