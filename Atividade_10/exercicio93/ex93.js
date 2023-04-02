// JAVASCRIPT

//Criando variaveis
var valor;
// Entrada
var codigo = Number(prompt("Informe o código do item pedido: "));
var qtd = Number(prompt("Informe a quantidade do item pedido: "));

// Calcula valor do pedido
if (codigo == 100) {
  valor = Number(qtd * 1.2);
  alert("Total do pedido: R$" + valor);
}
if (codigo == 101) {
  valor = Number(qtd * 1.3);
  alert("Total do pedido: R$" + valor);
}
if (codigo == 102) {
  valor = Number(qtd * 1.5);
  alert("Total do pedido: R$" + valor);
}
if (codigo == 103) {
  valor = Number(qtd * 1.2);
  alert("Total do pedido: R$" + valor);
}
if (codigo == 104) {
  valor = Number(qtd * 1.3);
  alert("Total do pedido: R$" + valor);
}
if (codigo == 105) {
  valor = Number(qtd * 1.0);
  alert("Total do pedido: R$" + valor);
}
