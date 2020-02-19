"use strict";
// {}
// user.city
// user['Мой родной город']  Добавление данных в обьект
// delete user.city
// user.city = null; // Приравниваем свойство city null, пуст

// var user = {
//     name:'Ivan',
//     age: 28,
//     hello: function () {
//         console.log('Hello ' + this.name);}
//     //}
//     // tags: {
//     //     html: 'html',
//     //     css: 'css',
//     //     js: 'js'
//     // }
// };
//
// user.city = 'Москва'; // Добавление данных в обьект


// for (var key in user) {
//     console.log(key, user[key]);
// }


// if ('name' in user) {
//     console.log();
// }
//
//
// for (var key in user) {
//     console.log(key, user[key]);
// }

// console.log(user.city === undefined);

//-----------МЕТОДЫ, это фунцкии которые записаны в свойстве обьекта----------------------------------------------------

// user.hello = function () {   //Можно добавить в теле программы, а можно прямо при обьявлении
//     console.log('Hello!');
// }

//---------------------------------------------------Вложенные обьекты--------------------------------------------------


// user.tags = {             Опять же, можно добавить в теле программы
//     html: 'html',
//     css: 'css',
//     js: 'js'
// };

// console.log(user.tags.css);
// user.hello();

//---------------------------------------Одна функция для разных обьектов-------------------------------

// var user = {
//     name:'Роман'
// };

// var admin = {
//     name:'Админ'
// };
//
// function hello() {
//     console.log('Hello ' + this.name);
// }
//
// user.hello = hello;     // Переопределение функции для обьекта user
// admin.hello = hello;    // Переопределение функции для обьекта admin
//
// admin['hello']();
// user.hello();

//---------------------------------------------------------------------------------------------------------------------

// var user = {
//     name:'Роман'
// };
//
// var admin = user;
// admin.name = 'Админ';
//
// console.log(user.name);

//---------------------------------------------------------------------------------------------------------------------


// function func() {
//     console.log(this);
//
// }
//
// func();

//------------------------------------------__proto__------------------------------------------------------------------
//Соединение двух объектов, они наследуют
// var animal = {
//     eats: true
// };
//
// var rabbit = {
//     jumps: true,
//    // eats: false
// };
//
// rabbit.__proto__ = animal;

// console.log(rabbit.jumps, animal.eats);
// console.log(rabbit.eats);
// console.log(rabbit);

// for (var key in rabbit) {
//     console.log(key);
// }

// ----------------hasOwnProperty - проверка для данного метода, содержится ли свойство в обьекте

// console.log(animal.hasOwnProperty('eats'));
// console.log(rabbit.hasOwnProperty('eats'));


// for (var key in rabbit) {
//     //console.log(key);
//     if (rabbit.hasOwnProperty(key)) {
//         console.log(key, rabbit[key]);
//     }
// }

//--------------------------------Создание обьекта с помощью конструктора-----------------------------------------------

//var user = new Object();
//var user = {};

// console.log(user);
// console.log(user.toString());

// var user = Object.create(null);
// user.name = 'Иван';
//
// console.log(user.name, user.toString);

















