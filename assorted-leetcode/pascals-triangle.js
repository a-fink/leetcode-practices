// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:
//     Input: numRows = 5
//     Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// Example 2:
//     Input: numRows = 1
//     Output: [[1]]

// Constraints:
//     1 <= numRows <= 30

// if we number 1st row starting at 0, each row will have same length asnwer as its row number + 1
// 1st 2 rows are known, after that each row starts & ends with 1 and middle position is sum of the two above it
// use iteration with tabulation to speed things up so don't need to re-calc each level as we progress

var generate = function(numRows) {
    // make an array to hold the rows of pascals
    const pascals = [];

    // iterate from 0 to numRows inclusive, building each row and adding it to the array
    for(let i = 0; i < numRows; i++){
        // if i = 0 just put in the answer
        if(i === 0){
            pascals.push([1]);
            continue;
        }

        // if i = 1 just put in the answer
        if(i === 1){
            pascals.push([1, 1]);
            continue;
        }

        // get the row above from our array
        const rowAbove = pascals[i-1];

        // make an array to hold the new row and put a 1 in the first position
        const newRow = [];
        newRow.push(1);

        // go through array for row above from 0 < length - 1, at each spot add current and next & put it in the new row
        for(let j = 0; j < rowAbove.length - 1; j++){
            newRow.push(rowAbove[j] + rowAbove[j+1]);
        }

        // add a 1 at the end of the new row
        newRow.push(1);

        // store the new row in pascals
        pascals.push(newRow);
    }

    // return the answer array
    return pascals;
};

// time complexity - O(n^2) - due to nested loops
// space complexity - O(n) ?? O(n^2) - need to hold n arrays, each with some number based on n items?
// possible improvements
    // I think there's a mathmatical formula with combination/permutation that lets you calculate each position in pascals
    // that would bring time down because only need to go from 0->n, no nested loop needed to traverse the row above
    // still need to store the whole thing though, don't think we can do much about the memory needs
