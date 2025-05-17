/// <reference types="cypress" />

Cypress.Commands.add('obterPorEmailEexcluirUsuarioPorId', (email) => {
    cy.request({
        url: `/usuarios?email=${email}`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    }).then(response => {
        let retornoGet = response.body

        if ((retornoGet.quantidade) == 1) {
            let idUsuarioRetornado = retornoGet.usuarios[0]._id

            cy.request({
                url: `/usuarios/${idUsuarioRetornado}`,
                method: 'DELETE',
            }).then((response) => {
                expect(response.status).to.eql(200)
            })
        }
    })
})

Cypress.Commands.add('postUsuario', (nome, email, senha, admin) => {
    cy.request({
        url: '/usuarios',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: {
            "nome": nome,
            "email": email,
            "password": senha,
            "administrador": admin
        }
    }).then((response) => {
        expect(response.status).to.eql(201)
    })
})