"use strict";
//переменная может быть вызвана в любом месте. not-final
let first = "first";
console.log(first);
//ES6. Переменную можно исползовать после объявления. not-final 
let second = "second";
console.log(second);
// Также такая переменная может быть видна внутри блока {}
{
    let block = "block";
    console.log(block);
}
//ES6. Переменная константа. нельзя final. Область видимости как у let
const constant = "constant";
console.log(constant);
//string
let string = "string";
console.log(string);
//number (int, double, float, long)
let num = 1;
console.log(num);
/*
	NaN - не число
	infinity -бесконечность,  деление на 0 
*/
//boolean
let bool = true;
console.log(bool);
//то, чего не существует
console.log(null);
//тип не известен без инициализации	
let something;
console.log(something);
//object (больше похоже на map )
let obj = {
    name: "John",
    age: 23
};
console.log(obj);
//получаем значение по ключу
//можно писать еще obj["name"], но не рекомендуется так писать
console.log(obj.name);
//массив
let arr = ["Marry", "John", "Jessy"];
console.log(arr);
//получить по индексу
console.log(arr[0]);
//модальное окно true/false
// let conf = confirm("Are you okay?");
// console.log(conf);
//Получаем string от пользователя 
// let prom = prompt("Where are you from ?");
// console.log(prom);
//получаем тип переменной
// console.log(typeof(prom));
//также мы можем объявлять переменные чрез запятую
let firstNum = 1,
    secondNum = 10;
console.log(firstNum, secondNum);
//if else 
let number = 50;
if (number == 50) {
    console.log(50);
} else {
    console.log("not 50");
}
//тернатрный оператор (перезаписывать в одном месте переменную нельзя до инициализации, если она объявлена через let, только var)
var result = (number == 50) ? result = "yes" : result = "no";
console.log(result);
//pattern matching
switch (number) {
    case 50:
        console.log(true);
        break;
    case 49:
        console.log(false);
        break;
    default:
        console.log("Что то не так ?");
        break;
}
let incr = 1;
//цикл через while 
while (incr < 10) {
    incr++;
}
console.log(incr);
//классический цикл for
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
}
//функция
function show(text) {
    console.log(text);
}
show("text");
//функция с возратом
function culc(a, b) {
    return (a + b);
}
culc(10, 11);
//функцию вносим в переменную
let numFunc = function() {
    return 5;
};
console.log(numFunc());
//функция через стрелку
let numFuncArrow = () => {
    return 5 + 1;
};
console.log(numFuncArrow);
/*
БАЗОВЫЕ ФУНКЦИИ
*/
let t = "Text";
//длина строки
console.log(t.length);
//Привести к нижнему регистру
console.log(t.toLowerCase());
//верхний регистр
console.log(t.toUpperCase());
//округлить
let roundNum = 22.21323;
console.log(Math.round(roundNum));
//привести к Int/Float
let strNum = "231.2321";
console.log(parseInt(strNum));
console.log(parseFloat(strNum));
/*
	callback функции
	Это функции, которые должны выполниться после выполнения определенной функции
*/
function callback(text, call) {
    call();
    console.log(text);
}
callback("first function", function() {
    console.log("second function");
});
//добавить ключ значение в объект
let testObj = {
    name: "john"
};
testObj.age = 22;
console.log(testObj);
//добавить в качестве ключа значение переменной
let keyIsvalue = "isMarried";
testObj[keyIsvalue] = true;
console.log(testObj);
//удалить ключ-значение
delete testObj.name;
console.log(testObj);
console.log(testObj.age);
//получить ключи и их значения
for (let key in testObj) {
    console.log(key);
    console.log(testObj[key]);
}
//количество ключей у объекта
console.log(Object.keys(testObj).length);
/*
 	массивы
 	нестроготипизрованные
*/
let mass = [1, 2, 3, 4];
//удалить  последний элемент массива
mass.pop();
console.log(mass);
//добавить в массив
mass.push(33);
console.log(mass);
//удалить 1 элемент
mass.shift();
console.log(mass);
//добавить в начало
mass.unshift(0);
console.log(mass);
//если мы создаем элемент превышающий его длину, то образуется пустые элементы
mass[99] = "jojn";
console.log(mass);
//пребор индексов и самих элементов
for (let k in mass) {
    console.log(k);
    console.log(mass[k]);
}
//либо более простой вариант для получения значений тольуо 
for (let k of mass) {
    console.log(k);
}
//либо через forEach, где Item - элемент, i - номер элемента, arr - самм массив, который используем 
mass.forEach(function(item, i, arr) {
    console.log(i + " : " + item + " from " + arr);
});
//split он и в Африке split
let strForSplit = "hello what are you doung ?";
let massStr = strForSplit.split(" ");
for (let ke of massStr) {
    console.log(ke);
}
//соединить массив в строку
let newStr = massStr.join(" ");
console.log(newStr);
//сортировка
massStr.sort();
console.log(massStr);
//сортировка чисел с кастомным компоратором
let massnumForCompare = [2, 1, 8, 4, 10];
massnumForCompare.sort(comporator);
console.log(massnumForCompare);

function comporator(a, b) {
    return a - b;
}
//либо через стрелку
massnumForCompare = [2, 1, 8, 4, 10];
console.log(massnumForCompare);
massnumForCompare.sort((a, b) => a - b);
console.log(massnumForCompare);
//ООП - через жопу
//Конструтор
function User(name, age){
	this.name = name;
	this.age = age;
}
//методы объекта
User.prototype = {
	sleep: () => {
		console.log("sleep "+User.name);
	}
};
var john = new User("John", 15);
console.log(john.age);
//проверка на NaN
isNaN(john);
//способы конвертации одного типа данных в другой
//привращаем строку в число 
var textNumber = "15";
console.log(typeof(Number(textNumber)));
console.log(typeof(+textNumber));
console.log(typeof(parseInt(textNumber)));
//привести к Boolean (!=0 - true, = 0/null - false)
console.log(!!+textNumber);
console.log(Boolean(+textNumber));