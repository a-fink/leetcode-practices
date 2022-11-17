// Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.
// For example:

//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28
//     ...

// Example 1:
//     Input: columnTitle = "A"
//     Output: 1

// Example 2:
//     Input: columnTitle = "AB"
//     Output: 28

// Example 3:
//     Input: columnTitle = "ZY"
//     Output: 701

// Constraints:
//     1 <= columnTitle.length <= 7
//     columnTitle consists only of uppercase English letters.
//     columnTitle is in the range ["A", "FXSHRXW"]

var titleToNumber = function(columnTitle) {
    // in the ascii table capitals A-Z happen at 65-90, so if we want A to be 1 and Z to be 26 we could look at each characters ascii value - 64
    // this is also very like counting in base 26, each time our digit goes over 26 we're going to add another place and start again
    // when converting binary to decimal we multiple the digit's value x 2 ^ place it's in, with place starting at 0 on the right
    // can combine these two conceps to solve this
    // set a variable to hold the total
    let colNum = 0;
    // go through the array from right to left (last index to 0)
    for(let i = columnTitle.length - 1; i >= 0; i--){
        // the power of the current position is length - 1 - i (start at 0 and go up by 1 each time as i goes down)
        let position = columnTitle.length - 1 - i;
        // get the ascii value of the character at i and subtract 64 to get it to the 1-26 value we need
        let ascii = columnTitle[i].charCodeAt() - 64;
        // now add 26^position x character value to our column number
        colNum += (Math.pow(26, position) * ascii);
    }

    return colNum;
};

// suggested time improvement from research after submitting - rather than using math.pow to calculate power each time, have a power variable that starts at 1 & do power*26 each iteration
// essentially storing one more variable to speed up a lot by not having to recalculate the power at each step
