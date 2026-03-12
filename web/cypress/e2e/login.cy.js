describe('Login', () => {  
  it('Deve logar com sucesso', () => {
    cy.start()
    cy.submitLogin('papito@webdojo.com', 'katana123')

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
    cy.start()
    cy.submitLogin('papito@webdojo.com', 'katana321')
   
    cy.contains('Acesso negado! Tente novamente.').should('be.visible') 
  })

  it('Não deve logar com email errado', () => {
    cy.start()
    cy.submitLogin('404@webdojo.com', 'katana123')
   
    cy.contains('Acesso negado! Tente novamente.').should('be.visible') 
  })
})


 