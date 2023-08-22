// Get elements from the DOM
const wordInput = document.getElementById("word-input");
const checkButton = document.getElementById("check-button");
const resultElement = document.getElementById("result");

// Add event listener to the checkButton
checkButton.addEventListener("click", checkPalindrome);

// Function to check if a word is a palindrome
function checkPalindrome() {
  const word = wordInput.value.toLowerCase();
  const reversedWord = word.split("").reverse().join("");

  if (word === reversedWord) {
    resultElement.textContent = `${word.toUpperCase()} is a palindrome.`;
  } else {
    resultElement.textContent = `${word.toUpperCase()} is NOT a palindrome.`;
  }
}

function clearInput() {
  wordInput.value = "";
}
