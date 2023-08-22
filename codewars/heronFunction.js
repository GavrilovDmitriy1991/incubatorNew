function heron(a, b, c) {
  let s = (a + b + c) / 2;
  let i = s * (s - a) * (s - b) * (s - c);
  let result = Math.sqrt(i);
  return result;
}
