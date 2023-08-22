const sumMul = (n, m) => {
  let sum = 0;
  for (let i = n; i < m; i = i + n) {
    sum = sum + i;
  }
  return sum;
};
