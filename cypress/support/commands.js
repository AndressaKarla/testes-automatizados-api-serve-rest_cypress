/// <reference types="cypress" />

Cypress.Commands.add('obterPorEmailEexcluirUsuarioPorId', (email) => {
    cy.request({
        method: 'GET',
        url: `/usuarios?email=${email}`,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        failOnStatusCode: false
    }).then(response => {
        let retornoGet = response.body

        if ((retornoGet.quantidade) == 1) {
            let idUsuarioRetornado = retornoGet.usuarios[0]._id

            cy.request({
                method: 'DELETE',
                url: `/usuarios/${idUsuarioRetornado}`,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eql(200)
            })
        }
    })
})

Cypress.Commands.add('postUsuario', (nome, email, senha, admin) => {
    cy.request({
        method: 'POST',
        url: '/usuarios',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: {
            "nome": nome,
            "email": email,
            "password": senha,
            "administrador": admin
        },
        failOnStatusCode: false
    }).then((response) => {
        expect(response.status).to.eql(201)
    })
})