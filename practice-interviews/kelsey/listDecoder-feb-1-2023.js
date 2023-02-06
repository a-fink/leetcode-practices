/**
 * DEFINE ENCODER (but do not write):
 * Encoder takes a list of strings and encodes into a single string with '#.' delimiters
 *
 * @param {string} encodedString an encoded string created by our encoder function, will begin with a '#.'
 * @returns {array} an array of the decoded strings
 */
function decodeStringList(encodedString){
    const decodedArray = [];
    let numStart = 0;
    let numEnd, wordLength, wordStart;
    while(numStart < encodedString.length){
        numEnd = encodedString.indexOf('.', numStart);
        wordLength = Number(encodedString.slice(numStart, numEnd));
        wordStart = numEnd + 1;
        decodedArray.push(encodedString.slice(wordStart, wordStart + wordLength));
        numStart = wordStart + wordLength;
    }

    return decodedArray;
}

// Test Cases:
const string1 = '5.alpha4.beta5.gamma5.delta0.29.I AM A Cool over 9000 person.14.I scored a 10.';
const string2 = '0.0.0.';
const string3 = '11.$53#$10.11.5.alpha6.BETA7.0.0.';

console.log(decodeStringList(string1)); // ['alpha', 'beta', 'gamma', 'delta', '', 'I AM A Cool over 9000 person.', 'I scored a 10.]
console.log(decodeStringList(string2)); // ['', '', '']
console.log(decodeStringList(string3)); // ['$53#$10.11.', 'alpha', 'BETA7.', '', '']

/**
 * Space & Time Estiamtes
 *
 * TIME OVERALL: Worst case scenario O(n^2) but on average should run O(n)
 * indexOf - worst case O(n) where n is the # of characters in the number before the string
 * slice - worst case O(n) where n is the # of letters in that string
 * while loop - O(m) where m is the number of strings to be decoded
 *
 * SPACE OVERALL: O(n)
 * decoded array - O(n) - will hold all strings minus the delimeters (some portion on string length n)
 * additional variables - O(1) - amount of extra variables stored doesn't depend on input size
 */
