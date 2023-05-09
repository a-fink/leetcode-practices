// You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.
// Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).
// The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

// Example 1:
//     Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
//     Output: 16
//     Explanation: The perimeter is the 16 yellow stripes in the image above.

// Example 2:
//     Input: grid = [[1]]
//     Output: 4

// Example 3:
//     Input: grid = [[1,0]]
//     Output: 4

// Constraints:
//     row == grid.length
//     col == grid[i].length
//     1 <= row, col <= 100
//     grid[i][j] is 0 or 1.
//     There is exactly one island in grid.


// did this as a grid problem
// since no start known though would have been more performant to just go through whole 2d array instead
var islandPerimeter = function(grid) {
    // go through the array until you find a 1, it will be the starting point
    let start;
    for(let row = 0; row < grid.length; row++){
        if(start !== undefined) break;
        for(let col = 0; col < grid[row].length; col++){
            if(start === undefined && grid[row][col] === 1){
                start = [row, col];
            }
        }
    }

    // put starting point in stack and visited
    let perimeter = 0;
    let stack = [start];
    let visited = new Set();
    visited.add(`${start[0]}-${start[1]}`);

    // while stack not empty pop and get valid =1 neighbors
    while(stack.length > 0){
        const curr = stack.pop();

        const neighbors = getNeighbors(curr, grid);

        // add 4-#neighbors to perimiter
        perimeter += (4-neighbors.length);

        // add each neighbour we haven't already seen to the stack and to visited
        neighbors.forEach(neighbor => {
            let positionString = `${neighbor[0]}-${neighbor[1]}`;
            if(!visited.has(positionString)){
                stack.push(neighbor);
                visited.add(positionString);
            }
        });

    }

    return perimeter;
};

// get neighbours - take grid and point - return array of adjacent points with a 1
function getNeighbors(point, grid){
    let [row, col] = point;
    let maxRow = grid.length;
    let maxCol = grid[0].length;
    let neighbors = [];

    // right, down, left, up
    if(col + 1 < maxCol && grid[row][col+1]) neighbors.push([row, col+1]);
    if(row + 1 < maxRow && grid[row+1][col]) neighbors.push([row+1, col]);
    if(col - 1 >= 0 && grid[row][col-1]) neighbors.push([row, col-1]);
    if(row - 1 >= 0 && grid[row-1][col]) neighbors.push([row-1, col]);

    return neighbors;
}
