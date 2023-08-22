function solution(str) {
  let revers = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revers = revers + str[i];
  }
  return revers;
}
