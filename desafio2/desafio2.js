/**Construa um algoritmo que receba do usuário 4 números. Imprima o maior, o menor e a média deles. */

function funcao() {
  let numeros = [];
  let maiorNmr = 0;
  let menorNmr = Infinity;
  let media = 0;

  for (i = 0; i < 4; i++) {
    let entradaNumeros = Number(prompt("Digite um número positivo: "));
    let numero = entradaNumeros;
    numeros.push(numero);

    if (isNaN(numero) || numero < 0) {
      //isNan = Is not a number ou seja se não for um número ele executa
      alert("[ERRO] Valores inválidos, insira apenas *números* *positivos*.");
      let entradaNumeros = Number(prompt("digite um numero: "));
    } else {
      if (numeros[i] > maiorNmr) {
        maiorNmr = numeros[i];
      }

      if (numeros[i] < menorNmr) {
        menorNmr = numeros[i];
      } else {
        media += numeros[i] / 4;
      }
    }
  }
  alert(
    `O menor número foi ${menorNmr}. 
     O maior foi ${maiorNmr}.
     E a média deles é ${media}.`
  );
}

funcao();
