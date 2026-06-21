describe('iFrame', () => {
    it('Tocar vídeo de fundo', () => {
        cy.login()
        cy.contains('Video').click()

        cy.get('iframe[title="Video Player"]') //resumo da função é que ele pega o conteúdo do body do iframe e transforma em elemento do cypress para usar os comandos
            .should('exist')
            .its('0.contentDocument.body') //função usada para pegar propriedades de elementos
            .then(cy.wrap) //wrap pega valor ou elemento e transforma em objeto cypress 
            .as('iFramePlayer') 

        cy.get('@iFramePlayer')
            .find('.play-button')
            .click()

        cy.get('@iFramePlayer')
            .find('.pause-button')
            .should('be.visible')

    })
})