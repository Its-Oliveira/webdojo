describe('Deve logar com sucesso', () => { 
  it('passes', () => {
    cy.viewport(1920, 1080)
    cy.visit('http://localhost:3000')
    cy.get('#email').type('papito@webdojo.com')
    cy.get('#password').type('katana123')
    cy.contains('button', 'Entrar').click()
  })
})

/*Describe: Agrupa os testes
  It: Define caso de teste
  Context: */
