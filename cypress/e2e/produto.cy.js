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
        ProdutosPage.addProdutoCarrinho('M', 'Blue', 2)

        cy.get('.cart_item > .product-name').should('contain', 'Taurus Elements Shell - M, Blue')


    });

    it('Deve buscar um produto com sucesso', () => {
        ProdutosPage.buscarProdutos('Ingrid Running Jacket')

    });

    it.only('Deve incluir produtos no carrinho de compra - lista de dados', () => {
        cy.fixture('produtos').then(dados => {
            ProdutosPage.buscarProdutos(dados[0].nomeProduto)
            ProdutosPage.addProdutoCarrinho(
                dados[0].tamanho,
                dados[0].cor,
                dados[0].quantidade)
            cy.get('.cart_item > .product-name').should('contain', dados[0].nomeProduto)

        })
    });
})