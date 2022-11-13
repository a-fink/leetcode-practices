// Given two binary strings a and b, return their sum as a binary string.

// Example 1:
// Input: a = "11", b = "1"
// Output: "100"

// Example 2:
// Input: a = "1010", b = "1011"
// Output: "10101"

// Constraints:
//     1 <= a.length, b.length <= 104
//     a and b consist only of '0' or '1' characters.
//     Each string does not contain leading zeros except for the zero itself.

var addBinary = function(a, b) {
    // start remainder at 0 & and index at 0
    let remainder = 0;
    let i = 0;
    // we need to write final answer from right to left, if we put in stack, we can pop off at end in reverse order and add to answer string
    let stack = [];


    // go through strings from last to first (length - 1 - i)
    while(a[a.length - 1 - i] || b[b.length - 1 - i]){
        let sum = 0;
        // at each step, add value from either/both and remainder - could result in 0, 1, 2, or 3 (need to cast from string input to number)
        if(a[a.length - 1 - i]) sum += Number(a[a.length - 1 - i]);
        if(b[b.length - 1 - i]) sum += Number(b[b.length - 1 - i]);
        sum += remainder;

        // put digit's value in stack as a string and set remainder based on the sum we found
        switch (sum){
            case 0:
                stack.push('0');
                remainder = 0;
                break;
            case 1:
                stack.push('1');
                remainder = 0;
                break;
            case 2:
                stack.push('0');
                remainder = 1;
                break;
            case 3:
                stack.push('1');
                remainder = 1;
                break;
            default:
                console.log('error occured');
        }

        // increment
        i++;
    }

    // at end if remainder is 1 put it on the stack as a string
    if(remainder === 1) stack.push('1');

    // make a result string, while the stack still has values pop one off and add to result string
    let resultString = '';
    while(stack.length > 0){
        char = stack.pop();
        resultString += char;
    }

    // return answer string
    return resultString;
};
