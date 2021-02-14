'use strict'
// https://codepen.io/vovs03/pen/bGBgzMg?editors=1111
// ./t5.js = hw3_5_math-operations.js

const a = 40;
const b = 50;
console.log("Операции с числами: a =", a, "b =", b)

var s = sum(a, b)
var m = min(a, b)
var d = div(a, b)
var u = mult(a, b)

function sum(a,b){
    return (a + b);
}
console.log("Сумма =", s);

function min(a,b){
    return (a - b)
}
console.log("Разность =", m);

function div(a,b){
    return (a / b)
}
console.log("Частное =", d);

function mult(a,b){
    return (a * b)
}
console.log("Произведение =", u);

sum();
min();
div();
mult();