// JAVASCRIPT

// CRIANDO VARIAVEIS
function numModulo() {
  var num1, modulo;

  num1 = document.getElementById("num1").value;

  // módulo do Número
  if (num1 < 0) {
    // apresenta o módulo do numero negativo
    modulo = Math.abs(num1);
    document.getElementById("txtModulo").innerHTML =
      "O módulo do número é: " + modulo;
  } else if (num1 > 0) {
    document.getElementById("txtModulo").innerHTML =
      "O módulo do número é: " + num1;
  }
}
