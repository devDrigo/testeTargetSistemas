function countLetterA(str) {
    const regex = /a/gi;
    const matches = str.match(regex);
    return matches ? matches.length : 0;
}

const inputString = prompt("Digite um texto para contar as ocorrências da letra 'a' (seja minúsculo ou maiúsculo):");
const count = countLetterA(inputString);
console.log(`A letra 'a' aparece ${count} ${count === 1 ? 'vez' : 'vezes'}.`);
