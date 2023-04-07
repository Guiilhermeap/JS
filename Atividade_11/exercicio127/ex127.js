// JAVASCRIPT

function somaNum() {
  var num = 0;

  for (i = 1; i <= 100; i++) {
    num = num + i;
  }

  document.getElementById('resultado').innerHTML = "A soma dos 100 primeiros números é: " + num
}
