/// <reference types="cypress" />

describe('POST login', () => {
  beforeEach(() => {
    cy.fixture('usuario').then((usuarioFixture) => {
      cy.obterPorEmailEexcluirUsuarioPorId(usuarioFixture.admin.emailValido)
      cy.obterPorEmailEexcluirUsuarioPorId(usuarioFixture.padrao.emailValido)

      cy.postUsuario(usuarioFixture.admin.nomeSobrenomeValido, usuarioFixture.admin.emailValido, usuarioFixture.admin.senhaValida, "true")
      cy.postUsuario(usuarioFixture.padrao.nomeSobrenomeValido, usuarioFixture.padrao.emailValido, usuarioFixture.padrao.senhaValida, "false")
    })
  })

  afterEach(function () {
    if (this.currentTest.state === 'passed') {
      cy.screenshot()
    }
  })

  it('POST login (administrador) - Validar status 200 OK e dados retornados com sucesso', () => {
    cy.fixture('usuario').then((usuarioFixture) => {
      cy.api({
        url: '/login',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: {
          "email": usuarioFixture.admin.emailValido,
          "password": usuarioFixture.admin.senhaValida
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eql(200)
        expect(response.body.message).to.include("Login realizado com sucesso")
        expect(response.body.authorization).to.exist
      })
    })
  })

  it('POST login (padrão) - Validar status 200 OK e dados retornados com sucesso', () => {
    cy.fixture('usuario').then((usuarioFixture) => {
      cy.api({
        url: '/login',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: {
          "email": usuarioFixture.padrao.emailValido,
          "password": usuarioFixture.padrao.senhaValida
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eql(200)
        expect(response.body.message).to.include("Login realizado com sucesso")
        expect(response.body.authorization).to.exist
      })
    })
  })
})