// JAVASCRIPT

// CRIANDO FUNÇÃO
function numQuadrado() {
    // Criando variaveis
    var num, quadrado;

    // Pega os Inputs
    num = document.getElementById('txtNum').value
    quadrado = num ** 2

    // Retorna Valor
    document.getElementById('txtQuadrado').value = quadrado
}