"use strict";
//переменная может быть вызвана в любом месте. not-final
var first = "first";
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
var string = "string";
console.log(string);
//number (int, double, float, long)
var num = 1;
console.log(num);
//boolean
var bool = true;
console.log(bool);
//то, чего не существует
console.log(null);
//тип не известен без инициализации	
var something;
console.log(something);
//object (больше похоже на map )
var obj = {
    name: "John",
    age: 23
};
console.log(obj);
//получаем значение по ключу
//можно писать еще obj["name"], но не рекомендуется так писать
console.log(obj.name);
//массив
var arr = ["Marry", "John", "Jessy"];
console.log(arr);
//получить по индексу
console.log(arr[0]);
//модальное окно true/false
var conf = confirm("Are you okay?");
console.log(conf);
//Получаем string от пользователя 
var prom = prompt("Where are you from ?");
console.log(prom);
//получаем тип переменной
console.log(typeof(prom));
//также мы можем объявлять переменные чрез запятую
var firstNum = 1,
	secondNum = 10;
console.log(firstNum, secondNum);
/*
	NaN - не число
	infinity -бесконечность,  деление на 0 
*/