// Switch_case
//
// https://codepen.io/vovs03/pen/GRNNmop?editors=1111
// ./hw2_3_switch_case.js


const a = Number(-18);
const b = Number(-4);

const zero = Number(0); // Positive Number

function nums(a, b) {

    console.log(a, b);

    switch(true) {
        // Difference - разность
        case (a >= 0 && b >= 0):
            console.log("Разность чисел: ");
            console.log(Number(a - b));
            return a - b;

        // ProductOfNumbers - произведение чисел
        case (a < 0 && b < 0):
            console.log("Произведение чисел: ");
            console.log(Number(a * b));
            return a * b;

        // Summ - Сумма
        case (a >= 0 || b >= 0):
            console.log("Сумма чисел: ");
            console.log(Number(a + b));
            return a + b;
    }
}

result = nums(a, b);

//console.log(result);