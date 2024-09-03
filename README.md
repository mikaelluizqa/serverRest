Este README fornece instruções sobre como instalar e configurar o Cypress para testes de API, além de descrever a estrutura do projeto e como rodar os testes.

## Instalação do Cypress

Para instalar o Cypress em seu projeto, siga os seguintes passos:

1. **Certifique-se de que o Node.js está instalado**. Você pode baixar o Node.js [aqui](https://nodejs.org/).

2. **Instale as dependências do projeto**:

No terminal, rode o seguinte comando para instalar todas as dependências necessárias, incluindo o Cypress:
  npm install

3. **Estrutura do Projeto**: 
cypress/
  downloads
  e2e/
    crudUsers.cy.js
  fixtures/
  support/
    commands.js
    e2e.js
  testScenario

cypress/e2e/: Contém os arquivos de teste, como crudUsers.cy.js, que inclui todos os testes para operações CRUD na API.
cypress/testScenario: Contém os cenários escritos em Gherkin.

4. **Executando os Testes**:

*Rodar o Cypress em Modo Interativo*
Para abrir o Cypress em modo interativo e visualizar os testes, rode o seguinte comando no terminal:
npm run cy:open ou npx cypress open

*Rodar os Testes em Modo Headless*
Para rodar todos os testes em modo headless (sem interface gráfica), use o comando:
npx cypress run



