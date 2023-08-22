function noBoringZeros(n) {
  if (n == 0) {
    return 0;
  } else {
    let str = String(n);
    for (let i = 0; i < str.length; i++) {
      if (n % 10 !== 0) {
        return n;
      } else {
        n = n / 10;
      }
    }
  }
}
