# Kata Sudoku

Write a function done_or_not/DoneOrNot passing a board (list[list_lines]) as parameter. If the board is valid return 'Finished!', otherwise return 'Try again'

Example input:
[
[5,3,4,6,7,8,9,1,2],
[6,7,2,1,9,5,3,4,8],
[1,9,8,3,4,2,5,6,7],
[8,5,9,7,6,1,4,2,3],
[4,2,6,8,5,3,7,9,1],
[7,1,3,9,2,4,8,5,6],
[9,6,1,5,3,7,2,8,4],
[2,8,7,4,1,9,6,3,5],
[3,4,5,2,8,6,1,7,9]
]

## Atomic behaviours

### Does a row contain all numbers 1-9?

- [5,3,4,6,7,8,9,1,2] -> true
- [5,3,4,6,3,8,9,1,2] -> false

## Guards

- Input is a valid sudoku grid, ie 9 rows with 9 entries each.
- All entries are numbers 1-9
