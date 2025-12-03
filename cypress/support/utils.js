import moment from 'moment'

function gerarNumeroAleatorio(qtdeDigitos) {
    let text = ""
    let possible = "0123456789"

    for (let i = 0; i < qtdeDigitos; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length))

    return text
}

const dataHora = "" + moment().format("DD.MM.YY-HH:mm:ss")

export const gerarNomeProduto = function () {
    let nomeProduto = "Produto - cy" + dataHora

    return nomeProduto
}

export const gerarPrecoProduto = function () {
    let precoProduto = gerarNumeroAleatorio(3)

    return precoProduto
}

export const gerarDescricaoProduto = function () {
    let descricaoProduto = "Descrição - cy" + dataHora

    return descricaoProduto
}

export const gerarQuantidadeProduto = function () {
    let quantidadeProduto = gerarNumeroAleatorio(3)

    return quantidadeProduto
}