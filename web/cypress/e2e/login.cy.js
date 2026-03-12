describe('Login', () => {  
  it('Deve logar com sucesso', () => {
    cy.viewport(1920, 1080)
    cy.visit('http://localhost:3000')

    cy.get('#email').type('papito@webdojo.com')
    cy.get('#password').type('katana123')

    cy.contains('button', 'Entrar').click()

    cy.get('[data-cy="user-name"]')
    .should('be.visible')
    .and('have.text', 'Fernando Papito') //should é uma garantia que o elemento está visível. And fazz mesma coisa mas verifica conteudo
    
    cy.get('[data-cy="welcome-message"]')
    .should('be.visible')
    .and('have.text','Olá QA, esse é o seu Dojo para aprender Automação de Testes.')


  })

/*Describe: Agrupa os testes
  It: Define caso de teste
  Context: */
it('Não deve logar com senha inválida', () => {
    cy.viewport(1920, 1080)
    cy.visit('http://localhost:3000')

    cy.get('#email').type('papito@webdojo.com')
    cy.get('#password').type('katana321')

    cy.contains('button', 'Entrar').click()
   
    cy.contains('Acesso negado! Tente novamente.').should('be.visible') 
  })
})
 