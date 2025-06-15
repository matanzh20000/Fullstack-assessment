class SearchPage {
  openSearch() {
    // Open the search overlay by clicking the search button
    cy.contains('button', 'Search').click();
  }
  openSearchWithKeyboard() {
    // Use platform-specific shortcut to open search
    cy.then(() => {
      const isMac = Cypress.platform === 'darwin';
      const shortcut = isMac ? ['Meta', 'k'] : ['Control', 'k'];
      cy.realPress(shortcut);
    });
  }
  // Get the search result by text
  getSearchResult(text) {
    return cy.contains('.DocSearch-Hit-Container', text);
  }
}
module.exports = new SearchPage();


