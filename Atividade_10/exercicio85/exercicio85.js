// JAVASCRIPT

// CRIANDO VARIAVEIS
var nota1, nota2, nota3, nota4;

nota1 = parseInt(prompt("Digite a primeira Nota: ")); //Entrada
nota2 = parseInt(prompt("Digite a segunda Nota: ")); //Entrada
nota3 = parseInt(prompt("Digite a terceira Nota: ")); //Entrada
nota4 = parseInt(prompt("Digite a quarta Nota: ")); //Entrada

// Cálcula se média de aprovação do aluno
var media;
media = Number((nota1 + nota2 + nota3 + nota4)/4);

if (media >= 7) {
    alert("Você está aprovado!!!\nSua média foi de "+ media)
} else {
    alert("Você está reprovado!!!\nSua média foi de "+ media)
}