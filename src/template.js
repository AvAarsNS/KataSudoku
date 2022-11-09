function doesRowContainAllNumbers1To9(row) {
  const etalon = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let number of etalon) {
    if(!row.includes(number)) {
      return false;
    }
  }
  return true;
}

module.exports = {
  doesRowContainAllNumbers1To9,
};
