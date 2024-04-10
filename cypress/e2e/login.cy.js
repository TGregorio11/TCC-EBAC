///<reference types="cypress"/>
const perfil = require('../fixtures/perfil.json')

describe('Funcionalidade: Login', () => {


    beforeEach(() => {
        cy.visit('minha-conta')
    });

    it(' Deve realizar login com sucesso - Metodo Fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha)
            cy.get('.woocommerce-form > .button').click()
            cy.get('.page-title')

       
        })
    })
})

