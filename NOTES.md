# 🍅 1: Jumpstart the kata and guards

# Atomic behaviours

### Does a row contain all numbers 1-9?

- [5,3,4,6,7,8,9,1,2] -> true 😊
- [5,3,4,6,3,8,9,1,2] -> false 😊

## Guards

- Input is a valid sudoku grid, ie 9 rows with 9 entries each.
- All entries are numbers 1-9

# 🍅 2: implement function 

# 🍅 3: New tests

## Does a row contains 9 numbers

- [1,2,3,4,5] -> false 😊
- [0,1,2,3,4,5,6,7,8] -> true 😊
- [0,1,2,3,4,5,6,7,8,9] -> false

## Is a row a valid sudoku row?

- [0,1,2,3,4,5,6,7,8] -> false
- [1,2,3,4,5,6,7,8,9] -> true