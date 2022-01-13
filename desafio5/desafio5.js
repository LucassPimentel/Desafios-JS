function ContVogal() {
  let frase = prompt("Escreva uma frase qualquer: ").toLowerCase();
  let fraseDesmem = frase.split("");
  let vogais = [];

  if (isNaN(frase)) {
    for (i = 0; i < frase.length; i++) {
      if (
        fraseDesmem[i] === "a" ||
        fraseDesmem[i] === "e" ||
        fraseDesmem[i] === "i" ||
        fraseDesmem[i] === "o" ||
        fraseDesmem[i] === "u"
      ) {
        vogais.push(fraseDesmem[i]);
      }
    }
    alert(`A frase foi: ${frase} e possui as seguintes vogais: ${vogais}`);
  } else {
    alert("[ERRO] Escreva uma frase válida");
    ContVogal();
  }
}

ContVogal();
