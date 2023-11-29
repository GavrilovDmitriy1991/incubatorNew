function firstFunction(a, b) {
  console.log(a + b);
}

let secondFunction = firstFunction;

firstFunction(5, 6);
secondFunction(3, 4);
