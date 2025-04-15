const btns = document.querySelectorAll("button"),
  overlay = document.querySelector(".overlay");

// btn.onclick = function () {
//   alert("Hello");
// };
// btn.onclick = function () {
//   alert("second click");
// };

let i = 0;
const deleteElement = (e) => {
  console.log(e.currentTarget);
  console.log(e.type);
  //   i++;
  //   if (i == 3) {
  //     btn.removeEventListener("click", deleteElement);
};

// btn.addEventListener("mouseenter", (e) => {
//   console.log(e);
//   alert("Hello world");
//   e.target.remove();
// // });
// btn.addEventListener("click", deleteElement);
// overlay.addEventListener("click", deleteElement);

btns.forEach((btn) => {
  btn.addEventListener("click", deleteElement, { once: true });
});

const link = document.querySelector("a");

link.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(event.target);
});
