function calcularMedia() {
  var nota1 = parseFloat(document.getElementById("nota1").value);
  var nota2 = parseFloat(document.getElementById("nota2").value);
  var nota3 = parseFloat(document.getElementById("nota3").value);
  var nota4 = parseFloat(document.getElementById("nota4").value);
  var media = (nota1 + nota2 + nota3 + nota4) / 4;
  if (media >= 7) {
    document.getElementById("resultado").innerHTML =
      "Parabéns, você foi aprovado(a) com média " + media.toFixed(2) + "!";
  } else {
    document.getElementById("resultado").innerHTML =
      "Infelizmente, você não foi aprovado(a) com média " +
      media.toFixed(2) +
      ".";
  }
}
