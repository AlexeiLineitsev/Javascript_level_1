"Use Strict"

//console.log('Привет');

/*Типы данных
* 1. Строка    -- var name = 'Ivan';
* 2. Число     -- var age = 27;
* 3. Булевый   -- var isValid = tru;
*
* Пример isValid, isAge
* CamelCase — стиль написания составных слов, при котором несколько слов пишутся слитно
* без пробелов, при этом каждое слово внутри фразы пишется с прописной буквы.
* Стиль получил название CamelCase, поскольку прописные буквы внутри слова напоминают
* горбы верблюда.
*
* 4. undefined -- var price;
* 5. null      -- var pass = null;
* 6. object    -- var user = {
*                       age:28;
* }
 */



var name = 'Ivan';
var age = 27;
var isValid = true;
var price;
var pass = null;
var user = {
    age:28,
    avatar: 'Ivan_Foto.jpg',
    pass: null
};

console.log(name);
console.log(age);
console.log(isValid);
console.log(price);
console.log(pass);
console.log(user);
console.log(user.age);
console.log(user.avatar);


console.log(typeof user.avatar);
console.log(typeof isValid, isValid);
console.log(typeof pass, pass);
console.log(typeof user.age);



/*Функция parseInt() принимает строку в качестве аргумента и
возвращает целое число в соответствии с указанным основанием
системы счисления.*/
console.log(parseInt('321', 10));

console.log(1/0); //Infinity

alert('Привет'); // ---- выводит на экран окно с сообщением и приостанавливает
// выполнение скрипта, пока пользователь не нажмёт «ОК».

//var age = prompt('Сколько вам лет?'); // Она выводит модальное окно с
// заголовком title, полем для ввода текста, заполненным строкой по умолчанию default и
// кнопками OK/CANCEL.

console.log(age)
console.log(typeof age); // string
prompt('Сколько вам лет?', '27'); // 27 второй аргумент это значение по умолчанию

