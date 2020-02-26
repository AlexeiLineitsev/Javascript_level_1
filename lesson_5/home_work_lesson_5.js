// Урок 5. Введение в DOM
// 1.Создать функцию, генерирующую шахматную доску
//
// можно использовать любые html-теги
// доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки
// строки должны нумероваться числами от 1 до 8
// столбцы латинскими буквами A, B, C, D, E, F, G, H
"use strict";
//
//
var chessBoard = {
    arrFigue: ['Л', 'К', 'C', 'Ф', 'Кор', 'Ф', 'К', 'Л'],
    arrLetters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
    createTable: function (rows, column) {
        let table = document.createElement('table');
        table.className = 'tableGame';
        document.body.prepend(table);

        for (let i = 0; i < column; i++) {
            let tr = table.insertRow(i);

            for (let j = 0; j < rows; j++) {
                let td = tr.insertCell(j);
            }
        }
    },
    brushTable: function () {
        var rows = document.querySelector('.tableGame').rows;

        for (let i = 0; i < rows.length; i++) {
            var cells = document.querySelector('.tableGame').rows[i].querySelectorAll('td');
            for (let j = 0; j < cells.length; j++) {
                if (i % 2 === 0 && j % 2 !== 0) {
                    let cell = cells[j];
                    cell.style.backgroundColor = '#21262d';
                    cell.className = 'white';

                } else if (i % 2 !== 0 && j % 2 === 0) {
                    let cell = cells[j];
                    cell.style.backgroundColor = '#21262d';
                    cell.className = 'white';
                }
            }
        }
    },
    addInfoInTable: function (countRows) {
        document.querySelector('.tableGame').insertRow(0);
        var rows = document.querySelector('.tableGame').rows;

        for (let i = 0; i < countRows; i++) {
            let cell = rows[0].insertCell(i);
            cell.className = 'digits';
            cell.textContent = i + 1;
        }

        for (let i = 0; i < countRows + 1; i++) {
            let row = rows[i].insertCell(0);
            row.className = 'letters';
            if (i !== 0) {
                row.textContent = this.arrLetters[i - 1];
            }
        }
    },
    addInfoInTableFigure: function () {
        let row = document.querySelector('.tableGame').querySelectorAll('tr');
        for (let i = 1; i <= rows; i++) {
            row[rows].cells[i].textContent = this.arrFigue[i - 1];
            row[rows - rows + 1].cells[i].textContent = this.arrFigue[i - 1];
            row[rows - 1].cells[i].textContent = 'П';
            row[rows - rows + 2].cells[i].textContent = 'П';

        }
    },
    addInfoInTableImage: function () {
        let row = document.querySelector('.tableGame').querySelectorAll('tr');
        for (let i = 1; i <= rows; i++) {
            row[rows-1].cells[i].className = 'img_pawn';
            row[rows].cells[i].className = 'img_pawn';

            row[rows - rows + 2].cells[i].className = 'img_pawn';
            row[rows - rows + 1].cells[i].className = 'img_pawn';


        }
    }
};
//
//
var rows = 8;
var cells = 8;


chessBoard.createTable(rows, cells);
chessBoard.brushTable();
chessBoard.addInfoInTable(rows);


// 2. Заполнить созданную таблицу буквами
//
// заполнить созданную таблицу буквами, отвечающими за шахматную фигуру. Например К - король, Ф – ферзь и тп.
//     все фигуры должны стоять на своих местах и быть черными и белыми

chessBoard.addInfoInTableFigure(); // ---------------------------С буквами-----------------------------------------

// 3. * Заменить буквы, обозначающие фигуры картинками.
//
// chessBoard.addInfoInTableImage();  // ---------------------------С фигурами -----------------------------------------
