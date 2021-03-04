// cart
'use strict'

const cart = ( function() {
    let cart = [];

    function Good(name, price) {
        this.name = name;
        this.price = price;
    };

    // вывод корзины в консоли
    function draw() {
        console.log(cart)
    }

    // в записи снова непонятно о чём речь 1:24:36 ну да, что-то вроде того...
    function debonce (callback) {
        // 1:25:36
        let timer = null;
        return function () {
            // Очистка и сброс таймера
            if (timer) {
                clearTimeout(timer);
            }
            // timer.id (clear - чтобы удалить)
            timer = setTimeout(callback, 100)
        }
    }

    // обёртка над draw
    const debonceDraw = debonce(draw);

    return {
        getPrice() {
            return cart.reduce(function(acc, good) {
                return acc + good.price
            }, 0);
        },
        add(name, price) {
            cart.push(new Good(name, price))
            // вывод в консоли
            debonceDraw();
        }
    }
})();

(function (imported) {

    imported.cart.add('финики', 75);
    imported.cart.add('бананы', 55);
    imported.cart.add('лимоны', 93);
    imported.cart.add('киви', 122);

    console.log(imported.cart.getPrice());

})({
    cart: cart

});