// Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

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
//     Input: columnNumber = 1
//     Output: "A"

// Example 2:
//     Input: columnNumber = 28
//     Output: "AB"

// Example 3:
//     Input: columnNumber = 701
//     Output: "ZY"

// Constraints:
//     1 <= columnNumber <= 231 - 1

var convertToTitle = function(columnNumber) {
    // similar to counting in base 26 but need to account for everything being shifted up by 1 -> A starts at 1 not 0
    // need to subtract 1 every time we check for next letter to account for this shift in all letters/numbers correspondence
    // subtract 1 and then divide by 26 each time until number becomes 0 -> take remainder and add 65 (ascii value of A) and get ascii char there
    // put on string, then reverse string at end to get in right order (we want them right to left)
    let title = '';

    while(columnNumber > 0){
        columnNumber--;
        const remainder = (columnNumber % 26) + 65;
        title = String.fromCharCode(remainder) + title;
        columnNumber = Math.floor(columnNumber / 26);
    }

    return title;
};
