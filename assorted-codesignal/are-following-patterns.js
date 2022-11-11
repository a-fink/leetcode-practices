// Given an array strings, determine whether it follows the sequence given in the patterns array. In other words, there should be no i and j for which strings[i] = strings[j] and patterns[i] ≠ patterns[j]
// or for which strings[i] ≠ strings[j] and patterns[i] = patterns[j].

// Example
//     For strings = ["cat", "dog", "dog"] and patterns = ["a", "b", "b"], the output should be
//     solution(strings, patterns) = true;
//     For strings = ["cat", "dog", "doggy"] and patterns = ["a", "b", "b"], the output should be
//     solution(strings, patterns) = false.

// Input/Output
//     [execution time limit] 4 seconds (js)

//     [input] array.string strings
//     An array of strings, each containing only lowercase English letters.
//     Guaranteed constraints:
//     1 ≤ strings.length ≤ 105,
//     1 ≤ strings[i].length ≤ 10.

//     [input] array.string patterns
//     An array of pattern strings, each containing only lowercase English letters.
//     Guaranteed constraints:
//     patterns.length = strings.length,
//     1 ≤ patterns[i].length ≤ 10.

//     [output] boolean
//     Return true if strings follows patterns and false otherwise.
function solution(strings, patterns) {
    // if length of 2 arrays does not match pattern cannot match
    if(strings.length !== patterns.length) return false;

    // make 2 hashes, to hold maps between string / pattern in both directions
    const stringHash = new Map();
    const patternHash = new Map();

    // iterate through array (we know same length from above)
    for(let i = 0; i < strings.length; i++){
        const string = strings[i];
        const pattern = patterns[i];

        // try to get values from hashes
        const stringValue = stringHash.get(string);
        const patternValue = patternHash.get(pattern);

        // if one exists and the other doesn't exist pattern fails
        if((stringValue && !patternValue) || (!stringValue && patternValue)) return false;

        // if neither exist add them to both hashes & then keep going
        if(!stringValue && !patternValue){
            stringHash.set(string, pattern);
            patternHash.set(pattern, string);
            continue;
        }

        // if values exist in hash but don't match pattern fails (know both already exist from above checks)
        if(stringValue !== pattern || patternValue !== string) return false;
    }

    // if get past loop without returning false we passed, return true
    return true;
}
