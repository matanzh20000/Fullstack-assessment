class HomePage {
    // Navigate to the React homepage
    visit() {
        cy.visit('/');
    }
    // Return the footer element
    getFooter() {
        return cy.get('footer');
    }
    // Return the dark theme toggle button
    DarkThemeToggle() {
        return cy.get('[aria-label="Use Dark Mode"]');
    }
    // Return the light theme toggle button
    LightThemeToggle() {
        return cy.get('[aria-label="Use Light Mode"]');
    }
    // Press the Tab key a specified number of times
    ClickTab(click = 1) {
        for (let i = 0; i < click; i++) {
            cy.realPress('Tab');
        }
    }
    // Focus the first element matching the given selector and assert it's focused
    getStartAttribute(attr) {
        cy.get(attr).first().focus().should('be.focused');
    }
}
module.exports = new HomePage();