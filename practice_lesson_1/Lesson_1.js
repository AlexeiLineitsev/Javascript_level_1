"use strict"  // Указывает то что мы используем синтаксис ES5
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

var h2_text_1 = document.querySelector('.h2_text_1');
h2_text_1.innerHTML = 'defer <br> Атрибут br defer сообщает браузеру, что он должен продолжать обрабатывать страницу и загружать скрипт в фоновом режиме, а затем запустить этот скрипт, когда он загрузится.';

var h2_text_2 = document.querySelector('.h2_text_2');
h2_text_2.innerHTML = 'async <br>\n' +
    '    Атрибут async означает, что скрипт абсолютно независим:\n' +
    '\n' +
    '    Страница не ждёт асинхронных скриптов, содержимое обрабатывается и отображается.\n' +
    '    Событие DOMContentLoaded и асинхронные скрипты не ждут друг друга:\n' +
    '    DOMContentLoaded может произойти как до асинхронного скрипта (если асинхронный скрипт завершит загрузку после того, как страница будет готова),\n' +
    '    …так и после асинхронного скрипта (если он короткий или уже содержится в HTTP-кеше)\n' +
    '    Остальные скрипты не ждут async, и скрипты casync не ждут другие скрипты.';
