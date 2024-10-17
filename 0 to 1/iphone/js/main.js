const btn = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu-nav");

btn.addEventListener("click", () => {
  nav.classList.toggle("menu-open");
});
