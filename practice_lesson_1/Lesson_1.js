/* 1. Задать температуру в градусах по Цельсию.
Вывести в alert соответствующую температуру в
градусах по Фаренгейту.
Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32,
где Tf – температура по Фаренгейту, Tc – температура по Цельсию

2. Работа с переменными.

3. Объявить две переменные: admin и name. Записать в name строку "Василий";
Скопировать значение из name в admin. Вывести admin (должно вывести «Василий»).
4. * Чему будет равно JS-выражение 1000 + "108";
5. * Самостоятельно разобраться с атрибутами тега script (async и defer)*/


// 1. ------------------------------------------------------------------------------------------------

var tempCels = prompt('Укажите температуру в градусах для перевода ее в цельсиях', '15');

var tempFaren = (tempCels * (9 / 5)) + 32;

alert('Вы указали температуру в цельсиях =' + ' ' + tempCels + ' ' + 'мы перевели ее в фаренгейты она = ' + tempFaren);


// 3. ------------------------------------------------------------------------------------------------

var admin;
var name = 'Василий';
admin = name;
alert(admin);

// 4. ------------------------------------------------------------------------------------------------

var number = 1000;
var str = "108";

alert('Выражение 1000 + "108" = ' + number + str);
str = 'Маша';
alert('Выражение 1000 + "108" = ' + number + str);


// 5. ------------------------------------------------------------------------------------------------
