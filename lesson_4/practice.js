"use strict";

// выписать сделанные пользователем ходы в массив и вывести их по окончании игры

var game = {
    count: 0,
    gameIsRunning: true,
    random: function(min, max) {
        return Math.round(min + Math.random() * (max - min));
    },
    checkAnswer: function(random) {
        var answer = +prompt('Укажите число (-1 – закончить игру)');

        while(this.gameIsRunning) {
            if(answer === -1) {
                this.gameIsRunning = false;
            } else if (answer == 0 && isNaN(answer)) {
                alert('Вы не ввели число!\nВыход.');
                this.gameIsRunning = false;
            } else if (answer == random) {
                alert('Поздравляем, вы угадали число!');
                this.gameIsRunning = false;
            } else {
                this.count++;
                answer = +prompt('Не угадали.\nУкажите другое чило(-1 – закончить игру)\nПопыток:' + this.count);
            }
        }
    }
}


game.checkAnswer(game.random(1, 3));