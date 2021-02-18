// ConvertNumberToObject_41.js
// https://codepen.io/vovs03/pen/ExNXWoj?editors=1111
// ./t41.js


// Задача 41. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, 
// мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
// Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log 
// и вернуть пустой объект.

'use strict'

let max = 1320;
// ((max-min)+ min)
let num = parseInt(Math.random()*(max - 0) + 0);

console.log(numToObj(num));
function numToObj(n) {
  if (n < 0 || n > 999 || typeof n !== "number") {
    //let obj = {};
    console.log("Неверное число. Введите число от 0 до 999.");
  } else {
    let str = n.toString();
    let obj = {};
    let l = str.length;
    switch (l) {
      case 3:
        obj["Сотни"] = str[l - 3];
      case 2:
        obj["Десятки"] = str[l - 2];
      case 1:
        obj["Единицы"] = str[l - 1];
    }
    return obj;
  }
}