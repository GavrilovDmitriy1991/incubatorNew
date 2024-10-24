"use strict";

const box = document.getElementById("box"),
  btns = document.getElementsByTagName("button"),
  circles = document.getElementsByClassName("circle"),
  wrapper = document.querySelector(".wrapper"),
  hearts = wrapper.querySelectorAll(".heart"),
  oneHeart = wrapper.querySelector(".heart");

// console.dir(box);

// box.style.backgroundColor = "blue";
// box.style.width = "500px";

box.style.cssText = "background-color: blue; width: 500px";

btns[1].style.borderRadius = "100%";

circles[0].style.backgroundColor = "red";

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = "blue";
// }

hearts.forEach((item) => {
  item.style.backgroundColor = "blue";
});

const div = document.createElement("div");

// const text = document.createTextNode('Тут был я');

div.classList.add("black");

// document.body.append(div);

wrapper.append(div);

// wrapper.appendChild(div);

// wrapper.insertBefore(div, hearts[2]);

// wrapper.prepend(div);

// hearts[1].before(div);
// hearts[1].after(div);

// circles[0].remove();
// wrapper.removeChild(hearts[1]);

// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = "<h1>hello</h1>";

// div.textContent = "hello world";

div.insertAdjacentHTML("afterend", "<h2>Hello</h2>");
