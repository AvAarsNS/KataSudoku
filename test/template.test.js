const { doesRowContainAllNumbers1To9 } = require("../src/template");

describe("This is a test suite for the sudoku checker, which checks if your soduku solution is correct.", () => {
  describe("We want to check if a row contains all numbers 1-9", () => {
    it("[5,3,4,6,7,8,9,1,2] contains all numbers", () => {
      expect(doesRowContainAllNumbers1To9([5, 3, 4, 6, 7, 8, 9, 1, 2])).toEqual(
        true
      );
    });
    it("[5,3,4,6,3,8,9,1,2] contains all numbers", () => {
      expect(doesRowContainAllNumbers1To9([5, 3, 4, 6, 3, 8, 9, 1, 3])).toEqual(
        false
      );
    });
  });
});
