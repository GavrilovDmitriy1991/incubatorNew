function betterThanAverage(classPoints, yourPoints) {
  let sum = 0;
  for (let i = 0; i < classPoints.length - 1; i++) {
    sum = sum + classPoints[i];
  }
  let aver = sum / classPoints.length;
  if (yourPoints >= aver) {
    return true;
  } else {
    return false;
  }
  // Your code here
}
