function doesListContainAllNumbers1To9(list) {
  const etalon = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return etalon.every((number) => list.includes(number));
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
  return grid.every((row) => doesListContainAllNumbers1To9(row));
}

function extractColumn(grid, columnIndex) {
  return grid.map((row) => row[columnIndex]);
}

function doesEveryColumnContainAllNumbers1To9(grid){
  for (let columnIndex = 0; columnIndex < grid[0].length; columnIndex++) {
    column = extractColumn(grid, columnIndex)
    if (!doesListContainAllNumbers1To9(column)){
      return false  
    }}
    return true
}

module.exports = {
  doesListContainAllNumbers1To9,
  doesListContain9Entries,
  isGrid9x9,
  doesEveryRowContainAllNumbers1To9,
  extractColumn,
  doesEveryColumnContainAllNumbers1To9,
};
