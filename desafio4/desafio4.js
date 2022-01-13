/**Construa um algoritmo que recebe do usuário 5 números. Após recebê-los, retorne a lista de números em ordem decrescente.**/

function listarDecrescente() {
  let array = [];
  let numeros = [];

  for (i = 0; i < 5; i++) {
    let entradaNumeros = Number(prompt("Digite um numero"));

    if (isNaN(entradaNumeros)) {
      alert("[ERRO] Valor inválido");
      let entradaNumeros = Number(prompt("Digite um numero"));
    } else {
      numeros.push(entradaNumeros);
      array.push(entradaNumeros);
      numeros.sort((a, b) => {
        if (a > b) return -1; // Essa é uma forma de utilizar o metodo sort() para retornar a array decrescente
        if (a < b) return 1; //
        return 0;
      });
    }
  }
  alert(`O array era [${array}] e em ordem decrescente é [${numeros}] `);
}

listarDecrescente();
