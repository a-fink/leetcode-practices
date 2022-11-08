var findSmallestSetOfVertices = function(n, edges) {
    // iterative / traversal solution becomes extremely complicated
    // this is another problem where we can use math properties to simplify
    // the indegree for a node in a directed graph is the number of things coming into it
    // if indegree >= 1 can get to it from somewhere, if indegree = 0 can't reach it any other way than starting there
    // if we find all nodes with indegree 0 (must be starting nodes) we can reach everything else through them

    let solution = [];

    // use helper to hash indegree of all nodes
    let hash = findIndegrees(edges);

    // go through nodes from 0->n-1, if hash doesn't have that node as a key then indegree is 0, put node in solution array
    for(let i = 0; i < n; i++){
        if(!hash.has(i)){
            solution.push(i);
        }
    }

    // return solution array at end
    return solution;
};

function findIndegrees(edges){
    // calculate the indegrees of the every vertex (the number of edges coming in) & hash it for efficient searching later
    // go through all edges and count how many times vertext shows up as a destination (edge[1])

    let hash = new Map();

    // go through the edges array looking at the destinations (edge[i])
    // if hash has that key increase its count, otherwise put it in with a count of one
    for(let i = 0; i < edges.length; i++){
        let edge = edges[i];
        let count = hash.get(edge[1]);
        if(count !== undefined){
            hash.set(edge[1], count + 1);
        }
        else{
            hash.set(edge[1], 1);
        }
    }

    // return the hash
    return hash;
}
