// JAVASCRIPT

// CRIANDO VARIAVEIS
var num1, num2, num3, num4;

num1 = parseInt(prompt("Digite a primeiro Número: ")); //Entrada
num2 = parseInt(prompt("Digite a segundo Número: ")); //Entrada
num3 = parseInt(prompt("Digite a terceiro Número: ")); //Entrada
num4 = parseInt(prompt("Digite a quarto Número: ")); //Entrada

// Cálcula se é divisivel por 2 e 3
var numeros = [num1, num2, num3, num4];
if (numeros % 2 && numeros % 3) {
  alert("Os Números divisíveis por 2 e 3 são: " + numeros);
} else {
  alert("Os números que não são divisíveis por 2 e 3 são: "+numeros);
}
