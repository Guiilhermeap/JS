/// JavaScript ///

// Constrindo Função
function areaCal() {
  //Contrução de variáveis

  var raio, area;
  // Pega dos Inputs
  raio = document.getElementById('raio').value

  /// Calculo de área
  area = 3.14159 * raio ** 2;

  document.getElementById('txtArea').value = area
}
