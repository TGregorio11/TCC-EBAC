///<reference types="cypress"/>
import ProdutosPage from "../../cypress/support/page_objects/produtos.page";

describe('Funcionalidade: Produtos', () => {


    beforeEach(() => {

        ProdutosPage.visitarUrl()
    });

    it('Deve buscar um produto com sucesso', () => {
        ProdutosPage.buscarProduto('')
    });
})