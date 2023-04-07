// JAVASCRIPT

///Função
function valorNum() {

    // Entrada
    var valor = parseInt(document.getElementById('num1').value);

    // Verifica se o valor está dentro da faixa de 1 a 9
    if (valor >= 1 && valor <= 9) {
        document.getElementById("resultado").innerHTML = "O valor está na faixa permitida."
    } else {
        document.getElementById("resultado").innerHTML = "O valor está fora da faixa permitida."
    }
}
