const setAlarm = (employed, vacation) => {
  if (employed === false) {
    return false;
  }
  if (employed === true && vacation === false) {
    return true;
  } else {
    return false;
  }
};
