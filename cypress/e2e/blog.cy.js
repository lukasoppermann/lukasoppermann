/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

describe('Navigation', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="blog"]').click()

    // The new url should include "/about"
    cy.url().should('include', '/blog')

    // The new page should contain an h1 with "About page"
    cy.get('main > ol > li > a > h3').first().should('have.text', 'Make your design system accessible — Color')
  })
})