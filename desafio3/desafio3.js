/*** Construa um algoritmo que instancia um array de inteiros com os seguintes valores: 1,3,35,40,85,123,121,209,200,305,350. Após, crie uma lógica que separe estes números */

//Para verificar esse desafio funcionando utilize o nodejs ou crie um arqui HTML e verifque no inspecionar elemento.

let array = [1, 3, 35, 40, 85, 123, 121, 209, 200, 305, 350];
let array1 = [1, 3, 35, 40, 85, 123, 121, 209, 200, 305, 350].filter(testePar);
let array2 = [1, 3, 35, 40, 85, 123, 121, 209, 200, 305, 350].filter(
  testeImpar
);

console.log(array);
console.log(`Valores pares: ${array1}`);
console.log(`Valores impares: ${array2}`);

function testePar(valor) {
  if (valor % 2 == 0) return valor;
}

function testeImpar(valor) {
  if (valor % 2 == 1) return valor;
}
