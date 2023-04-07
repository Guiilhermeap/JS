// JAVASCRIPT
function cardapioLanche() {

    //Criando variaveis
    var valor;
    // Entrada
    var codigo = Number(document.getElementById('codigo').value);
    var qtd = Number(document.getElementById('qtd').value);

    // Calcula valor do pedido
    if (codigo == 100) {
        valor = Number(qtd * 1.2);
        document.getElementById('resultado').innerHTML = "Total do pedido: R$" + valor.toFixed(2)
    }
    if (codigo == 101) {
        valor = Number(qtd * 1.3);
        document.getElementById('resultado').innerHTML = "Total do pedido: R$" + valor.toFixed(2)
    }
    if (codigo == 102) {
        valor = Number(qtd * 1.5);
        document.getElementById('resultado').innerHTML = "Total do pedido: R$" + valor.toFixed(2)
    }
    if (codigo == 103) {
        valor = Number(qtd * 1.2);
        document.getElementById('resultado').innerHTML = "Total do pedido: R$" + valor.toFixed(2)
    }
    if (codigo == 104) {
        valor = Number(qtd * 1.3);
        document.getElementById('resultado').innerHTML = "Total do pedido: R$" + valor.toFixed(2)
    }
    if (codigo == 105) {
        valor = Number(qtd * 1.0);
        document.getElementById('resultado').innerHTML = "Total do pedido: R$" + valor.toFixed(2)
    }
}
