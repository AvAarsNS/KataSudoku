function doesRowContainAllNumbers1To9(row) {
  const etalon = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return etalon.every((number) => row.includes(number));
}

function doesListContain9Entries(list) {
  return list.length === 9;
}

function isGrid9x9(grid) {
  const has9Rows = doesListContain9Entries(grid);
  const everyRowHas9Entries = grid.every((row) => doesListContain9Entries(row));

  return has9Rows && everyRowHas9Entries;
}

function doesEveryRowContainAllNumbers1To9(grid) {
  return grid.every((row) => doesRowContainAllNumbers1To9(row));
}

module.exports = {
  doesRowContainAllNumbers1To9,
  doesListContain9Entries,
  isGrid9x9,
  doesEveryRowContainAllNumbers1To9,
};
