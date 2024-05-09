# language: pt
Funcionalidade: Cupom de descontos 

    Cenario: 1 Utilizar Cupom de desconto com sucesso  
            Dado: Como Cliente da EBAC-SHOP
            Quando: Quero utilizar o cupom
            Então: Para descontos em compras

    Cenario: 2 Utilizar Cupom com números e letras  
            Dado: Como Cliente da EBAC-SHOP
            Quando: Quero utilizar o cupom
            Então: Para descontos em compras
    
    Cenario: 3 Utilizar Cupom inválido
            Dado: Como Cliente da EBAC-SHOP
            Quando: Quero utilizar o cupom
            Então: o desconto não é concedido
            

Funcionalidade: Carrinho de compras

  Cenario: 1 Adicionar item ao carrinho com sucesso.
            Dado: Como Cliente da EBAC-SHOP
            Quando: Quero adicionar produtos
            Então: Para visualizar pedidos

  Cenario: 2 Adicionar itens ao carrinho e validar 2 produtos de categorias diferentes
            Dado: Como Cliente da EBAC-SHOP
            Quando: adicionar itens de duas categorias diferentes
            Então: visualizar o comportamento do carrinho

  Cenario: 3 Adicionar produto com estoque indisponível
            Dado: Como Cliente da EBAC-SHOP
            Quando: Quero adicionar um produto que não tenha no estoque
            Então: Para o sistema não acatar a compra

Funcionalidade: Login na plataforma

  Cenario: 1 Login na plataforma com sucesso.
            Dado: Como Cliente da EBAC-SHOP
            Quando: Quero Fazer o login na plataforma
            Então: Para efetuar compras

  Cenario: 2 Não autenticar usuário incorreto
            Dado: Quando eu digitar o usuário incorreto no login
            Quando: E o sistema ao tentar validar
            Então: deve exibir a mensagem de insucesso

                Exemplos:
                | usuários              | senha      | mensagem de erro                                                                      |
                | "gabi@gmail.com.br"   | "teste789" | "Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário"   |
                | "juli@hotmail.com.br" | "teste123" | " Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário " |
                | "Juan@yahoo.com.br"   | "teste007" | " Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário " |

  Cenario: 3 Não autenticar usuário com senha incorreta
            Dado: Quando eu digitar a senha incorreta
            Quando: e o sistema ao tentar validar
            Então: deve exibir a mensagem de erro de senha

                Exemplos:
                | usuários             | senha     | mensagem        |
                | " gabi@ebac.com.br " | "7891011" | "Acesso negado" |
                | "julI@ebac.com.br"   | "7891011" | "Acesso negado" |
                | "juan@ebac.com.br"   | "7891011" | "Acesso negado" |


