"use strict";

// let str = "some";
// let str_obj = new String(str);

// console.log(typeof(str));
// console.log(typeof(str_obj));

console.dir([1, 2, 3]);

const soldier = {
  health: 400,
  armor: 100,
  sayHollo: function () {
    console.log("Hello");
  },
};

const jonh = Object.create(soldier);

// const jonh = {
//     health: 100
// }

// jonh.__proto__ = soldier;

Object.setPrototypeOf(jonh, soldier);

console.log(jonh.armor);

jonh.sayHollo();
