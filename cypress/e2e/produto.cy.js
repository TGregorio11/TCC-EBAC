///<reference types="cypress"/>
import produtosPage from "../../cypress/support/page_objects/produtos.page";
import ProdutosPage from "../../cypress/support/page_objects/produtos.page";

describe('Funcionalidade: Produtos', () => {


    beforeEach(() => {

        ProdutosPage.visitarUrl()
    });

    it('Deve buscar um produto com sucesso', () => {
        ProdutosPage.buscarProdutos('Taurus Elements Shell')
    });

    it('Deve incluir produtos no carrinho de compra - Commands', () => {
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
        })
    })




    it('Deve buscar um produto com sucesso', () => {
        ProdutosPage.buscarProdutos('Ingrid Running Jacket')

    });

    it('Deve incluir produtos no carrinho de compra - lista de dados', () => {
        cy.fixture('produtos').then(dados => {
            ProdutosPage.buscarProdutos(dados[0].nomeProduto)
            ProdutosPage.addProdutoCarrinho(
                dados[0].tamanho,
                dados[0].cor,
                dados[0].quantidade)
            cy.get('.cart_item > .product-name').should('contain', dados[0].nomeProduto)

        })
    });


    it('Deve buscar um produto com sucesso', () => {
        ProdutosPage.buscarProdutos('Aero Daily Fitness Tee')
    });



    it('Deve incluir produtos no carrinho de compra - lista de dados', () => {
        cy.fixture('produtos').then(dados => {
            ProdutosPage.buscarProdutos(dados[1].nomeProduto)
            ProdutosPage.addProdutoCarrinho(
                dados[1].tamanho,
                dados[1].cor,
                dados[1].quantidade)
            cy.get('.cart_item > .product-name').should('contain', dados[1].nomeProduto)
        

        })


    });

    it('Deve buscar um produto com sucesso', () => {
        ProdutosPage.buscarProdutos('Hyperion Elements Jacket')
    
    });



    it('Deve incluir produtos no carrinho de compra - lista de dados', () => {
        cy.fixture('produtos').then(dados => {
            ProdutosPage.buscarProdutos(dados[2].nomeProduto)
            ProdutosPage.addProdutoCarrinho(
                dados[2].tamanho,
                dados[2].cor,
                dados[2].quantidade)
            cy.get('.cart_item > .product-name').should('contain', dados[2].nomeProduto)
            
        })       
    })


});

