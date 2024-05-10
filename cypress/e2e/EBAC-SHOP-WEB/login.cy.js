///<reference types="cypress"/>     
const perfil = require('../../fixtures/perfil.json')
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()

    });

    it('deve fazer login com sucesso', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha)
            cy.get('.woocommerce-form > .button').click()
            cy.get('.page-title').should('contain', 'Minha conta')
           
        
        })

    });

    it('Deve exibir uma mensagem de erro ao inserir usuário invalido', () => {
        cy.get('#username').type(faker.internet.email())
        cy.get('#password').type(faker.internet.password())
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
        cy.get('.woocommerce-error').should('exist')

    })

    it('Deve exibir uma mensagem de erro ao inserir senha invalida', () => {
        cy.get('#username').type('thiago.teste@teste.com.br')
        cy.get('#password').type('7891011')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('be.visible')
        cy.get('.woocommerce-error').should('contain', 'A senha fornecida para o e-mail')
        cy.get('.woocommerce-error').should('exist')

        
})

});
