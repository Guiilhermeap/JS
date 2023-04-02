/// JAVASCRIPT

//INICIA FUNÇÃO
function dolarReal() {

    //CRIAÇÃO DE VARIAVEIS
    var real, dolar, cotacao;

    real = document.getElementById('txtReal').value
    cotacao = document.getElementById('txtCotacao').value

    // Conversão
    dolar = real/cotacao;

    document.getElementById('txtDolar').value = dolar.toFixed(2)
}
