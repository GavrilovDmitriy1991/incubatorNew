function flickSwitch(arr) {
  let a = [];
  let result = true;
  for (let i = 0; i < arr.lenght; i++) {
    if (arr[i] !== "flick") {
      a.push(result);
    } else {
      result = false;
      a.push(result);
    }
  }
  return a;
}
function flickSwitch(arr) {
  return [];
}
