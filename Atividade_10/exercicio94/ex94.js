// JAVASCRIPT

//Criando variaveis
var salario, cargo;
// Entrada
salario = parseFloat(prompt("Digite seu salário"))
cargo = parseFloat(prompt("Descreva o código do seu cargo"))

// Calculo de aumento salárial
var novoSalario;

if (cargo == 101){
    novoSalario = (salario * 0.1)+salario
    alert ("Seu novo salário é: "+novoSalario)
} else if (cargo == 102){
    novoSalario = (salario * 0.2)+salario
    alert ("Seu novo salário é: "+novoSalario)
} else if (cargo == 103){
    novoSalario = (salario * 0.3)+salario
    alert ("Seu novo salário é: "+novoSalario)
} else {
    novoSalario = (salario * 0.4)+salario
    alert ("Seu cargo não está na tabela, seu no salário é: "+novoSalario)
}