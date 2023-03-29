// FUNÇÃO VERIFICAR NOME

function verificarNome() {
  var nome;
  nome = document.getElementById("txtNome").value;

  // VERIFICA SE O NOME FOI DIGITADO
  if (isNaN(nome)) {
    alert("Nome digitado");
  } else {
    alert("Nome está em Branco");
  }
}

// FUNÇÃO VERIFICAR ENDEREÇO

function verificarEndereco() {
  var endereco;
  endereco = document.getElementById("txtEndereco").value;

  // VERIFICA SE O NOME FOI DIGITADO
  if (isNaN(endereco)) {
    alert("Endereço digitado");
  } else {
    alert("Endereço está em Branco");
  }
}
