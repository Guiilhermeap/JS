// JAVASCRIPT

function empresaSalario() {
    //Criando variaveis
    var salario, cargo;
    // Entrada
    salario = parseFloat(document.getElementById('salario').value)
    cargo = parseFloat(document.getElementById('cargo').value)

    // Calculo de aumento salárial
    var novoSalario;

    if (cargo == 101) {
        novoSalario = (salario * 0.1) + salario
        document.getElementById('resultado').innerHTML = "Seu novo salário é: R$" + novoSalario.toFixed(2)
    } else if (cargo == 102) {
        novoSalario = (salario * 0.2) + salario
        document.getElementById('resultado').innerHTML = "Seu novo salário é: R$" + novoSalario.toFixed(2)
    } else if (cargo == 103) {
        novoSalario = (salario * 0.3) + salario
        document.getElementById('resultado').innerHTML = "Seu novo salário é: R$" + novoSalario.toFixed(2)
    } else {
        novoSalario = (salario * 0.4) + salario
        document.getElementById('resultado').innerHTML = "Seu cargo não está na tabela, seu novo salário será: R$" + novoSalario
    }
}