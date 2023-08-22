var humanYearsCatYearsDogYears = function (humanYears) {
  if (humanYears == 1) {
    return [1, 15, 15];
  }
  if (humanYears == 2) {
    return [2, 24, 24];
  } else {
    let delta = humanYears - 2;
    return [humanYears, 24 + delta * 4, 24 + delta * 5];
  }
  // Your code here!
};
