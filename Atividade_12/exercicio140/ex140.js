// FUNÇÃO VERIFICAR NOME

function verificarNome() {
  var nome;
  nome = document.getElementById("txtNome").value;

  // VERIFICA SE O NOME FOI DIGITADO
  if (isNaN(nome)) {
    alert("Nome digitado");
  } else {
    alert("Nome não digitado");
  }
}

// FUNÇÃO VERIFICA IDADE
function verificarIdade() {
  var idade;
  idade = document.getElementById("txtIdade").value;

  // VERIFICA SE IDADE É UM N° OU NÃO
  if (isNaN(parseInt(idade))) {
    alert("Não é Numero");
  } else {
    alert("É um Numero");
  }

  /// VERIFICAR IDADE >= 0 E <= 99
  if (idade >= 0 && idade <= 99) {
    alert("Idade Válida");
  } else {
    alert("Idade Invalida");
  }
}

/// VERIFICA SE O USUÁRIO NÃO DIGITOU NADA
timeId = setInterval("alert('DIGITE ALGO AGARA !!!');", 60000);
function desativaTemp() {
  clearInterval(timeId);
}
