class ProdutosPage {

    visitarUrl() {

        cy.visit('Produtos')
    }

    buscarProdutos(nomeProduto) {
        cy.get('[name="s"]').eq(1).type(nomeProduto)
        cy.get('.button-search').eq(1).click()
    }

    addProdutoCarrinho() {

    }
} 

export default new ProdutosPage