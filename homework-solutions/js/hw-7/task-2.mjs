/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/
function isPalindrom(word) {
  let reversedWord = '';
  for (let i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
  }
  return word === reversedWord;
}
console.log(isPalindrom('топот')); 
/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
 const word_s = sentence.split(' ');
 let max = 0;
 let lon = 0;
 for (let i = 0; i<word_s.length; i++) {
  if (word_s[i].length > max) {
    max = word_s[i].length;
    lon = word_s[i]; 
  } 
 else if (word_s[i].length === max)
    lon += word_s[i]; 

 }
return lon ;
  }
  
console.log(findLongestWords('мое предложение раз и два'));
export { isPalindrom, findLongestWords };
