/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */

const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];

function addCharacter(character) {
  characters.push(character);
}
const newCharacter = { name: 'John', age: 45 };
addCharacter(newCharacter);
console.log(characters);

function getCharacter(name) {
return characters.find (character => character.name === name)
}
const result = getCharacter ('Jack');
console.log (result)

function getCharactersByAge(minAge) {
return characters.filter (character => character.age > minAge)
}
const resultage = getCharactersByAge(40);
console.log (resultage)

function updateCharacter(name, {name: newname, age: newage}) {
  let update = getCharacter(name);
  update.name = newname;
  update.age = newage
  return characters
}
console.log (updateCharacter('Fred', {name: 'Sanya', age: 100}))

function removeCharacter(name) {
 const indexofel = characters.findIndex(el => el.name === name)
  characters.splice (indexofel, 1)
  return characters
}
console.log (removeCharacter ('Jack'))

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
