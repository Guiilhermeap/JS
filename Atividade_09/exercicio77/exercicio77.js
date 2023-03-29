/// JavaScript ///

// Criando Função
function calPrestacao() {
  //Contrução de variáveis
  var valor, taxa, tempo, prestacao;

  // Pega os Inputs
  valor = document.getElementById("valor").value;
  taxa = document.getElementById("taxa").value;
  tempo = document.getElementById("tempo").value;

  /// Calculo de Prestação
  prestacao = valor + (valor*Number((taxa/100))*tempo);

  // retorna valor
  document.getElementById ('txtPrest').value = prestacao
}
