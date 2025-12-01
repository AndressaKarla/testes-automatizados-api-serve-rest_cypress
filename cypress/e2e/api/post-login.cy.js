/// <reference types="cypress" />

describe('POST /login', () => {
  let usuarioFixture

  before(() => {
    cy.fixture('usuario').then((u) => {
      usuarioFixture = u
    })
  })

  beforeEach(() => {
    cy.obterPorEmailEexcluirUsuarioPorId(usuarioFixture.admin.emailValido)
    cy.obterPorEmailEexcluirUsuarioPorId(usuarioFixture.padrao.emailValido)

    cy.postUsuario(usuarioFixture.admin.nomeSobrenomeValido, usuarioFixture.admin.emailValido, usuarioFixture.admin.senhaValida, "true")
    cy.postUsuario(usuarioFixture.padrao.nomeSobrenomeValido, usuarioFixture.padrao.emailValido, usuarioFixture.padrao.senhaValida, "false")
  })

  afterEach(function () {
    cy.wait(3000) // tempo de espera para captura de evidência mais adequada

    if (this.currentTest.state === 'passed') {
      cy.screenshot()
    }
  })

  it('POST /login com usuário administrador - Apresentar status 200 OK, mensagem de login realizado com sucesso e token de autorização', () => {
    cy.api({
      method: 'POST',
      url: '/login',
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

  it('POST /login com usuário padrão - Apresentar status 200 OK, mensagem de login realizado com sucesso e token de autorização', () => {
    cy.api({
      method: 'POST',
      url: '/login',
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