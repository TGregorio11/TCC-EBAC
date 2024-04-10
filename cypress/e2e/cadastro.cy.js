///<reference types= "cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    it('Deve confirmar o cadastro ja existente', () => {

        cy.get('#reg_email').type('thiago.teste@teste.com.br')
        cy.get('#reg_password').type('teste123')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-error').should ('exist')
    });

    it('Deve realizar alteração cadastral',() => {

        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type(faker.internet.password())
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.person.firstName('male'))
        cy.get('#account_last_name'). type(faker.person.lastName('male'))
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso.')
        
        


        


    });

})
