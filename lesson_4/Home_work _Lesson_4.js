"use strict"
// Урок 4. Объекты в JavaScript
// 1. Написать функцию, преобразующую число в объект
//
// * Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих
// свойствах описаны единицы, десятки и сотни.
// * Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
// * Если число превышает 999, необходимо выдать соответствующее сообщение с помощью `console.log` и
// вернуть пустой объект.

var numberToObject = {
    getDigits: function (n) {
        var digits;
        for (var i = 0; n + 1 > 1; i++) {
            digits = n % 10;
            n = Math.floor(n / 10);
            this.arrayDigits.push(digits);
        }
    },
    arrayDigits: [],
    checkNumber: true,
    digitsObject: {},
    checkAnswer: function () {
        var answer = +prompt('Укажите число в диапазоне [от 0 до 999] - ');
        if (answer > 1 && answer >999) {
            console.log('Вы ввели число не в заданном диапазоне!');
            return this.arrayDigits[null, null, null];
        } else {
            this.getDigits(answer);
            this.digitsObject = this.getArray(this.arrayDigits);
            return this.digitsObject;
        }
    },
    getArray: function (array) {
        var digitsObject = {
            сотни: array[this.arrayDigits.length-1],
            десятки: array[this.arrayDigits.length-2],
            единицы: array[this.arrayDigits.length-3]
        };
        return digitsObject;
    }
};

console.log(numberToObject.checkAnswer());





// var number = numberToObject;
// number.getDigits(256);

// var digitsObject = {
//     сотни: number.arrayDigits[2],
//     десятки: number.arrayDigits[1],
//     единицы: number.arrayDigits[0]
// };

// console.log(digitsObject);

// 2. * Выписать сделанные пользователем ходы в массив и вывести их по окончании игры

// var game = {
//     count: 0,
//     steps: [],
//     gameIsRunning: true,
//     random: function(min, max) {
//         return Math.round(min + Math.random() * (max - min));
//     },
//     checkAnswer: function(random) {
//         var answer = +prompt('Укажите число (-1 – закончить игру)');
//
//         while(this.gameIsRunning) {
//             if(answer === -1) {
//                 this.gameIsRunning = false;
//             } else if (answer == 0 && isNaN(answer)) {
//                 alert('Вы не ввели число!\nВыход.');
//                 this.gameIsRunning = false;
//             } else if (answer == random) {
//                 alert('Поздравляем, вы угадали число!');
//                 this.gameIsRunning = false;
//             } else {
//                 this.count++;
//                 this.steps.push(answer);
//                 answer = +prompt('Не угадали.\nУкажите другое чило(-1 – закончить игру)\nПопыток:' + this.count + '\nВаши числа: ' + this.steps);
//             }
//         }
//     }
// }
//
//
// game.checkAnswer(game.random(1, 3));