// Função Calculo graus Celsius em graus Fahrenheit

function tempConverter() {
  // Criação variaveis
  var grausC, grausF;
  // Obtém os valores dos inputs
  grausC = document.getElementById("grausC").value;

  // Realiza a Converção
  grausF = (9 * grausC + 160) / 5;

  // Exibe o resultado na página
  document.getElementById("txtResult").value = grausF;
}
