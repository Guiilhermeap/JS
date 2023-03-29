/// JavaScript ///

//Contrução de variáveis

var valor, taxa, tempo, prestacao;

// ENTRADA
valor = prompt ('Entre com o valor da Parcela')
taxa = prompt ('Entre com a taxa')
tempo = prompt ('Entre com o tempo de atraso')

/// Calculo de Prestação
prestacao = valor+(valor*(taxa/100)*tempo)

alert ('O VALOR DA SUA PARCELA EM ATRASO É DE: '+ prestacao) // SAIDA
