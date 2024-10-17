"use strict";

if (4 == 4) {
  console.log("ok");
} else {
  console.log("Error");
}

const num = 50;

if (num < 49) {
  console.log("error");
} else if (num > 100) {
  console.log("mnogo");
} else {
  console.log("ok");
}

num === 50 ? console.log("ok") : console.log("Error");

const a = 50;
switch (a) {
  case 49:
    console.log("wrong");
    break;
  case 48:
    console.log("wrong");
    break;
  case 47:
    console.log("wrong");
    break;
  case 50:
    console.log("right");
    break;

  default:
    console.log("next time");
    break;
}
