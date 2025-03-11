/*
  Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива.

  Пример: const arr = [5,2,7,3,8,1,6] //4
*/

function findMissingNumber(numbers) {
  numbers.sort ((a,b) => a-b)
 for (let i = 0; i < numbers.length - 1; i++) {
  if (numbers[i + 1] - numbers[i] > 1) {
    return numbers[i] + 1
  }}
}
const arr = [5, 2, 7, 3, 8, 1, 6];
const missingNumber = findMissingNumber(arr);
console.log(missingNumber); 
export { findMissingNumber };
