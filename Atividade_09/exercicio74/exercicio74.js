/// JavaScript ///

// Criando Função
function volumeCalculo() {
  //Contrução de variáveis
  var raio, altura, volume;

  // ENTRADA
  raio = document.getElementById("raio").value;
  altura = document.getElementById("altura").value;

  /// Calculo de Volume
  volume = 3.14159 * raio * raio * altura;

  // Exibe o resultado na página
  document.getElementById("txtVolume").value = volume;
}
