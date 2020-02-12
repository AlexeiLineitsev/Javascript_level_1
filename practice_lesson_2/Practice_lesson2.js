"use strict" //Указывает то что мы используем синтаксис ES5
//
//
// // --------------------------------------Тернарный операторы----------------------------------------------------------
//
// // (условие) ? 'оператор по истине' : 'оператор по лжи'---------------------------------------------------------------
//
// var ifElse =  (10 > 1) ? 'Это правда' : 'Это неправда';
// console.log(ifElse);
//
//
// // ---------------------------------------------------- Функция ------------------------------------------------------
//
// // function названиеФункции (парам1, парам2) {
// //      действие;
// // }
//
// function summa(a, b) {
//     var sum = a + b;
//     return sum;
// }
//
//
// console.log(summa(11,12));

//-------------------------------------------------------------УГАДАЙ ЧИСЛО---------------------------------------------




var count = 0; // Счетких неверных попыток
var randomNumber;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    randomNumber = Math.floor(Math.random() * (max - min)) + min;
    return randomNumber; //Максимум не включается, минимум включается
}

function checkAnswer() {
    var answer = document.getElementById('inp_3').value;
    console.log(answer);
    console.log(randomNumber);
}

function getRandom() {
    randomNumber = getRandomInt(document.getElementById('inp_1').value, document.getElementById('inp_2').value);
    console.log('в ', randomNumber);
}
