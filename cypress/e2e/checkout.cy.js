///<reference types="cypress"/>

import ProdutosPage from "../../cypress/support/page_objects/produtos.page";

describe('Funcionalidade: Produtos', () => {


    beforeEach(() => {

        ProdutosPage.visitarUrl()
    });

    it('Deve buscar um produto com sucesso', () => {
        ProdutosPage.buscarProdutos('Taurus Elements Shell')
    });

    it.only('Deve incluir produtos no carrinho de compra - Commands', () => {
        ProdutosPage.buscarProdutos('Taurus Elements Shell')
        ProdutosPage.addProdutoCarrinho('M', 'Blue', 4)

        cy.get('.cart_item > .product-name').should('contain', 'Taurus Elements Shell - M, Blue')
        cy.fixture('checkout').then(dados => {
            cy.get('#billing_first_name').type(dados.nome)
            cy.get('#billing_last_name').type(dados.sobrenome)
            cy.get('#billing_address_1').type(dados.endereço)
            cy.get('#billing_city').type(dados.cidade)
            cy.get('#billing_postcode').type(dados.cep)
            cy.get('#billing_phone').type(dados.telefone)
            cy.get('#billing_email').type(dados.email)
            cy.get('#terms').click()
            cy.get('#place_order').click()
            cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
        })
    })
});