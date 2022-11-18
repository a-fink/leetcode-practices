// You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.
// You can either start from the step with index 0, or the step with index 1.
// Return the minimum cost to reach the top of the floor.

// Example 1:
//     Input: cost = [10,15,20]
//     Output: 15
//     Explanation: You will start at index 1.
//     - Pay 15 and climb two steps to reach the top.
//     The total cost is 15.

// Example 2:
//     Input: cost = [1,100,1,1,1,100,1,1,100,1]
//     Output: 6
//     Explanation: You will start at index 0.
//     - Pay 1 and climb two steps to reach index 2.
//     - Pay 1 and climb two steps to reach index 4.
//     - Pay 1 and climb two steps to reach index 6.
//     - Pay 1 and climb one step to reach index 7.
//     - Pay 1 and climb two steps to reach index 9.
//     - Pay 1 and climb one step to reach the top.
//     The total cost is 6.

// Constraints:
//     2 <= cost.length <= 1000
//     0 <= cost[i] <= 999

// MY ORIGINAL SOLUTION, WORKS BUT HAS VERY HIGH TIME/SPACE COMPLEXITY
// recursive function to do the work
// inputs - array of costs, index value we came from to use for hashing, hash to track already calculated costs
// returns - the minimum cost to climb to end
function minCostHelper(cost, i, hash){
    // base cases
    // if hash already knows the cost for index i return that
    if(hash.has(i)) return hash.get(i);

    // if array has reached 0 or 1 elements we can just climb to end at no cost, return 0
    if(cost.length <= 1) return 0;

    // recursive steps
    // pre - none

    // recurse - know at least two elements exist from check above - we can choose to start at 0 or 1
    // recusively calculate cost of going to index 0 + rest of array, and index 1 + rest of array
    // for index - zero in the array we're seeing is 1 index above array/idx we came from, one in array we're seeing is 2 above array we came from
    // with hash, if we already know cost of step use that, otherwise calc & hash it
    let idxZeroCost, idxOneCost;
    if(hash.has(i+1)) idxZeroCost = hash.get(i+1);
    else{
        idxZeroCost = cost[0] + minCostHelper(cost.slice(1), i+1, hash);
        hash.set(i+1, idxZeroCost);
    }

    if(hash.has(i+2)) idxOneCost = hash.get(i+2);
    else{
        idxOneCost = cost[1] + minCostHelper(cost.slice(2), i+2, hash);
        hash.set(i+2, idxOneCost);
    }

    // post - pick the smaller cost and return it
    if(idxZeroCost < idxOneCost) return idxZeroCost;
    else return idxOneCost;
}

// ITERATIVE APPROACH FOR BETTER RUNTIME/SPACE
// iterative attempt to see if we can get faster
var minCostClimbingStairs = function(cost) {
    // constraints tell us that cost will always start with at least 2 elements, so don't need to check for empty / 1 element array
    // if there's only two need to return the smaller of the two
    if(cost.length === 2) return Math.min(cost[0], cost[1]);

    // cost for step 0 is just cost[0], cost for step 1 is just cost[1]
    // build an array to use for tabulation and put these costs in it
    let costArray = [cost[0], cost[1]];

    // cost for any future step is the cost of the step itself, plus the minimum of the cost it took to get to where it came from, which could be either one or 2 steps back
    // run through the rest of the incomming array, building our tabulation array at each step with these calculations
    // since we can always take 1 or 2 steps, if we get within
    for(let i = 2; i < cost.length; i++){
        let currCost = cost[i] + Math.min(costArray[i-1], costArray[i-2]);
        costArray.push(currCost);
    }

    // since we know we can take 1 or 2 steps at any point, the way to get to end could come from last step (length-1) or 2 steps back (length-2)
    // so the minimum of those two values is our answer - calc/return minimum
    return Math.min(costArray[costArray.length -1], costArray[costArray.length -2]);
}
