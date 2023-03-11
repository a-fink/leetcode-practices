// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

//     Each row must contain the digits 1-9 without repetition.
//     Each column must contain the digits 1-9 without repetition.
//     Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

// Note:

//     A Sudoku board (partially filled) could be valid but is not necessarily solvable.
//     Only the filled cells need to be validated according to the mentioned rules.

// Example 1:
// Input: board =
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true

// Example 2:
// Input: board =
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

// Constraints:

//     board.length == 9
//     board[i].length == 9
//     board[i][j] is a digit 1-9 or '.'.

// naiive approach
// need a get row function, a get col function, and a get 3x3 box function that make an array for each thing
// go over that array and put each non-empty thing in a set, if hit same number already there its false

// better approach
// iterate through whole 2D array, and make a set that holds strings of elem in row #, elem in col #, elem in square #,#
// squares will be [0,0] -> [2,2]
// if string is already in set we fail, otherwise put in set
var isValidSudoku = function(board) {
    const set = new Set();
    for(let row = 0; row < board.length; row++){
        for(let col = 0; col < board[0].length; col++){
            const elem = board[row][col];
            if(elem !== '.'){
                const rowString = `${elem} in row ${row}`;
                const colString = `${elem} in col ${col}`;
                const squareString = `${elem} in square ${Math.floor(row/3)} ${Math.floor(col/3)}`;

                if(set.has(rowString) || set.has(colString) || set.has(squareString)) return false;
                set.add(rowString);
                set.add(colString);
                set.add(squareString);
            }
        }
    }

    return true;
};

// simplification on better approach
// instead of checking for strings in set or not, just put all strings in the set and count how many should be in the set (added 3 string each time)
// at end if count does not match size of set, something was duplicated and we had a collision so know it's invalid
function isValidSudokuBetter(board){
    const set = new Set();
    let count = 0;

    for(let row = 0; row < board.length; row++){
        for(let col = 0; col < board[0].length; col++){
            const elem = board[row][col];
            if(elem !== '.'){
                count += 3;
                set.add(`${elem} in row ${row}`);
                set.add(`${elem} in col ${col}`);
                set.add(`${elem} in square ${Math.floor(row/3)} ${Math.floor(col/3)}`);
            }
        }
    }

    return set.size === count;
}
