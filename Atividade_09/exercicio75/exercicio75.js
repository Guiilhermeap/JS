/// JavaScript ///

// Criando Função
function idadeCal() {
  //Contrução de variáveis
  var diaNasc, mesNasc, anoNasc, mesDias, anoDias, somaDias;

  // Pega dos Inputs
  diaNasc = document.getElementById('dia').value
  mesNasc = document.getElementById('mes').value
  anoNasc = document.getElementById('ano').value

  // TRANSFORMA A DATA EM DIAS
  mesDias = Number(mesNasc * 30);
  anoDias = anoNasc * 365;
  somaDias = mesDias + anoDias + diaNasc;

  // Exibe o resultado na página
  document.getElementById('txtIdade').value = somaDias
}