function divisiveis() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var num3 = parseInt(document.getElementById("num3").value);
  var num4 = parseInt(document.getElementById("num4").value);

  var numeros = [num1, num2, num3, num4];
  if (numeros % 2 && numeros % 3) {
    document.getElementById("resultado").innerHTML = "Os Números divisíveis por 2 e 3 são: " + numeros
  } else {
    document.getElementById("resultado").innerHTML = "Os Números que não são divisíveis por 2 e 3 são: " + numeros
  }
}
