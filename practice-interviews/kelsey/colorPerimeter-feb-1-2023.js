/**
 * @param {array} board a matrix (2D array) with strings indicating the color at each position on the board (non-empty, rectangular w/no holes)
 * @param {array} start array in the form of [row, col] indicating a starting point in the matrix (destructured in implementation)
 * @returns {number} the count of connected squares of the same color (including start)
 */
function colorPerimeter(board, [row, col]){
    // get the target color at start location & set up a counter
    const targetColor = board[row][col];
    let count = 0;

    // put the starting point in stack & visited set
    const stack = [[row, col]];
    let visitedString = `${row}-${col}`;
    const visited = new Set();
    visited.add(visitedString);

    // DFS with stack for efficiency - for each square, if matching color increase count & add non-visited neighbors
    while(stack.length > 0){
        const [currRow, currCol] = stack.pop();
        const currColor = board[currRow][currCol];

        if(currColor === targetColor){
            count++;

            const neighbors = getNeighbors(board, [currRow, currCol]);

            neighbors.forEach(([row, col]) => {
                visitedString = `${row}-${col}`;
                if(!visited.has(visitedString)){
                    visited.add(visitedString);
                    stack.push([row, col]);
                }
            });
        }
    }

    return count;
}

/**
 * @param {array} board a matrix (2D array) with strings indicating the color at each position on the board (non-empty, rectangular w/no holes)
 * @param {array} current array in the form of [row, col] indicating current point in the matrix (destructured in implementation)
 * @returns {array} returns an array of [row, col] pairs that are neighbors of current
 * NOTE: board allows wrapping, so if on an edge, the opposite edge counts as a valid neighbor
 */
function getNeighbors(board, [row, col]){
    const left = (col - 1 >= 0) ? col - 1 : board[row].length - 1;
    const right = (col + 1 < board[row].length) ? col + 1 : 0;
    const up = (row - 1 >= 0) ? row - 1 : board.length - 1;
    const down = (row + 1 < board.length) ? row + 1 : 0;

    return [
        [row, left],
        [up, col],
        [row, right],
        [down, col]
    ];
}

// Test Cases:
let board1 = [
    ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
    ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
    ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
    ['white', 'white', 'white', 'black', 'black', 'white', 'white', 'white'],
    ['white', 'white', 'white', 'black', 'black', 'white', 'white', 'white'],
    ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
    ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
    ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white']
];

let board2 = [
    ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
    ['white', 'black', 'black', 'black', 'black', 'black', 'black', 'white'],
    ['white', 'black', 'orange', 'white', 'white', 'orange', 'black', 'white'],
    ['white', 'black', 'orange', 'white', 'white', 'orange', 'black', 'white'],
    ['white', 'black', 'orange', 'white', 'white', 'orange', 'black', 'white'],
    ['white', 'black', 'orange', 'white', 'white', 'orange', 'black', 'white'],
    ['white', 'black', 'black', 'black', 'black', 'black', 'black', 'white'],
    ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white']
];

let board3 = [
    ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
    ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
    ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
    ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
    ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
    ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
    ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
    ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
];

let board4 = [
    ['orange', 'orange', 'white', 'black', 'black', 'white', 'orange', 'orange'],
    ['white', 'white', 'white', 'black', 'black', 'white', 'white', 'white'],
    ['white', 'white', 'white', 'black', 'black', 'white', 'white', 'white'],
    ['black', 'black', 'black', 'black', 'black', 'black', 'black', 'black'],
    ['black', 'black', 'black', 'black', 'black', 'black', 'black', 'black'],
    ['white', 'white', 'white', 'black', 'black', 'white', 'white', 'white'],
    ['white', 'white', 'white', 'black', 'black', 'white', 'white', 'white'],
    ['orange', 'orange', 'white', 'black', 'black', 'white', 'orange', 'orange'],
];

console.log('example 1: ', colorPerimeter(board1, [2, 2])); //60
console.log('example 2: ',colorPerimeter(board1, [3, 3])); //4

console.log('example 3: ',colorPerimeter(board2, [4, 2])); //4
console.log('example 4: ',colorPerimeter(board2, [1, 1])); //20

console.log('example 5: ',colorPerimeter(board3, [1, 3])); //64

console.log('example 6: ',colorPerimeter(board4, [0, 6])); //8

/**
 * Space & Time Estimates
 *
 * TIME OVERALL: O(n)
 * getNeighbors - O(1) - getting array length & math calculations
 * iterating through neighbors - O(1) - constant because amount of neighbors is bounded, there will always be 4
 * while loop - O(n) - where n is total # of squares in board (rows x cols). Worst case all board same color and need to push/pop all squares into stack
 *
 * SPACE OVERALL: O(n)
 * stack - O(n) - where n is total # of squares in board (rows x cols). Worst case all board same color and need to push/pop all squares into stack
 * additional variables in both functions - O(1) - storing extra information, but amount of information stored not dependent on number of entries
 */
