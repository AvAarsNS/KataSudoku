const { doesRowContainAllNumbers1To9, doesRowContain9Numbers } = require("../src/template");

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
  describe('We would like to check if a row contains 9 numbers', () => {
    it('[1,2,3,4,5] does not contain 9 numbers', () => {
      expect(doesRowContain9Numbers([1, 2, 3, 4, 5])).toEqual(
        false
      )
    });
    it('[0,1,2,3,4,5,6,7,8] contains 9 numbers', () => {
      expect(doesRowContain9Numbers([0, 1, 2, 3, 4, 5, 6, 7, 8])).toEqual(
        true
      )
    });
  });
});

