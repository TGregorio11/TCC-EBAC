/// <reference types="cypress"/>

import produtosPage from "../../support/page_objects/produtos.page";


describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    
    })
        afterEach(() => {
        cy.screenshot()
        
    
    });

    it('Deve adicionar 3 produtos no carrinho', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProdutos(dados[0].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[0].tamanho,
                dados[0].cor,
                dados[0].quantidade)
            cy.get('.woocommerce-message').should('contain', dados [0].nomeProduto)
            produtosPage.buscarProdutos(dados[1].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[1].tamanho,
                dados[1].cor,
                dados[1].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)
            produtosPage.buscarProdutos(dados[2].nomeProduto)
             produtosPage.addProdutoCarrinho(
                dados[2].tamanho,
                dados[2].cor,
                dados[2].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[2].nomeProduto)
            cy.get('.woocommerce-message > .button').click()    

        })
    })

    it('Deve adicionar produto ao carrinho com sucesso', () => {
        produtosPage.buscarProdutos('Ajax Full Zip Sweatshirt')
        produtosPage.addProdutoCarrinho('M', 'Blue' , 'qtd')
        cy.get('.woocommerce-message'). should('contain', 'Ajax Full-Zip Sweatshirt” foi adicionado no seu carrinho')

    }),
      

    it('Adicionar produto acima do estoque disponivel', () => {
        produtosPage.buscarProdutos('Augusta Pullover Jacket')
        produtosPage.addProdutoCarrinho('M', 'Blue' , '101')
        cy.get('.single_add_to_cart_button').click().invoke('show')
        cy.should('be.visible')
        
       
        })        
    })

