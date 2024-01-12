// you are given an array of prices where prices[i] is the price of a given stock on the ith day
// you want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock
// return the maximum profit you can achieve from this transaction
// if can't achieve profit return zero

// Input: prices = [7,1,5,3,6,4]
// Output: 5

// Input: prices = [7,6,4,3,1]
// Output: 0

// if there are not at least 2 days of data, then I can't buy and sell on 2 days anyway -> return 0
// start a pointer for buy at index 0
// start a pointer for sell at index 1
// start max profit at 0
// while sell is within the array
    // if sell - buy > max update max and keep looking
    // if sell - buy < 0 update buy to sell's position and move sell to one past buy and keep looking

// return largest found

/**
 * [7,1,5,3,6,4]
 * buy = 1
 * sell = 4
 * max = 5
 *
 * [7,6,4,3,1]
 * buy = 1
 * sell = undef
 * max = 0
 */

function maximizeProfit(nums){
    if(nums.length < 2) return 0;

    let buy = 0;
    let sell = 1;
    let maxProfit = 0;

    while(sell < nums.length){
        let currProfit = nums[sell] - nums[buy];
        if(currProfit > maxProfit) maxProfit = currProfit;
        if(currProfit < 0) buy = sell;
        sell++;
    }

    return maxProfit;
}

console.log(maximizeProfit([7,1,5,3,6,4]));
console.log(maximizeProfit([7,6,4,3,1]));
console.log(maximizeProfit([]));
console.log(maximizeProfit([1]));
