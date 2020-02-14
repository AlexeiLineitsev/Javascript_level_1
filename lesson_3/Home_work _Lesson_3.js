"use strict"

// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100

function deleteArrayElem(array, p, n) {
    let result = 0;

    for (let i = 0; i <= n - 1; i++) {
        result = array[i] * p;
        let check_result = array.indexOf(result);
        if (check_result !== -1) {
            delete array[check_result];
        }
    }
    array = array.filter(function (x) {
        return x !== undefined && x !== null; // Чистим массив от пустых записей
    });
    return array;
}


var number = [];
let n = 100;

for (let i = 2; i <= n; i++) { //Заполняем массив
    number.push(i);
}


let i = 0;
let p = 0;

while (i < n - 1) {
    p = number[i];

    if (p * p > n) {
        break;
    } // Условия выхода по формуле Эратосфера
    number = deleteArrayElem(number, p, n);
    i++;
}

console.log(number);


// 2. С помощью цикла do…while написать функцию для вывода чисел от 0 до 10, чтобы результат выглядел так:
//
//     0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
//     …
//     10 – четное число

function getEven_Odd(number) {
    if (number !== 0) {
        (number % 2 === 0) ? console.log(number + ' - четное число') : console.log(number + ' - нечетное число');
    } else {
        console.log('Это ноль');
    }
}

function outputNumber(number) {
    let i = 0;
    do {
        getEven_Odd(i);
        i++;
    } while (i <= number);
}

outputNumber(11);


// 3*. Вывести с помощью цикла for числа от 0 до 9, НЕ используя тело цикла. То есть выглядеть должно вот так:  for(…){// здесь пусто}


for(let i = 0; i <= 9; console.log(i++)){}



// 4*. Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
//
// x
// xx
// xxx
// xxxx
// xxxxx

let x = '';

for(let i = 1; i <= 20; i++) {
    x = x + 'x';
    console.log(x);
}