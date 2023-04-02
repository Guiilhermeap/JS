// JAVASnum3RIPT

// Cria um array vazio
const numeros = [];

// Loop para litura de números
for(let i = 0; i < 5; i++){
  const numero = parseInt(prompt(`Digite o ${i+1}º número:`));
  numeros.push(numero);
}

// Variáveis de maior e menor valor
let maior = numeros[0];
let menor = numeros[0];

// Verifica o array e variáveis de maior e menor valor
for(let i = 1; i < numeros.length; i++){
  if(numeros[i] > maior){
    maior = numeros[i];
  }
  if(numeros[i] < menor){
    menor = numeros[i];
  }
}

// Saída
alert(`O maior número é ${maior} e o menor número é ${menor}.`);