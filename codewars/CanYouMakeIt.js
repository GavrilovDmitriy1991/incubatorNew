const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  let dist = mpg * fuelLeft;
  if (dist >= distanceToPump) {
    return true;
  } else {
    return false;
  }
  // TODO
};
