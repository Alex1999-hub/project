"use strict";

// if (4 == 4) {
//     console.log('Ok');
// } else {
//     console.log('Error!');
// }

// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Many');
// } else {
//     console.log('Ok!');
// }

// (num === 50) ? console.log('Ok!') : console.log('Error');
// ===========================================================

// const num = 50;

// switch (num) {
//     case 49 :
//         console.log('Error');
//         break;
//     case 100 :
//         console.log('Error');
//         break;
//     case 51 : 
//         console.log('Yes!');
//         break;
//     default :
//     console.log('Sorry:(');
//     break;
// }
// =======================================

// Цыклы

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// =========================

// do {
//     console.log(num);
//     num++;
// }

// while(num <= 55);

// =========================

// for (let i = 1; i < 10; i++) {
//     if (i === 6){
//         break;
//     }
//     console.log(i);
// }
// =========================

// Функции

// function showFirstMessage(text) {
//     console.log(text);
// }

// showFirstMessage("Hello World!");

// function calc (a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));

// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {
//     console.log("Hello World!");
// };

// logger();
// ===============================

// Методы и свойства

// const fruit = "Some fruit";
// console.log(fruit.indexOf("Some"));

// const logg = "Hello world";
// // console.log(logg.slice(6, 11));

// console.log(logg.substring(6, 11));

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// // console.log(parseInt(test));

// console.log(parseFloat(test));
// =================================

// Callback functions

// function first() {
//     // Do  something
//     setTimeout(function () {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('Я прошел этот урок');
// }

// learnJS('JavaScript', done);
// ===============================================

// Объекты

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log('Test');
//     }
// };
// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);

// console.log(Object.keys(options).length);

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key] [i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);

//     }
// }
// ======================================================================


// Массивы и псевдомассивы

const arr = [10, 13, 2, 31, 16, 28];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}


// // arr.pop();
// // arr.push(10);

// // console.log(arr);

// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }

// arr.forEach(function(item, i, arr){
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

const str = prompt('', '');
const products = str.split(", ");

console.log(products.sort());

// *
let iterable = new Map([["a", 1], ["b", 2], ["c", 3]]);

for (let entry of iterable) {
    console.log(entry);
}

for (let [key, value] of iterable) {
    console.log(key, value);
}