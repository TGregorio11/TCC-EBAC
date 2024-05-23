///<reference types= "cypress"/>

import url_api from"../../fixtures/url_api.json";

describe('Funcionalidade: Produtos', () => {

        afterEach(() => {
        cy.screenshot()            
    });

    it('Cadastrar Coupons de desconto com 10% - POST', () => {
        let token = "YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy"
        cy.api({
            method: 'POST',
            url: url_api.urlCoupons,
            headers: {authorization: token},
            body: {
                "code": "Ganhe10",
                "amount": "10",
                "discount_type": "fixed_product",
                "description": "Cupom de desconto de teste",                
            }

        }).should((response) => {
            expect(response.status).equal(200)
        
        })    
        
    })

    it('Listar Coupons cadastrado com letras e numeros - GET', () => {
        let token = "YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy"
        cy.api({
            method: 'GET',
            url: url_api.urlCouponsId,
            headers: {authorization: token},
            body: {
                "code": "Ganhe10",
                "amount": "10",
                "discount_type": "fixed_product",
                "description": "Cupom de desconto de teste", 

                
            }
        }).should((response) => {
            expect(response.status).equal(200)
            console.info ('id' + '4698')
            expect(response.body).to.have.property('4698')

        })
    })    

    it('Utilizar Coupons já existente - POST', () => {
        it('Cadastrar Coupons- POST', () => {
            let token = "YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy"
            cy.api({
                method: 'POST',
                url: url_api.urlCouponsId,
                headers: {authorization: token},
                body: {
                    "code": "Ganhe10",
                    "amount": "10",
                    "discount_type": "fixed_product",
                    "description": "Cupom de desconto de teste", 

                
                    },failOnStatusCode: false
               
            }).should((response) => {
                expect(response.status).equal(400)
                expect(response.body.message).equal("O código de cupom já existe")
            })
        })    
    })
})
        
        
    
