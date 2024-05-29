# Testes End to End - Ebac Shop

### Exercício para os alunos de Qualidade de Software da EBAC

**Ebac shop:** [http://lojaebac.ebaconline.art.br/](http://lojaebac.ebaconline.art.br/)

## Clonando e executando em sua máquina

### Pré-requisitos:

- **Node.js:** Você encontra em [nodejs.org](https://nodejs.org/en/)
- **Visual Studio Code** ou qualquer editor de texto: Você encontra em [code.visualstudio.com](https://code.visualstudio.com/download)
- **Git:** Você encontra em [git-scm.com](https://git-scm.com/downloads)

Via terminal, rode os seguintes comandos:

```
git clone https://github.com/EBAC-QE/testes-e2e-ebac-shop.git
```
Para instalar as dependências:

```
npm install
```
Para executar em modo Headless via console:
```
npx cypress run
```
Para executar via Dashboard:
```
npx cypress open
```
Após abrir o dashboard, clique na opção "Running integration tests" para rodar todos os testes.

Bibliotecas de apoio:
Cypress: Framework de automação: cypress.io
Faker: Biblioteca para geração de massa de dados: faker
Bom exercício ;)
Fábio & José Ernesto

Qualidade de Software
