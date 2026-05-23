describe('Formulario de Consultoria', () => {

    it.only('Deve solicitar consultoria individual', () => {
        cy.start()
        cy.submitLogin('papito@webdojo.com', 'katana123')

        cy.goTo('Formulários', 'Consultoria')

        cy.get('#name').type('Fernando Papito')
        cy.get('input[placeholder="Digite seu email"]').type('papito@teste.com.br')
        cy.get('input[placeholder="(00) 00000-0000"]')
            .type('11 99999-1000')
            .should('have.value', '(11) 99999-1000')

        cy.contains('label', 'Tipo de Consultoria') // selecionando item em select box
            .parent()
            .find('select')
            .select('Individual')

        cy.contains('label', 'Pessoa Física') // Clicando em botão de rádio
            .find('input')
            .check()
            .should('be.checked')

        cy.contains('label', 'Pessoa Jurídica')
            .find('input')
            .should('be.not.checked')

        cy.contains('label', 'CPF') // digitando CPF e validando com mascara
            .parent()
            .find('input')
            .type('52696341044')
            .should('have.value', '526.963.410-44')



        const discoveryChannels = [
            'Instagram',
            'LinkedIn',
            'Udemy',
            'YouTube',
            'Indicação de Amigo'
        ]

        discoveryChannels.forEach((channel) => { // Validação de varios checkbox de uma vez
            cy.contains('label', channel)
                .find('input')
                .check()
                .should('be.checked')
        })

        cy.get('input[type="file"]') // Upload de arquivo
            .selectFile('./cypress/fixtures/document.pdf', { force: true })


        cy.get('textarea[placeholder="Descreva mais detalhes sobre sua necessidade"]') //Campo de texto grande
            .type('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')


        const techs = [
            'Cypress',
            'Selenium',
            'WebDriverIO',
            'Playwright',
            'Robot Framework'
        ]

        techs.forEach((tech) => {
            cy.get('input[placeholder="Digite uma tecnologia e pressione Enter"]')
                .type(tech)
                .type('{enter}')

            cy.contains('label', 'Tecnologias')
                .parent()
                .contains('span', tech)
                .should('be.visible')
        })


        cy.contains('label', 'termos de uso')
            .find('input')
            .check()

        cy.contains('button', 'Enviar formulário')
            .click()

        cy.get('.modal', {timeout: 7000})
            .should('be.visible')
            .find('.modal-content')
            .should('be.visible')
            .and('have.text', 'Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido.')


        cy.contains('button', 'Fechar')
            .click()

    })

    it('Deve verificar os campos obrigatórios', () => {
        cy.start()
        cy.submitLogin('papito@webdojo.com', 'katana123')

        cy.goTo('Formulários', 'Consultoria')

        cy.contains('button', 'Enviar formulário')
            .click()


        cy.contains('label', 'Nome Completo')
            .parent()
            .find('p')
            .should('be.visible')
            .should('have.text', 'Campo obrigatório')
            .and('have.class', 'text-red-400')
            .and('have.css', 'color', 'rgb(248, 113, 113)')

        cy.contains('label', 'Email')
            .parent()
            .find('p')
            .should('be.visible')
            .should('have.text', 'Campo obrigatório')
            .and('have.class', 'text-red-400')
            .and('have.css', 'color', 'rgb(248, 113, 113)')
        
        cy.contains('label', 'termos de uso')
            .parent()
            .find('p')
            .should('be.visible')
            .should('have.text', 'Você precisa aceitar os termos de uso')
            .and('have.class', 'text-red-400')
            .and('have.css', 'color', 'rgb(248, 113, 113)')

        
    })
})

