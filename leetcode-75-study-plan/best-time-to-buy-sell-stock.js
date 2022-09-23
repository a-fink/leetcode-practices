// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example1 Input: prices = [7,1,5,3,6,4] Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Exampel2 Input: prices = [7,6,4,3,1] Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

var maxProfit = function(prices) {
    // tried nested arrays method and while it worked it timed out
    // see notes on ipad for how 2-pointer window method can be used on arrays in single pass

    // set a max profit tracker to 0, so if we don't find a better one we return that
    // set a left tracker to 0 and a right tracker to 1
    // go through the array moving the pointers and looking for best max value until right reaches array length

    let maxProfit = 0;
    let left = 0;
    let right = 1;

    while(right < prices.length){
        let profit = prices[right] - prices[left];

        // if profit is higher than max update it
        if(profit > maxProfit) maxProfit = profit;

        // if profit is less than 0 the value at right is a new minimum value and we should move left there
        // and keep looking for better possible profits after it
        if(profit < 0) left = right;

        // in either case move right forward 1 to keep searching
        right++;
    }

    // at the end return the max profit we found
    return maxProfit;
};
