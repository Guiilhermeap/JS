// JAVASCRIPT

// CRIANDO FUNÇÃO
function numResto() {
    // Criando variaveis
    var num, resto;

    // Pega os Inputs
    num = document.getElementById('txtNum').value
    resto = num % 6

    // Retorna Valor
    document.getElementById('txtResto').value = resto
}