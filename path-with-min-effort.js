var minimumEffortPath = function(heights) {
    // calculate last row & col for use later
    let lastRow = heights.length - 1;
    let lastCol = heights[lastRow].length - 1;

    // make a 2D array of the same size as heights and fill it with inifinity at every point
    let distances = [];
    for(let i = 0; i < heights.length; i++){
        let row = [];
        for(let j = 0; j < heights[i].length; j++){
            row.push(Infinity);
        }
        distances.push(row);
    }

    // make starting nodes value in distances 0 - distance from node to itself
    distances[0][0] = 0;

    // make a queue for the depth first traversal (array with push/shift) and put starting node in it
    let q = [[0,0]];

    // while queue is not empty
    while(q.length > 0){
        // get 1st node in queue
        let current = q.shift();

        // get height of current from heights
        let currentHeight = heights[current[0]][current[1]];

        // get distance of current from distances
        let currentDistance = distances[current[0]][current[1]];

        // get neighbors of current with helper function
        let neighbors = getNeighbors(current, heights);

        // for all neighbors
        neighbors.forEach(neighbor => {
            // for all neighbors calculate the effort from current to neighbor
            // neighbor distance = max of currents distance, or neighbor height - current height
            let neighborHeight = heights[neighbor[0]][neighbor[1]];
            let neighborDistance = Math.max(currentDistance, Math.abs(neighborHeight - currentHeight));

            // once calculated, if neighbors distance from current is < neighbor's currently stored value in distances
                // we have found a better path to neighbor
            // update ditances array for neighbor, and add neighbor to the queue because we found a better way to get there
            if(neighborDistance < distances[neighbor[0]][neighbor[1]]){
                distances[neighbor[0]][neighbor[1]] = neighborDistance;
                q.push(neighbor);
            }
        });
    }

    // at the end once the queue is empty return the ditances value for the target node (bottom right)
    return distances[lastRow][lastCol];
};

// helper function to get up down left & right neighbors at a node
function getNeighbors(node, heights){
    // rows are valid from 0->heights.length, columns are valid from 0->heights[row].length

    let row = node[0];
    let col = node[1];
    let neighbors = [];

    // check up
    if(row - 1 >= 0) neighbors.push([row-1, col]);

    // check right
    if(col + 1 < heights[row].length) neighbors.push([row, col+1]);

    // check down
    if(row + 1 < heights.length) neighbors.push([row+1, col]);

    // check left
    if(col - 1 >= 0) neighbors.push([row, col-1]);

    return neighbors;
}

console.log(minimumEffortPath([[1,2,2],[3,8,2],[5,3,5]]));
