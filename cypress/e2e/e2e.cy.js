/// <reference types="cypress"/>


import ProdutosPage from "../support/page_objects/produtos.page";


describe('Exercicio - Testes End-to-End', () => {


    beforeEach(() => {
        cy.visit('minha-conta')
        
           });

    it(' FLuxo completo de compra - End-to-End', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha)
            cy.get('.woocommerce-form > .button').click()
            cy.get('.page-title')
            cy.get('#primary-menu > .menu-item-629 > a').click()

            cy.fixture('produtos').then(dados => {
                ProdutosPage.buscarProdutos(dados[0].nomeProduto)
                ProdutosPage.addProdutoCarrinho(
                    dados[0].tamanho,
                    dados[0].cor,
                    dados[0].quantidade)
                cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto)
                cy.fixture('checkout').then(dados => {
                cy.get('#billing_first_name').clear().type(dados.nome)
                cy.get('#billing_last_name').clear().type(dados.sobrenome)
                cy.get('#billing_address_1').clear().type(dados.endereço)
                cy.get('#billing_city').clear().type(dados.cidade)
                cy.get('#billing_postcode').clear().type(dados.cep)
                cy.get('#billing_phone').clear().type(dados.telefone)
                cy.get('#billing_email').clear().type(dados.email)
                cy.get('#terms').click()
                cy.get('#place_order').click()
                cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
                    
                })
            });
        })
    })
})