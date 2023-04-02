// JAVASCRIPT

// CRIANDO VARIAVEIS
var num1, num2;

num1 = parseInt(prompt("Digite o primeiro número: ")); //Entrada
num2 = parseInt(prompt("Digite o segundo número: ")); //Entrada

// Mostra a Difetença
var x;
if (num1 > num2) {
  x = num1 - num2;
} else {
  x = num2 - num1;
}

alert("A diferença do maior para o menor é: " + x); //saída
