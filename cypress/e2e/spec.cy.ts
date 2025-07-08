describe('Should load my app', () => {
  it('Should load frist page successfully', () => {
    cy.visit('http://localhost:5173/')
    cy.contains('React')
  })
})