// JAVASCRIPT

// CRIANDO VARIAVEIS
var num1, modulo;

num1 = parseInt(prompt("Digite um número negativo ou positivo: ")); //Entrada

// módulo do Número
if (num1 < 0) {
  // apresenta o módulo do numero negativo
  modulo = Math.abs(num1);
  alert("O módulo desse número negativo é: " + modulo); //saída
} else if (num1 > 0) {
  alert("O módulo desse número positivo é: " + num1); //saída
}
