// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]).
// The robot can only move either down or right at any point in time.
// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.
// The test cases are generated so that the answer will be less than or equal to 2 * 109.

// Example 1:
//     Input: m = 3, n = 7
//     Output: 28

// Example 2:
//     Input: m = 3, n = 2
//     Output: 3
//     Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
//     1. Right -> Down -> Down
//     2. Down -> Down -> Right
//     3. Down -> Right -> Down

// Constraints:
//     1 <= m, n <= 100


// TRYING RECURSIVE APPROACH INSTEAD
// RECURSIVE WITHOUT MEMOIZATION STILL TIMED OUT FOR LARGE TEST CASES, ONCE ADDED HASH IT RAN PRETTY QUICKLY & PASSED
var uniquePaths = function(m, n) {
    // will use a recursive helper function that looks at our current position vs valid and target positions and calculates paths
    // adding a hash to help speed up process
    let hash = new Map();
    // call it and return what it gives us
    return recursivePaths(m, n, 0, 0, hash);
}

// uses end position / length of rows/cols and current position to calculate number of valid unique paths
// inputs - m & n which separately denote array row and column lengths and together give target position of bottom right, and row & col which together give current position
// returns - a count of unique paths to the end
function recursivePaths(m, n, row, col, hash){
    // at each position, the number of unique paths to reach the end is the number of unique paths if I go right from here + the number of unique paths if I go down from here
    // base cases
    // make a string represenation of our inputs - if hash already has a value for this return it
    let key = `${m}-${n}-${row}-${col}`;
    if(hash.has(key)) return hash.get(key);
    // if we are at the end, we found a valid path, we should add 1 to the count so return 1
    if(row === m - 1 && col === n - 1) return 1;
    // if we either row or col has gone out of bounds this is not a valid path return 0
    if(row >= m || col >= n) return 0;

    // recusive cases
    // pre - none
    // recurse - attempt to calculate the path if we go right and the path if we go down
    let right = recursivePaths(m, n, row, col+1, hash);
    let down = recursivePaths(m, n, row+1, col, hash);
    // then add these together and hash the answer with our key we built earlier
    let paths = right + down;
    hash.set(key, paths);
    // post - return the value for key from our hash
    return hash.get(key);
}

// ITERATIVE SOLUTION BELOW WORKS, HOWEVER IT RUNS OUT OF MEMORY FOR LARGE M/N SO NEED TO FIND A BETTER WAY
// var uniquePaths = function(m, n) {
//     // going to do a DFS with a stack(array with push/pop) and a visited set - stack and visited will both track paths
//     // we want to count the number of paths that find finish, and we can revisit nodes, but we don't want to revisit same path (should be unique paths)
//     // make a stack and put the path to the first node in it
//     let stack = [[[0,0]]];
//     // make a visited set and put the string representation of the path to our first node in it
//     let visited = new Set();
//     visited.add('row-0-col-0-');
//     // make a counter to track unique paths we've found
//     let count = 0;
//     // make a variable to hold end point coordinates for ease of comparison later
//     let end = [m-1, n-1];

//     // while stack is not empty
//     while(stack.length > 0){
//         // pop the top path off the stack - should be a 2D array
//         let path = stack.pop();
//         // get (don't pop) the last node from the path - should be a 1D array with a pair of coordinates
//         let curr = path[path.length - 1];

//         // if current node is equal to our endpoint we found a valid path, increase counter & we're done with this path
//         if(curr[0] === end[0] && curr[1] === end[1]){
//             count++;
//         }
//         // otherwise - need to keep adding to this path
//         else{
//             // use get neighbors array of valid neighbors - will be a 2D array, with inner elements that are pairs of coordinates
//             let neighbors = getNeighbors(m, n, curr[0], curr[1]);
//             // for each neighbor
//             neighbors.forEach(neighbor => {
//                 // make a new path that is a copy of current path (slice) and push on neighbor
//                 let newPath = path.concat([neighbor]);
//                 // use array reduce to make a string representation of the path
//                 let newPathString = newPath.reduce((accum, pair) =>
//                     accum + `row-${pair[0]}-col-${pair[1]}-`
//                 , '');
//                 // if path not already in visited set, put path in stack and in visited set
//                 if(!visited.has(newPathString)){
//                     visited.add(newPathString);
//                     stack.push(newPath);
//                 }
//             })
//         }
//     }
//     // at the end we can return our count
//     return count;
// };

// // helper to get valid neighbors
// // inputs - number of rows and columns (m & n) and our current row and column
// // outputs - array of coordinate pairs that are valid neighbors
// function getNeighbors(m, n, row, col){
//     // make array to hold neighbors
//     let neighbors = [];

//     // try to go right - col cannot meet/exceed n
//     if(col + 1 < n) neighbors.push([row, col+1]);

//     // try to go down - row cannot meet/exceed m
//     if(row + 1 < m) neighbors.push([row+1, col]);

//     // return valid neighbors
//     return neighbors;
// }
