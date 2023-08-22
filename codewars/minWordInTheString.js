function findShort(s) {
  let min = 10;
  let mas = s.split(" ");
  for (let i = 0; i < mas.length; i++) {
    if (mas[i].length < min) {
      min = mas[i].length;
    }
  }
  return min;
}
