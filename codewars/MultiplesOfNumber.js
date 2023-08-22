function findMultiples(integer, limit) {
  let arr = [];
  let i = integer;
  while (i <= limit) {
    arr.push(i);
    i += integer;
  }
  return arr;

  //your code here
}
