function fakeBin(x) {
  let a = [];
  for (let i = 0; i < x.length; i++) {
    if (x[i] < 5) {
      a.push(0);
    } else {
      a.push(1);
    }
  }
  return a.join("");
}

console.log(fakeBin(2397901438));
