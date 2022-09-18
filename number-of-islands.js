var numIslands = function(grid) {

    // make a set to hold visited nodes with ones in them, and a counter
    // will put stringified version of coordinates in set so equality can be checked
    let visited = new Set();
    let count = 0;

    // go through all indicies in the grid
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){

            // when a 1 is found, if the coordinates not already in set, put in set & start a depth first traversal
            if(grid[i][j] === "1" && !(visited.has("row" + i + "col" + j))){
                // a new island has been found, increase count
                count ++;

                // put node in visited set
                visited.add("row" + i + "col" + j);

                // make a queue (array with push/shift) for the traversal & put first node in it
                let q = [[i, j]];

                // while q not empty
                while(q.length > 0){
                    // get first node in queue and its neighbors
                    let current = q.shift();
                    let neighbors = getNeighbors(current[0], current[1], grid);

                    neighbors.forEach(neighbor => {
                       // if neighbour has not been visited put it in the queue and into visited
                       if(!visited.has("row" + neighbor[0] + "col" + neighbor[1])){
                           q.push(neighbor);
                           visited.add("row" + neighbor[0] + "col" + neighbor[1]);
                       }
                    });

                }

            }
        }
    }

    return count;
};


function getNeighbors(row, col, grid){
    // row valid if between 0->grid.length and col valid if between 0->grid[row].length
    // if neighbor has a 1 in it put coordinates into neighbours array

    let neighbors = [];

    //check up
    if(row - 1 >= 0){
        if(grid[row-1][col] === "1") neighbors.push([row-1, col]);
    }

    // check right
    if(col + 1 < grid[0].length){
        if(grid[row][col+1] === "1") neighbors.push([row, col+1]);
    }

    // check down
    if(row + 1 < grid.length){
        if(grid[row+1][col] === "1") neighbors.push([row+1, col]);
    }

    // check left
    if(col - 1 >= 0){
        if(grid[row][col-1] === "1") neighbors.push([row, col-1]);
    }

    // return valid neighbors
    return neighbors;
}
