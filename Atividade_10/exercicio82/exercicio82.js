// JAVASCRIPT

// CRIANDO VARIAVEIS
var num1, num2, num3;

num1 = parseInt(prompt("Digite o primeiro número: ")) //Entrada
num2 = parseInt(prompt("Digite o segundo número: ")) //Entrada
num3 = parseInt(prompt("Digite o terceiro número: ")) //Entrada

// Deixa em Crescente
var numeros = [num1, num2, num3];
numeros.sort(function(a, b){return a - b});

alert ("Os números em ordem crescente são: " + numeros) //saída