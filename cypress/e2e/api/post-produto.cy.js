/// <reference types="cypress" />
import { gerarNomeProduto, gerarPrecoProduto, gerarDescricaoProduto, gerarQuantidadeProduto } from "../../support/utils"

describe('POST /produtos', () => {
  let usuarioFixture, tokenAdministrador

  before(() => {
    cy.fixture('usuario').then((u) => {
      usuarioFixture = u
    })
  })

  beforeEach(() => {
    cy.obterPorEmailEexcluirUsuarioPorId(usuarioFixture.admin.emailValido)
    cy.postUsuario(usuarioFixture.admin.nomeSobrenomeValido, usuarioFixture.admin.emailValido, usuarioFixture.admin.senhaValida, "true")
    cy.realizarLoginERetornarTokenAutorizacao(usuarioFixture.admin.emailValido, usuarioFixture.admin.senhaValida).then((token) => {
      tokenAdministrador = token
    })
  })

  afterEach(function () {
    cy.wait(3000) // tempo de espera para captura de evidência mais adequada

    if (this.currentTest.state === 'passed') {
      cy.screenshot()
    }
  })

  it('POST /produtos - Apresentar status 201 Created, mensagem de cadastro realizado com sucesso e identificador', () => {
    const nomeProduto = gerarNomeProduto()
    const precoProduto = gerarPrecoProduto()
    const descricaoProduto = gerarDescricaoProduto()
    const quantidadeProduto = gerarQuantidadeProduto()

    cy.api({
      method: 'POST',
      url: '/produtos',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': tokenAdministrador
      },
      body: {
        "nome": nomeProduto,
        "preco": precoProduto,
        "descricao": descricaoProduto,
        "quantidade": quantidadeProduto
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eql(201)
      expect(response.body.message).to.include("Cadastro realizado com sucesso")
      expect(response.body._id).to.be.a('string')
    })
  })
})