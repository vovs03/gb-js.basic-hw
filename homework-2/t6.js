// https://codepen.io/vovs03/pen/JjbWgER?editors=1111
// ./hw2_6_three-args-function.js

'use strict'

// Задание 2_6
/*
Реализовать функцию с тремя параметрами

`function mathOperation(arg1, arg2, operation)`,
где `arg1`, `arg2` – значения аргументов,
`operation` – строка с названием операции.
В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).
*/

function min(a,b) {
    return (a - b)
}

function prod(a,b) {
    return (a * b)
}

function sum(a,b) {
    return (a + b)
}

function mathOperation(a, b, operation) {

    switch(operation) {
        case '-':
            return min(a, b);
        case '*':
            return prod(a, b);
        case '+':
            return sum(a, b);
    }
}

console.log(mathOperation(20, 5, '*'));