function pipeFix(numbers) {
  let b = [];
  for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
    b.push(i);
  }
  return b;
}
