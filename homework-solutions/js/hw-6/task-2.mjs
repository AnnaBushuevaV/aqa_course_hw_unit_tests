/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/
let resultUnique = [];
let resultNull = null;
const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const LowercompetitorPizzas = [];
const LowermyPizzasT1 = [];
const LowermyPizzasT2 = [];

for (let pizza1 of competitorPizzas) {
  LowercompetitorPizzas.push(pizza1.toLowerCase())
}

for (let pizza2 of myPizzasT1) {
  LowermyPizzasT1.push(pizza2.toLowerCase())
}
for (let pizza3 of myPizzasT2) {
  LowermyPizzasT2.push(pizza3.toLowerCase())
}

let ResultPizza1 = []
let ResultPizza2 = []



for (let i=0; i<myPizzasT1.length; i++) {
  if (!LowercompetitorPizzas.includes(LowermyPizzasT1[i])) {
    ResultPizza1.push(myPizzasT1[i].toLowerCase())
    
  }
}

for (let i=0; i<myPizzasT2.length; i++) {
  if (!LowercompetitorPizzas.includes(LowermyPizzasT2[i])) {
    ResultPizza2.push(myPizzasT2[i].toLowerCase())
  }
}

resultUnique = [...ResultPizza1, ...ResultPizza2];
if (resultUnique.length === 0){
  resultNull = null;
}

console.log(resultNull,resultUnique)
export { resultNull, resultUnique };