function isPalindrome(x) {
  let norma = x.toLowerCase();
  let reverse = "";
  for (let i = norma.length - 1; i >= 0; i--) {
    reverse = reverse + norma[i];
  }
  if (norma === reverse) {
    return true;
  } else {
    return false;
  }
  // your code here
}
