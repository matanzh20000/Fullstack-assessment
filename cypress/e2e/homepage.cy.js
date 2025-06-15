import 'cypress-real-events/support';
const HomePage = require('../pages/HomePage');

describe('React homePage tests', () => {
  // visit the react homepage (baseURL) before each test
  beforeEach(() => {
    cy.visit('')
  })

  it('Contains header-like navigation area and footer', () => {
    // For a lack of <header> tag, I check the presence of the main navigation link
    cy.get('a[href="/"]').should('be.visible');

    // Check footer is present
    HomePage.getFooter().should('exist').and('be.visible');
  });

  it('toggles dark/light mode', () => {
    // Check that the dark mode toggle is present and visible
    HomePage.DarkThemeToggle().click();
    // Check that the light mode toggle is present and visible
    HomePage.LightThemeToggle().should('exist').and('be.visible');
    // Check that the dark mode is set in local storage
    cy.window().then((win) => {
      expect(win.localStorage.getItem('theme')).to.equal('dark');
    });
    // Reload the page
    cy.reload();
    // Check that the dark mode toggle is still present and visible
    HomePage.DarkThemeToggle().should('exist').and('not.visible');
  });

  it('can navigate using keyboard', () => {

    // Check that the first button is focused
    HomePage.getStartAttribute('button');

    // Press tab twice to navigate through the page
    cy.pressTabTimes(2);

    // Check that the first link is focused
    cy.focused()
      .should('have.prop', 'tagName', 'A')

    // Press tab twice to navigate to the next button, and check that it is focused
    cy.pressTabTimes(2);
    cy.focused().invoke('prop', 'tagName').should('eq', 'BUTTON');
  });

  it('Persists dark mode after page reload', () => {
    // Check that the dark mode toggle is present and visible
    HomePage.DarkThemeToggle().click();
    // Check that the light mode toggle is present and visible
    HomePage.LightThemeToggle().should('exist').and('be.visible');
    // Reload the page
    cy.reload();
    // Check that the dark mode toggle is still present and visible
    HomePage.DarkThemeToggle().should('exist').and('not.visible');
  })

  const viewports = ['macbook-16', 'samsung-s10', 'ipad-2', 'iphone-x']

  viewports.forEach(viewport => {
    it(`supports responsive viewport for ${viewport} `, () => {
      cy.viewport(viewport);
      // Check that the dark mode toggle is present and visible
      HomePage.DarkThemeToggle().should('exist').and('be.visible');
    });
  });
})