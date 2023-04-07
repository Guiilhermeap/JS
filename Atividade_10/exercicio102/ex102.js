// JAVASCRIPT

function encontrarMaiorMenor() {
    // Lê os valores dos campos de entrada
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var num3 = parseInt(document.getElementById("num3").value);
    var num4 = parseInt(document.getElementById("num4").value);
    var num5 = parseInt(document.getElementById("num5").value);

    // Inicializa as variáveis com o primeiro valor
    var maior = num1;
    var menor = num1;

    // Verifica se os outros valores são maiores ou menores
    if (num2 > maior) {
        maior = num2;
    } else if (num2 < menor) {
        menor = num2;
    }

    if (num3 > maior) {
        maior = num3;
    } else if (num3 < menor) {
        menor = num3;
    }

    if (num4 > maior) {
        maior = num4;
    } else if (num4 < menor) {
        menor = num4;
    }

    if (num5 > maior) {
        maior = num5;
    } else if (num5 < menor) {
        menor = num5;
    }

    // Exibe o maior e menor Número
    document.getElementById("resultado").innerHTML = "O maior valor: "+ maior + "\nO menor valor: " + menor;
}