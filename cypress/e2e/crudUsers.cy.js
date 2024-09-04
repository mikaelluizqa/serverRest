/// <reference types="cypress" />

describe('CRUD API Tests for /usuarios', () => {
  let userId

  it('POST - Create a new user', () => {
    cy.request({
      method: 'POST',
      url: '/usuarios',
      body: {
        nome: 'Mikael Ferreira',
        email: 'mikaelluizqa@gmail.com',
        password: 'teste',
        administrador: 'true'
      }
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.message).to.eq('Cadastro realizado com sucesso')
      expect(response.body._id).to.not.be.null
      userId = response.body._id
    })
  })

  it('GET - Retrieve the created user', () => {
    cy.request({
      method: 'GET',
      url: `/usuarios/${userId}`,
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.administrador).to.eq('true')
      expect(response.body.password).to.eq('teste')
      expect(response.body.nome).to.eq('Mikael Ferreira')
      expect(response.body.email).to.eq('mikaelluizqa@gmail.com')
      expect(response.body.email).to.contain('@')
    })
  })

  it('PUT - Update the created user', () => {
    cy.request({
      method: 'PUT',
      url: `/usuarios/${userId}`,
      body: {
        nome: 'Ciclano da Silva',
        email: 'ciclano@qa.com.br',
        password: 'teste123',
        administrador: 'false'
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.message).to.eq('Registro alterado com sucesso')
    })
  })

  it('DELETE - Delete the created user', () => {
    cy.request({
      method: 'DELETE',
      url: `/usuarios/${userId}`,
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.message).to.eq('Registro excluído com sucesso')
    })
  })
})