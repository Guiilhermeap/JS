/// JavaScript ///

//Contrução de variáveis

var diaNasc, mesNasc, anoNasc, mesDias, anoDias, somaDias;

diaNasc = prompt('DIGITE OS DIAS') //ENTRADA
mesNasc = prompt('DIGITE OS MESES') //ENTRADA
anoNasc = prompt('DIGITE OS ANOS') //ENTRADA

// TRANSFORMA A DATA EM DIAS

mesDias = mesNasc * 30;
anoDias = anoNasc * 365;
somaDias = mesDias + anoDias + diaNasc;

alert ('SUA DATA DE NASCIMENTO EM DIAS É DE: '+ mesDias + ' DIAS ' + anoDias)
