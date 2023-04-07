// JAVASCRIPT

function maiorTres() {
    // Entrada
    var valor = parseInt(document.getElementById('num1').value);

    // Verifica se o valor é maior que 3
    if (valor <= 3) {
        document.getElementById('resultado').innerHTML = "Seu número é: " + valor
    } else {
        document.getElementById('resultado').innerHTML = "Valor Invalido"
    }
}