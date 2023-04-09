// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

// Example 1:
//     Input: nums = [3,2,1]
//     Output: 1
//     Explanation:
//     The first distinct maximum is 3.
//     The second distinct maximum is 2.
//     The third distinct maximum is 1.

// Example 2:
//     Input: nums = [1,2]
//     Output: 2
//     Explanation:
//     The first distinct maximum is 2.
//     The second distinct maximum is 1.
//     The third distinct maximum does not exist, so the maximum (2) is returned instead.

// Example 3:
//     Input: nums = [2,2,3,1]
//     Output: 1
//     Explanation:
//     The first distinct maximum is 3.
//     The second distinct maximum is 2 (both 2's are counted together since they have the same value).
//     The third distinct maximum is 1.

// Constraints:
//     1 <= nums.length <= 104
//     -231 <= nums[i] <= 231 - 1

// Follow up: Can you find an O(n) solution? - YES, SEE ATTEMPTS 2 & 3

var thirdMaxWithSorting = function(nums) {
    // sort the array -> customized built in sort b/c by default will sort alphbetically
    nums.sort((a, b) => {
        // b-a for descending order, largest first
        return (b-a);
    });

    // console.log(nums);

    // find/return third max
    let firstMax, secondMax, thirdMax;
    nums.forEach(num => {
        // if num matches any of our currently saved things skip it
        if(num !== firstMax && num !== secondMax && num !== thirdMax){
            // if num is bigger than first max, or firstMax hasn't been set yet, update down the chain
            if(num > firstMax || firstMax === undefined){
                thirdMax = secondMax;
                secondMax = firstMax;
                firstMax = num;
            }

            // if num is bigger than second max or second max hasn't been set update down the chain
            else if(num > secondMax || secondMax === undefined){
                thirdMax = secondMax;
                secondMax = num;
            }

            // if num is bigger than third max or third max hasn't been set yet update it
            else if(num > thirdMax || thirdMax === undefined){
                thirdMax = num;
            }
        }
    });

    // return thirdMax if it exists, otherwise return firstMax
    return thirdMax !== undefined ? thirdMax : firstMax;
};

function thirdMaxNoSet(nums){
    // can just go for the end of our last solution without the sorting for O(n)
    let firstMax, secondMax, thirdMax;
    nums.forEach(num => {
        // if num matches any of our currently saved things skip it
        if(num !== firstMax && num !== secondMax && num !== thirdMax){
            // if num is bigger than first max, or firstMax hasn't been set yet, update down the chain
            if(num > firstMax || firstMax === undefined){
                thirdMax = secondMax;
                secondMax = firstMax;
                firstMax = num;
            }

            // if num is bigger than second max or second max hasn't been set update down the chain
            else if(num > secondMax || secondMax === undefined){
                thirdMax = secondMax;
                secondMax = num;
            }

            // if num is bigger than third max or third max hasn't been set yet update it
            else if(num > thirdMax || thirdMax === undefined){
                thirdMax = num;
            }
        }
    });

    // return thirdMax if it exists, otherwise return firstMax
    return thirdMax !== undefined ? thirdMax : firstMax;
}

// best overall outcome time/space
function thirdMaxWithSet(nums){
    // add a set to skip some logic checking and hopefully speed it up
    let firstMax, secondMax, thirdMax;
    const seen = new Set();
    for(let i = 0; i < nums.length; i++){
        const currNum = nums[i];
        // if we've already seen this number, or it's smaller than thirdMax (provided that's been set) skip it
        if(seen.has(currNum) || currNum < thirdMax) continue;

        // otherwise put it in our set and check everything else
        seen.add(currNum);

        // if num is bigger than first max, or firstMax hasn't been set yet, update down the chain
        if(currNum > firstMax || firstMax === undefined){
            thirdMax = secondMax;
            secondMax = firstMax;
            firstMax = currNum;
        }

        // if num is bigger than second max or second max hasn't been set update down the chain
        else if(currNum > secondMax || secondMax === undefined){
            thirdMax = secondMax;
            secondMax = currNum;
        }

        // if num is bigger than third max or third max hasn't been set yet update it
        else if(currNum > thirdMax || thirdMax === undefined){
            thirdMax = currNum;
        }
    }

    // return thirdMax if it exists, otherwise return firstMax
    return thirdMax !== undefined ? thirdMax : firstMax;
}
