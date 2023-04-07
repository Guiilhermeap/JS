// JAVASCRIPT

//Criando função
function parImpar() {

    // CRIANDO VARIAVEIS
    var num1;

    num1 = parseInt(document.getElementById('num1').value); //Entrada

    // Verifica se é par ou impar
    if (num1 % 2 == 0) {
        document.getElementById("resultado").innerHTML = "Este valor é Par"
    } else {
        document.getElementById("resultado").innerHTML = "Este valor é Impar"
    }
}

