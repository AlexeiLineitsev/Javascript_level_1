//
// Быки и коровы Усложним нашу предыдущую игру. ​ Ваш соперник (компьютер, например), загадывает 4-значное
// число, состоящее из неповторяющихся цифр. Ваша задача - угадать его. Кстати, число ходов можно и
// ограничить. В качестве подсказок выступают ​ «коровы» (цифра угадана, но её позиция - нет) и ​ «быки»
// (когда совпадает и цифра и её позиция). То есть если загадано число ​ «​ 1234», а вы называете ​ «​ 6531»,
// то результатом будет 1 корова (цифра ​ «​ 1») и 1 бык (цифра ​ «​ 3») .
//
// Попытки отгадать число будут идти через диалоговое окно – prompt. Браузер будет сообщать в ответ
// больше или меньше загаданного наше предположение.
//
//     Алгоритм будет таким:
//
//     1. Браузер генерирует число и приглашает пользователя к игре.
//     2. Выводится окно запроса предположения.
//     3. Браузер проверяет число и возвращает результат.
//     4. Повторяем до тех пор, пока число не будет угадано.
//     5. Как только число угадано, браузер сбрасывает число попыток и генерирует новое число.

function generateNumber(from, before) {
    return Math.round(from + Math.random() * (before - from));
}

function cow_bull(numbers, unknownNumber) {
    let arr_numbers = String(numbers).split('');
    let arr_unknownNumber = String(unknownNumber).split('');

    for (let i = 0; i <= arr_numbers.length; i++) {
        if (arr_numbers[i] == arr_unknownNumber[i] && arr_numbers[i] !== undefined) {
            //alert('Цифра ' + arr_numbers[i] + ' является быком');
            console.log('Цифра ' + arr_numbers[i] + ' является быком');
            delete arr_numbers[i];
        }
    }
    console.log(arr_numbers);
    for (let i = 0; i <= arr_numbers.length; i++) {
        for (let j = 0; j <= arr_unknownNumber.length; j++) {
            if (arr_numbers[i] != undefined && arr_numbers[i] == arr_unknownNumber[j]) {
                //alert('Цифра ' + arr_numbers[i] + ' является коровой');
                console.log('Цифра ' + arr_numbers[i] + ' является коровой');
                delete arr_numbers[i];

            }
        }
    }
}

function checkAnswer(unknownNumber) {
    numbers = prompt('Вы угадываете 4-х значное число' + '\n(-1 Закончить игру)', 'Наберите число');
    gameIsRunning = true;

    while (gameIsRunning) {
        if (numbers == -1) {
            gameIsRunning = false;
        } else if (isNaN(numbers)) {
            alert('Вы не ввели число\nВыход')
            gameIsRunning = false;
        } else if (numbers == unknownNumber) {
            alert('Вы угадали, число попыток - ' + count);
            gameIsRunning = false;
        } else {
            count++;
            cow_bull(numbers, unknownNumber);
            numbers = prompt('Не угадали\nУкажите число(-1 закончить)\nПопыток ' + count);
        }
    }
}


var unknownNumber = generateNumber(1000, 9999);
var count = 0;

console.log('Браузер cгенерировал число - ' + unknownNumber);

checkAnswer(unknownNumber);






