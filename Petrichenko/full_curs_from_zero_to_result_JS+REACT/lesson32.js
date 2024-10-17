"use strict";

const arr = [1, 2, 3, 6, 8]; //create area

// arr.pop();

console.log(arr);

arr.push(10); //add new item

console.log(arr);

//перебор всех элементов массива и вывод в консоль
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//пеербор циклом for of
for (let value of arr) {
  console.log(value);
}

//забавная ошибка в обращении с массивами
// arr[99] = 0;
console.log(arr.length);
console.log(arr);

arr.forEach(function (item, i, arr) {
  console.log(`${i}: ${item} внутри массива ${arr}`);
});

// const str = prompt(", ");
// const products = str.split(", ");
// products.sort();
// console.log(products.join(";"));
arr.sort(compareNum);

function compareNum(a, b) {
  return a - b;
}

console.log(arr);
