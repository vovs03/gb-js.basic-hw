// AddProductToBasket_t42.js
// https://codepen.io/vovs03/pen/poNwwEw?editors=1111
// ./t42.js

// Продолжить работу с интернет-магазином:
// - В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// - Реализуйте такие объекты.
// - Перенести функционал подсчета корзины на объектно-ориентированную базу.

`use strict`

//Функция добавления товара в корзину
function addProductBasket(arr, name, price, quantity) {
    arr.push({
        product: name,
        price: price,
        quantity: quantity,
        total: totalSum
    });
}

function totalSum() {
    return this.price*this.quantity;
}

const basket = [
    {
        product: 'shirt',
        price: 200,
        quantity: 2,
        total: totalSum
    },
    {
        product: 'shorts',
        price: 700,
        quantity: 1,
        total: totalSum
    },
    {
        product: 'dress',
        price: 1100,
        quantity: 3,
        total: totalSum
    },
    {   product: 'socks',
        price: 150,
        quantity: 5,
        total: totalSum
    },
]

function countBasketPrice(arr) {
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i].total();
    }
    return sum;
}

function descBasketPrice(arr) {
    let str = '';
    for (var i = 0; i < arr.length; i++) {
        str += (i + 1) + '. ' + arr[i].product + ' - ' + arr[i].price + ' * ' + arr[i].quantity + ' = ' + (arr[i].total()) + '\n';
    }
    return str;
}

console.log('В корзину добавлены следующие товары:\n' + descBasketPrice(basket) + '\nОбщая стоимость составляет: ' + countBasketPrice(basket));
