// JavaScript

function calFatorial() {
  var valor = parseInt(document.getElementById("txtNum").value)
  var fatorial = 1;

  for (let i = 1; i <= valor; i++) {
    fatorial = fatorial * i;
  }

  document.getElementById("resultado").innerHTML = "O fatorial do número " + valor + " é " + fatorial
}
