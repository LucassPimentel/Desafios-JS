/*Construa um algoritmo que calcula o tamanho de um edifício com base na altura de cada andar e o número de andares informados pelo usuário. */

function tamanhoPredio() {
  let alturaAndares = Number(
    prompt("Qual a altura de cada andar? (em metros)")
  );

  if (isNaN(alturaAndares)) {
    alert("[ERRO] Valor inválido");
    tamanhoPredio();
  } else {
    let qtdAndares = Number(
      prompt("Quantos andares possui o prédio? (em metros)")
    );

    if (isNaN(qtdAndares)) {
      alert("[ERRO] Valor  inválido");
      tamanhoPredio();
    } else {
      let tamanho = alturaAndares * qtdAndares;

      alert(`O tamanho do prédio é ${tamanho} metros`);
    }
  }
}

tamanhoPredio();
