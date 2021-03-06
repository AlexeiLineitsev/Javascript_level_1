"use strict"  // Указывает то что мы используем синтаксис ES5


// 1. Дан код:
// var​ a = 1,​ b = 1,​ c,​ d; c = ++a​ ;​ alert(c);         ​  ​
// 2 d = b​ ++;​ alert​ (​ d​ );​          ​
// 1 c = (​ 2​ +​ ​ ++​ a​ );​ alert​ (​ c​ );​  ​
// 5 d = (​ 2​ +​ b​ ++);​ alert​ (​ d​ );​ ​
// 4 alert​ (​ a​ );​                        ​
// 3 alert​ (​ b​ );​                        ​
// Почему код даёт именно такие результаты?

// var a = 1, b = 1, c, d;
// c = ++a;   //----------------------------------------1 строка-------------------------------------
// alert(c); // 2 c = a + a (Сначала увеличивает инкремент потом выводит)
//
// d = b++;    //----------------------------------------2 строка-------------------------------------
// alert(d); // 1 Сначала выводит инкремент потом увеличивает
//
// c = (2 + ++a);
// alert(c);  // 5 (2 + 3) т.к мы а увеличили в 1 строке
//
// d = (2 + b++);
// alert(d);  // 2 + 2 т.к мы а увеличили в 2 строке
//
// alert(a); // 1 + 1 + 1
//
// alert(b); // 1 + 1 + 1


// 2. Чему будет равен x в примере ниже?
//     var​ a = 2; var​ x = 1 + (a *=​2);

// var a = 2; var x = 1 + (a *= 2);
// alert(x); // 2*2


// 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.
// Затем написать скрипт, который работает по следующему принципу:
// o если a и b положительные, вывести их разность;
// o если а и b отрицательные, вывести их произведение;
// o если а и b разных знаков, вывести их сумму;
// ноль можно считать положительным числом.


var a = 0, b = -15;

if (a >= 0 && b >= 0) {
    console.log('a и b >= 0, их разность =', a - b);
}

if (a < 0 && b < 0) {
    console.log('a и b < 0, их произведение =', a * b);
}

if (a < 0 && b >= 0 || a >= 0 && b < 0) {
    console.log('a и b < 0, их сумма =', a + b);
}


// 4. Присвоить переменной а
// значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15. 5.

// var a = getRandomInt(0, 16);
//
// switch (a) {
//     case 1:
//         console.log('1');
//     case 2:
//         console.log('2');
//     case 3:
//         console.log('3');
//     case 4:
//         console.log('4');
//     case 5:
//         console.log('5');
//     case 6:
//         console.log('6');
//     case 7:
//         console.log('7');
//     case 8:
//         console.log('8');
//     case 9:
//         console.log('9');
//     case 10:
//         console.log('10');
//     case 11:
//         console.log('11');
//     case 12:
//         console.log('12');
//     case 13:
//         console.log('13');
//     case 14:
//         console.log('14');
//     case 15:
//         console.log('15');
//     case 16:
//         console.log('16');
// }


// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
// Обязательно использовать оператор return.
// 6. Реализовать функцию с тремя параметрами:
// function mathOperation(arg1, arg2, operation), где
// arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
// переданного значения операции выполнить одну из арифметических операций и
// вернуть полученное значение (использовать switch).

function division(a, b) {
    if (b !== 0) {
        var result = a / b;
        console.log('a / b = ' + result);
        return result;
    } else {
        return console.log('Деление на ноль');
    }
}

function addition(a, b) {
    var result = a + b;
    console.log('a + b = ' + result);
    return result;
}

function multiplication(a, b) {
    var result = a * b;
    console.log('a * b = ' + result);
    return result;
}

function subtraction(a, b) {
    var result = a - b;
    console.log('a - b = ' + result);
    return result;
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+': return addition(a, b);
        case '-': return subtraction(a, b);
        case '*': return multiplication(a, b);
        case '/': return division(a, b);
        default: console.log('Ошибка');
    }
}

var a = 11, b = 0;
mathOperation(a, b, '/');

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     var randomNumber = Math.floor(Math.random() * (max - min)) + min;
//     return randomNumber; //Максимум не включается, минимум включается
// }
//

// 7. * Сравнить null и 0. Попробуйте объяснить результат.

// alert(null > 0);  // (1) false
// alert(null == 0); // (2) false
// alert(null >= 0); // (3) true

// С точки зрения математики это странно. Результат последнего сравнения говорит о том, 
// что "null больше или равно нулю", тогда результат одного из сравнений выше должен быть true, но они оба ложны.
// Причина в том, что нестрогое равенство и сравнения > < >= <= работают по-разному. 
// Сравнения преобразуют null в число, рассматривая его как 0. Поэтому выражение (3) null >= 0 истинно, а null > 0 ложно.
// С другой стороны, для нестрогого равенства == значений undefined и null действует особое правило: 
// эти значения ни к чему не приводятся, они равны друг другу и не равны ничему другому. Поэтому (2) null == 0 ложно.


// 8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function
// power(val, pow), где val – заданное число, pow – степень.

//
// function power(val, pow) {
//     if (pow !== 1) {
//         return val * power(val, pow - 1);
//     } else {
//         return val;
//     }
// }
// console.log(power(2,10));