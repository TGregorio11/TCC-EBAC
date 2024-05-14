///<reference types= "cypress"/>

describe('Cupom de desconto utilizado com sucesso',  () => {

    it('Listar cupom - POST', () => {
        let token = "YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy"
        cy.request({
            method: 'POST',
            url: 'http://lojaebac.ebaconline.art.br/wp-json/wc/v3/coupons?context=view&orderby=id',
            body: {
                "code": "Ganhe 10",
                "amount": "10",
                "discount_type": "fixed_product",
                "description": "Cupom de desconto de teste",
                failOnStatusCode:false,
            }
 
        }).should((response) => {
            expect(response.status).equal(200)
            expect(response.body.menssage)
        })    

    });

});