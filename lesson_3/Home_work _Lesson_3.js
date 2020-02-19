"use strict"

// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100

function isPrime(num) {
    if(num < 2) return false;

    let i = 2;
    while(i < num) {
        if(num % i === 0) {
            return false;
        }
        i++;
    }
    return true;
}

function getPrimes(max) {
    var i = 0;
    var list = []; // console.log(i)

    while(i < max) {
        if(isPrime(i)) list.push(i);
        i++;
    }

    console.log(list);
}

getPrimes(100);


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