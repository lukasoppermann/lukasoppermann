/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

describe('Navigation', () => {
  it('verify home page', () => {
    // Start from the index page
    cy.visit('/')

    // The new page should contain an h1 with "About page"
    cy.get('.Header--intro__slogan').should('have.text', 'Designing experiences with a focus on usability')
    cy.get('#resumeTitle').should('have.text', 'Resumé / recent')
    cy.get('.lab1886 > .Project-excerpt__title > h2').should('have.text', 'LAB1886')
  })

  it('check all links in main', () => {
    const ignoreUrls = [
      'https://www.figma.com/community/plugin/888356646278934516/Design-Tokens'
    ]
    cy.visit('/')
    cy.get("main").within(() => {
        cy.get("a").each(a => {
           cy.get(a).then((page) => {
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