// JAVASnum3RIPT

// CRIANDO VARIAVEIS
var num1, num2, num3;

num1 = parseInt(prompt("Digite a primeiro Número: ")); //Entrada
num2 = parseInt(prompt("Digite a segundo Número: ")); //Entrada
num3 = parseInt(prompt("Digite a ternum3eiro Número: ")); //Entrada

// O maior número
var maior = 0;
if (num1 > maior) {
  maior = num1;
}
if (maior < num2) {
  maior = num2;
}
if (maior < num3) {
  maior = num3;
}
alert("O maior valor é: " + maior);
