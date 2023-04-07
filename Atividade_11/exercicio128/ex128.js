// JAVASCRIPT

function numSumario() {
  var soma = 0;

  for (i = 1; i <= 500; i++) {
    if (i % 2 == 0) {
      soma = soma + i;
    }
  }

  document.getElementById("resultado").innerHTML =
    "A soma dos valores pares de 1 a 500 é " + soma;
}
