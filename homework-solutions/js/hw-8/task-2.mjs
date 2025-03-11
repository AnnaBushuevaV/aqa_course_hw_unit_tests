/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */
  const vowels = ['a', 'e', 'i', 'o', 'u'];
const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

function sortedByVowels(wordsArr) {
 return wordsArr.sort ((a,b) => a.split('').filter(letter => vowels.includes(letter)).length 
 - b.split('').filter(letter => vowels.includes(letter)).length)
}
const sortedWords = sortedByVowels(words);
console.log(sortedWords);
export { sortedByVowels };
