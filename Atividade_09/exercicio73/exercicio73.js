// Função Calculo graus Celsius em graus Fahrenheit

function tempConverter() {
  // Criação variaveis
  var grausC, grausF;
  // Obtém os valores dos inputs
  grausF = document.getElementById("grausF").value;

  // Realiza a Converção
  grausC = (grausF - 32) * (5 / 9);

  // Exibe o resultado na página
  document.getElementById("txtResult").value = grausC.toFixed(4);
}
