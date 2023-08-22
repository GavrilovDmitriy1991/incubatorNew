function invert(array) {
  let inver = [];
  for (let i = 0; i < array.length; i++) {
    inver[i] = -array[i];
  }
  return inver;
}
