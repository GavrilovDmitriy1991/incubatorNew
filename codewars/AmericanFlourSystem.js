function getRealFloor(n) {
  if (n >= 13) {
    return n - 2;
  } else if (n < 0) {
    return n;
  } else if (n === 0) {
    return 0;
  } else {
    return n - 1;
  }
}
