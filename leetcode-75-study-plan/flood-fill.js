// An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.
// You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].
// To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel,
// plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

// Return the modified image after performing the flood fill.

// Example 1:
//     Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
//     Output: [[2,2,2],[2,2,0],[2,0,1]]
//     Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel
//     (i.e., the blue pixels) are colored with the new color.
//     Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.

// Example 2:
//     Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
//     Output: [[0,0,0],[0,0,0]]
//     Explanation: The starting pixel is already colored 0, so no changes are made to the image.

// Constraints:
//     m == image.length
//     n == image[i].length
//     1 <= m, n <= 50
//     0 <= image[i][j], color < 216
//     0 <= sr < m
//     0 <= sc < n

var floodFill = function(image, sr, sc, color) {
    // essentially a traversal of a graph represented as a matrix - BFS/DFS direction doesn't matter, so DFS with stack is most efficient
    // each row/col position represents a pixel and the value at that point represents a color
    // neighbors are valid in 4 directions - up, down, left, right (no diagonals)
    // neighbors are also only valid if they share the same starting color as our original position

    // get the color of the starting position and keep a record of it for use in finding neighbors
    let startColor = image[sr][sc];

    // make a stack (array with push/pop) and put start in it - stack will hold pairs that look like [row, col]
    // make a set to track visited locations so we don't loop
    // put starting location in stack and visited
    let stack = [[sr, sc]];
    let visited = new Set();
    visited.add(`row${sr}-col${sc}`);

    // while stack is not empty
    while(stack.length > 0){
        // pop the top pair off the stack
        let [row, col] = stack.pop();

        // set its position to our new color
        image[row][col] = color;

        // make a string representation of the current location and put it in visited
        let key = `row${row}-col${col}`;
        visited.add(key);

        // call the getNeighbors helper to get valid neighbors will be a 2D array of pairs that look like [row, col]
        let neighbors = getNeighbors(image, row, col);

        // for each neighbor that comes back - if we have not already visited it & if it has the starting color, put it in the stack
        neighbors.forEach(neighbor => {
            let [r, c] = neighbor;
            let key = `row${r}-col${c}`;
            if(!visited.has(key) && image[r][c] === startColor) stack.push(neighbor);
        });
    }

    // return the mutated image
    return image;
};

// helper function to get valid neighbors
// inputs - the image's and row & col of current position
// returns - a 2D array of [row,col] pairs of valid neighbors
function getNeighbors(image, row, col){
    // make an array to hold valid pairs
    let neighbors = [];

    // check up - row can't be less than 0
    if(row - 1 >= 0) neighbors.push([row-1, col]);

    // check right - col can't be greater than image[0].length
    if(col + 1 < image[0].length) neighbors.push([row, col+1]);

    // check down - row can't be greather than image.length
    if(row + 1 < image.length) neighbors.push([row+1, col]);

    // check left - col can't be less than 0
    if(col - 1 >= 0) neighbors.push([row, col-1]);

    return neighbors;
}
