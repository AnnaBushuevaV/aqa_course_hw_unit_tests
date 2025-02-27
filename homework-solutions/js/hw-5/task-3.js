/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */

const word = 'hello';
let vowelsAndConsonantsResult = '';
const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
let sumconsonants = 0;
let sumvowels = 0;
for (let i = 0; i < word.length; i++) {
  if (vowels.indexOf(word[i]) !== -1) {
    sumvowels++; 
  } else {
    sumconsonants++;
}   
}
console.log (sumvowels)
console.log (sumconsonants)
vowelsAndConsonantsResult = `hello contains ${sumvowels} vowels and ${sumconsonants} consonants`
console.log (vowelsAndConsonantsResult)

export { vowelsAndConsonantsResult };
