///<refence types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";


describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
        
    });


    it('Deve adicionar produto ao carrinho com sucesso', () => {
        let qtd = 5
        produtosPage.buscarProduto('Ajax Full Zip Sweatshirt')
        produtosPage.addProdutoCarrinho('M', 'Blue' , qtd)
        cy.get('.woocommerce-message').should('contain',  qtd + ' × “Ajax Full-Zip Sweatshirt” foram adicionados no seu carrinho')
    
    });



    it.only('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[0].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[0].tamanho,
                dados[0].cor,
                dados[0].quantidade)
            
            cy.get('.woocommerce-message').should('contain', dados [0].nomeProduto)

            produtosPage.buscarProduto(dados[1].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[1].tamanho,
                dados[1].cor,
                dados[1].quantidade)
            
            cy.get('.woocommerce-message').should('contain', dados [1].nomeProduto)      

            produtosPage.buscarProduto(dados[2].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[2].tamanho,
                dados[2].cor,
                dados[2].quantidade)
            
            cy.get('.woocommerce-message').should('contain', dados [2].nomeProduto)      
        
        })
    });

    it('Produto sem estoque não deve acatar no carrinho', () => {
})
