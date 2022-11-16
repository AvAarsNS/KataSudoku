const {
  doesRowContainAllNumbers1To9,
  doesListContain9Entries,
  doesColumnContain9Numbers,
  isGrid9x9,
  doesEveryRowContainAllNumbers1To9,
  extractColumn,
} = require("../src/template");

describe("This is a test suite for the sudoku checker, which checks if your soduku solution is correct.", () => {
  describe("We want to check if a row contains all numbers 1-9", () => {
    it("[5,3,4,6,7,8,9,1,2] contains all numbers", () => {
      expect(doesRowContainAllNumbers1To9([5, 3, 4, 6, 7, 8, 9, 1, 2])).toEqual(
        true
      );
    });
    it("[5,3,4,6,3,8,9,1,2] does not contain a 2", () => {
      expect(doesRowContainAllNumbers1To9([5, 3, 4, 6, 3, 8, 9, 1, 3])).toEqual(
        false
      );
    });
    it("[5,3,4,6,'A',8,9,1,2] does not contain a 2", () => {
      expect(
        doesRowContainAllNumbers1To9([5, 3, 4, 6, "A", 8, 9, 1, 3])
      ).toEqual(false);
    });
  });
  describe("We would like to check if a list contains 9 entries", () => {
    it("[1,2,3,4,5] does not contain 9 entries", () => {
      expect(doesListContain9Entries([1, 2, 3, 4, 5])).toEqual(false);
    });
    it("[0,1,2,3,4,5,6,7,8] contains 9 entries", () => {
      expect(doesListContain9Entries([0, 1, 2, 3, 4, 5, 6, 7, 8])).toEqual(
        true
      );
    });
    it("[0,1,2,3,4,5,6,7,8,9] contains more than 9 entries", () => {
      expect(doesListContain9Entries([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual(
        false
      );
    });
  });

  /*describe('We would like to check if a column contains 9 numbers', () => {
    it('Column does not contain 9 numbers', () => {
      const column = [
        [1],
        [2],
        [3],
      ]
      expect(doesColumnContain9Numbers(column)).toEqual(false);
    });    
  });*/
  describe('We would like to extract a column out of the grid', () => {
    it('Take the first column out of the grid', () => {
      const grid = [
        [5, 3, 4, 6, 7, 8, 9, 1, 2],
        [6, 7, 2, 1, 9, 5, 3, 4, 8],
        [1, 9, 8, 3, 4, 2, 5, 6, 7],
        [8, 5, 9, 7, 6, 1, 4, 2, 3],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 6, 1, 5, 3, 7, 2, 8, 4],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
        [3, 4, 5, 2, 8, 6, 1, 7, 9],
      ];
      expect(extractColumn(grid, 0)).toEqual([5, 6, 1, 8, 4, 7, 9, 2, 3]);
    });

    it('Take the second column out of the grid', () => {
      const grid = [
        [5, 3, 4, 6, 7, 8, 9, 1, 2],
        [6, 7, 2, 1, 9, 5, 3, 4, 8],
        [1, 9, 8, 3, 4, 2, 5, 6, 7],
        [8, 5, 9, 7, 6, 1, 4, 2, 3],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 6, 1, 5, 3, 7, 2, 8, 4],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
        [3, 4, 5, 2, 8, 6, 1, 7, 9],
      ];
      expect(extractColumn(grid, 1)).toEqual([3, 7, 9, 5, 2, 1, 6, 8, 4]);
    });
});

  describe("We would like to check if the input grid is 9x9", () => {
    it("Valid 9x9 grid", () => {
      const grid = [
        [5, 3, 4, 6, 7, 8, 9, 1, 2],
        [6, 7, 2, 1, 9, 5, 3, 4, 8],
        [1, 9, 8, 3, 4, 2, 5, 6, 7],
        [8, 5, 9, 7, 6, 1, 4, 2, 3],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 6, 1, 5, 3, 7, 2, 8, 4],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
        [3, 4, 5, 2, 8, 6, 1, 7, 9],
      ];
      expect(isGrid9x9(grid)).toEqual(true);
    });
    it("Invalid 8x9 grid", () => {
      const grid = [
        [5, 3, 4, 6, 7, 8, 9, 1, 2],
        [6, 7, 2, 1, 9, 5, 3, 4, 8],
        [1, 9, 8, 3, 4, 2, 5, 6, 7],
        [8, 5, 9, 7, 6, 1, 4, 2, 3],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 6, 1, 5, 3, 7, 2, 8, 4],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
      ];
      expect(isGrid9x9(grid)).toEqual(false);
    });
    it("Invalid 9x9 grid with a row with 5 entries", () => {
      const grid = [
        [5, 3, 4, 6, 7, 8, 9, 1, 2],
        [6, 7, 2, 1, 9, 5, 3, 4, 8],
        [1, 9, 8, 3, 4, 2, 5, 6, 7],
        [8, 5, 9, 7, 6, 1, 4, 2, 3],
        [4, 2, 6, 8, 5],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 6, 1, 5, 3, 7, 2, 8, 4],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
        [3, 4, 5, 2, 8, 6, 1, 7, 9],
      ];
      expect(isGrid9x9(grid)).toEqual(false);
    });
    it("Invalid 10x9 grid", () => {
      const grid = [
        [5, 3, 4, 6, 7, 8, 9, 1, 2],
        [6, 7, 2, 1, 9, 5, 3, 4, 8],
        [1, 9, 8, 3, 4, 2, 5, 6, 7],
        [8, 5, 9, 7, 6, 1, 4, 2, 3],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 6, 1, 5, 3, 7, 2, 8, 4],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
        [3, 4, 5, 2, 8, 6, 1, 7, 9],
        [3, 4, 5, 2, 8, 6, 1, 7, 9],
      ];
      expect(isGrid9x9(grid)).toEqual(false);
    });
  });
  describe("Does every row contain all numbers 1-9?", () => {
    it("Valid sudoku", () => {
      const grid = [
        [5, 3, 4, 6, 7, 8, 9, 1, 2],
        [6, 7, 2, 1, 9, 5, 3, 4, 8],
        [1, 9, 8, 3, 4, 2, 5, 6, 7],
        [8, 5, 9, 7, 6, 1, 4, 2, 3],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 6, 1, 5, 3, 7, 2, 8, 4],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
        [3, 4, 5, 2, 8, 6, 1, 7, 9],
      ];
      expect(doesEveryRowContainAllNumbers1To9(grid)).toEqual(true);
    });
    it("Invalid sudoku with a duplicate number", () => {
      const grid = [
        [5, 3, 4, 6, 7, 8, 9, 1, 2],
        [6, 7, 2, 1, 9, 5, 3, 4, 8],
        [1, 9, 8, 3, 4, 5, 5, 6, 7],
        [8, 5, 9, 7, 6, 1, 4, 2, 3],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 6, 1, 5, 3, 7, 2, 8, 4],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
        [3, 4, 5, 2, 8, 6, 1, 7, 9],
      ];
      expect(doesEveryRowContainAllNumbers1To9(grid)).toEqual(false);
    });
  });
});
