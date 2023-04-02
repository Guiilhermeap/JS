/// JAVASCRIPT

//INICIA FUNÇÃO
function realDolar() {

    //CRIAÇÃO DE VARIAVEIS
    var real, dolar, cotacao;

    dolar = document.getElementById('txtDolar').value
    cotacao = document.getElementById('txtCotacao').value

    // Conversão
    real = dolar * cotacao;

    document.getElementById('txtReal').value = real.toFixed(2)
}
