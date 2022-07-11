/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

describe('Imprint', () => {
  it('should navigate to the imprint page', () => {
    // Start from the index page
    cy.visit('/')

    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="imprint"]').click()

    // The new url should include "/about"
    cy.url().should('include', '/imprint')

    // The new page should contain an h1 with "About page"
    cy.get('.imprint__main-content > h2').first().should('have.text', 'Haftung für Inhalte')
  })

  it('check all links in main', () => {
    const ignoreUrls = [
      'https://tools.google.com/dlpage/gaoptout'
    ]
    cy.visit('/imprint')
    cy.get("main").within(() => {
        cy.get("a").each(a => {
           cy.get(a).then((page) => {
            cy.log(page.prop('href'))
            // ignore email
            if (page.prop('href').substr(0,6) === 'mailto' || ignoreUrls.includes(page.prop('href'))) {
              return
            }

            cy.request(page.prop('href'), {failOnStatusCode: false})
            cy.request({url: page.prop('href'), failOnStatusCode:false, })
           })
        })
    })
  })
})