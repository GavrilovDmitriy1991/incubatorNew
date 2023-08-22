const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", palindrome);

function palindrome() {
  let word = document.querySelector(".input-text").value;
  word = word.toLowerCase();
  let len = word.length;
  let last = len;

  for (let i = 0; i < len; i++) {
    if (word[i] !== word[last - 1]) {
      return (result.innerHTML = `${word.toUpperCase()} is NOT a palindrome`);
    } else {
      last--;
    }
  }
  result.innerHTML = `${word.toUpperCase()} is a palindrome`;
}

// const btn = document.querySelector(".btn");
// const result = document.querySelector(".result");

// btn.addEventListener("click", palindrome);

// function palindrome() {
//   let word = document.querySelector(".input-text").value;
//   word = word.toLowerCase();
//   let len = word.length;
//   let last = len;

//   for (let i = 0; i < len; i++) {
//     if (word[i] !== word[last - 1]) {
//       return (result.innerHTML = `${word.toUpperCase()} is NOT a palindrome`);
//     } else {
//       last--;
//     }
//   }

//   result.innerHTML = `${word.toUpperCase()} is a palindrome`;
// }
