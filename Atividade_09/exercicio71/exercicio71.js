// FUNÇÃO VERIFICAR N°
function verificarNum() {
  var n1, n2;
  n1 = document.getElementById("N1").value;
  n2 = document.getElementById("N2").value;

  // VERIFICA SE O Número FOI DIGITADO
  if (n1) {
    alert("N° Digitado");
  } else {
    alert("Digite um n°");
  }

  if (n2) {
    alert("N° Digitado");
  } else {
    alert("Digite um n°");
  }
}

// Função Multiplicar 2 Números
function multiplicaNum() {
  // Criação vareaveis
  var num1, num2, resultado;
  // Obtém os valores dos inputs
  num1 = document.getElementById("N1").value;
  num2 = document.getElementById("N2").value;

  // Realiza a multiplicação
  resultado = num1 * num2;

  // Exibe o resultado na página
  document.getElementById("txtResult").value = resultado;
}
