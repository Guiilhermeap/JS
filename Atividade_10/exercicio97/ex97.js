// JAVASCRIPT

// CRIANDO VARIAVEIS
function numDiferenca() {
  var num1, num2;

  num1 = document.getElementById("num1").value;
  num2 = document.getElementById("num2").value;

  // Crinado condição
  var x;
  if (num1 > num2) {
    x = num1 - num2;
  } else {
    x = num2 - num1;
  }

  // Mostrando difernça
  document.getElementById("resultado").innerHTML =
    "A diferença do maior para o menor é: " + x;
}
