function maiorNumero() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var num3 = parseInt(document.getElementById("num3").value);
  var maior = num1;
  if (num2 > maior) {
    maior = num2;
  }
  if (num3 > maior) {
    maior = num3;
  }
  document.getElementById("resultado").innerHTML = "O maior número é: " + maior;
}