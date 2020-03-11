"use strict"
var FIELD_SIZE_X = 20;
var FIELD_SIZE_Y = 20;
var SNAKE_SPEED = 300; // интервал в мс между перемещениями змейки
var snake = []; // змейка
var crash = []; // количество препятствий
var countCrashField = 2;
var direction = "x-"; // по умолчанию змейка движется вверх, уменьшая координату x
var gameIsRunning = false;
var snake_timer;
var food_timer;
var crash_timer;
var score = 0;

function init() {
  prepareGameField();
  document.querySelector('#snake-start').addEventListener('click', startGame);
  document.querySelector('#snake-renew').addEventListener('click', refreshGame);
  addEventListener('keydown', changeDirection);
}

function prepareGameField() {
  var game_table = document.createElement('table');
  game_table.classList.add('game-table');

  // генерируем строки и ячейки игровой таблицы
  for (var i = 0; i < FIELD_SIZE_X; i++) {
    var row = document.createElement('tr');
    row.classList.add('game-table-row');
    row.dataset.row = i;

    for (var j = 0; j < FIELD_SIZE_Y; j++) {
      var cell = document.createElement('td');
      cell.classList.add('game-table-cell');
      cell.dataset.cell = i + '-' + j;

      row.appendChild(cell);
    }
    game_table.appendChild(row);
  }
  document.querySelector('#snake-field').appendChild(game_table);
}

function startGame() {
  gameIsRunning = true;
  respawn();

  snake_timer = setInterval(move, SNAKE_SPEED);
  setTimeout(createFood, 5000);
  crash_timer = setInterval(createCrashInField, 5000);
}

// располагаем змейку на игровом поле
function respawn() {
  // стандартная длина змейки - 2
  var start_coord_x = Math.floor(FIELD_SIZE_X / 2);
  var start_coord_y = Math.floor(FIELD_SIZE_Y / 2);

  var snake_head = document.querySelector("[data-cell='" + start_coord_x + "-" + start_coord_y + "']");
  snake_head.classList.add('snake-unit');

  var snake_tail = document.querySelector("[data-cell='" + (start_coord_x - 1) + "-" + start_coord_y + "']");
  snake_tail.classList.add('snake-unit');

  snake.push(snake_head, snake_tail);
}

function move() {
  var snake_head = snake[snake.length - 1];
  var new_unit;
  var snake_coords = snake_head.dataset.cell.split('-');
  var coord_x = parseInt(snake_coords[0]);
  var coord_y = parseInt(snake_coords[1]);

  // определяем новую точку
  if (direction == "x-") {
    if ((coord_x - 1) < 0) {
      new_unit = document.querySelector("[data-cell='" + (FIELD_SIZE_X - 1) + '-' + coord_y + "']");
    } else {
      new_unit = document.querySelector("[data-cell='" + (coord_x - 1) + '-' + coord_y + "']");
    }
  } else if (direction == "x+") {
    if ((coord_x + 1) == FIELD_SIZE_X) {
      new_unit = document.querySelector("[data-cell='" + 0 + '-' + coord_y + "']");
    } else {
      new_unit = document.querySelector("[data-cell='" + (coord_x + 1) + '-' + coord_y + "']");
    }
  } else if (direction == "y+") {
    if ((coord_y + 1) >= FIELD_SIZE_Y) {
      new_unit = document.querySelector("[data-cell='" + coord_x + '-' + 0 + "']");
    } else {
      new_unit = document.querySelector("[data-cell='" + coord_x + '-' + (coord_y + 1) + "']");
    }
  } else if (direction == "y-") {
    if ((coord_y - 1) < 0) {
      new_unit = document.querySelector("[data-cell='" + coord_x + '-' + (FIELD_SIZE_Y - 1) + "']");
    } else {
      new_unit = document.querySelector("[data-cell='" + coord_x + '-' + (coord_y - 1) + "']");
    }
  }

  // проверяем, что new_unit – не часть змейки
  // так же проверяем, что змейка не дошла до границы

  if (!isSnakeUnit(new_unit)) {
    new_unit.classList.add('snake-unit');
    snake.push(new_unit);

    // если змейка не ела, убираем хвост
    if (!haveFood(new_unit)) {
      var removed = snake.splice(0, 1)[0];
      removed.classList.remove('snake-unit', 'food-unit');
    }

    if (!haveCrash(new_unit)) {
      finishTheGame();
    }

  }
}

function isSnakeUnit(unit) {
  var check = false;

  if (snake.includes(unit)) {
    check = true;
  }
  return check;
}
//конец игры
function finishTheGame() {
  gameIsRunning = false;
  clearInterval(snake_timer);
  clearInterval(crash_timer);
  alert('GAME OVER! Score: ' + score);
}

// проверяем встречу с едой
function haveFood(unit) {
  var check = false;
  var isSnakeEating = unit.classList.contains('food-unit');

  // змейка съела еду
  if (isSnakeEating) {
    check = true;

    // создаем новую еду
    createFood();

    // увеличиваем количество очков
    score++;
    document.getElementById('score').innerText = 'Score ' + score;
  }
  return check;
}

function createFood() {

  var food_x = Math.floor(Math.random() * (FIELD_SIZE_X));
  var food_y = Math.floor(Math.random() * (FIELD_SIZE_Y));

  var food_cell = document.querySelector("[data-cell='" + food_x + '-' + food_y + "']");
  var isSnake = food_cell.classList.contains('snake-unit'); // true || false

  //если нет змейки
  if (!isSnake) {
    food_cell.classList.add('food-unit');
  }
}
//создаем препятствие на поле
function createCrashInField() {

  if (crash.length >= countCrashField) {
    var removeCrash = crash.splice(0, 1)[0];
    removeCrash.classList.remove('crash-unit');
    console.log(crash);
  }

  var crash_x = Math.floor(Math.random() * (FIELD_SIZE_X));
  var crash_y = Math.floor(Math.random() * (FIELD_SIZE_Y));

  var crash_cell = document.querySelector("[data-cell='" + crash_x + '-' + crash_y + "']");
  var isSnake = crash_cell.classList.contains('snake-unit'); // true || false
  var isFood = crash_cell.classList.contains('food-unit');

  //если нет змейки и нет еды
  if (!isSnake && !isFood) {
    crash_cell.classList.add('crash-unit');
    crash.push(crash_cell);
  }
}

// проверяем встречу с препятствием, возвращает true если змейка не встретила препятствий
function haveCrash(unit) {
  var check = false;
  var isSnakeCrash = unit.classList.contains('crash-unit'); //true || false

  // змейка не встретила препятствие
  if (!isSnakeCrash) {
    check = true;
  }
  return check;
}

function changeDirection(e) {
  switch (e.keyCode) {
    case 37: // нажата клавиша влево
      if (direction != "y+") {
        direction = "y-";
      }
      break;
    case 38: // нажата клавиша вверх
      if (direction != "x+")
        direction = "x-";
      break;
    case 39: // нажата клавиша вправо
      if (direction != "y-")
        direction = "y+";
      break;
    case 40: // нажата клавиша вниз
      if (direction != "x-")
        direction = "x+";
      break;
  }
}

// новая игра
function refreshGame() {
  location.reload();
}


window.onload = init;