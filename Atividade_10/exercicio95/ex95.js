// JAVASCRIPT

//Criando função
function ordenarNumeros() {
  // CRIANDO VARIAVEIS
  var num1, num2, num3;

  num1 = parseInt(document.getElementById("num1").value); // pega os inputs
  num2 = parseInt(document.getElementById("num2").value); // pega os inputs
  num3 = parseInt(document.getElementById("num3").value); // pega os inputs

  // Deixa em Crescente
  var numeros = [num1, num2, num3];
  numeros.sort(function (a, b) {
    return a - b;
  });

  document.getElementById("txtOrdem").innerHTML =
    "Os números em ordem crescente são: " + numeros;
}
