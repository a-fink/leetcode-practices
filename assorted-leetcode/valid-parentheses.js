// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.
//     Every close bracket has a corresponding open bracket of the same type.

// Example 1:
    // Input: s = "()"
    // Output: true

// Example 2:
    // Input: s = "()[]{}"
    // Output: true

// Example 3:
    // Input: s = "(]"
    // Output: false

// Constraints:
//     1 <= s.length <= 104
//     s consists of parentheses only '()[]{}'.

var isValid = function(s) {
    // if s is only length 1 we can't have a pair return false
    if(s.length === 1) return false;

    // make array of corresponding pairs for ease of reference
    let brackets = ['(', ')', '[', ']', '{', '}'];

    let hash = new Map();
    let lastKey = 'last bracket hashed';
    // lastKey will be an array of openers in order so we can check previous one if we delete last

    // traverse string & hash count of opening brackets and decrement one each time you find a corresponding close to handle pairs
    // also hash an entry for the most recent opening hashed so we can track order
    for(let i = 0; i < s.length; i++){
        const char = s[i];

        // if char is an opening bracket set last hashed to that, then if in hash already increase count, if not insert it
        if(char === brackets[0] || char === brackets[2] || char === brackets[4]){
            // check if lastKey exists, if it does, add char to end of array, otherwise put array with char in it into hash
            let lastArray = hash.get(lastKey);
            if(lastArray){
                lastArray.push(char);
                hash.set(lastKey, lastArray);
            }
            else{
                hash.set(lastKey, [char]);
            }

            let opening = hash.get(char);
            if(opening) hash.set(char, opening + 1);
            else hash.set(char, 1);
        }

        // every time you find a closing bracket check if last thing entered was its opening, then check if there's opening ones to delete - if either fail, false
        // otherwise decrement count for that type in the hash & keep looking - if count reaches 0 delete from hash
        if(char === brackets[1] || char === brackets[3] || char === brackets[5]){
            // get corresponding opening character from brackets array
            let corresponding;
            switch (char){
                case ')':
                    corresponding = brackets[0];
                    break;
                case ']':
                    corresponding = brackets[2];
                    break;
                case '}':
                    corresponding = brackets[4];
                    break;
                default:
                    console.log('error occured getting corresponding');
            }

            // if last hashed doesn't match or hash doesn't have an array of opening characters this closing doesn't match opening order, pattern fails
            let openArray = hash.get(lastKey);
            if(!openArray || openArray[openArray.length -1] !== corresponding) return false;

            // try to get count for corresponding opening character from hash, if corresponding character has no entries in hash pattern fails
            let correspondingCount = hash.get(corresponding);
            if(!correspondingCount) return false;

            // otherwise decrement count of corresponding character because we found it's pair, if count goes to 0 delete from hash so we can check for empty hash at end
            correspondingCount--;
            if(correspondingCount === 0) hash.delete(corresponding);
            else hash.set(corresponding, correspondingCount);

            // also need to update our opening array to take last character off & update it (already know it exists from checks above so don't need to check for undef)
            openArray.pop();
            hash.set(lastKey, openArray);

            // need to delete our last hashed key if we have removed all pairs so we can check for empty hash at end
            // if after deleting the corresponding bracket entry hash size has become 1 (last key tracker) then remove the last key tracker
            // (if there's more it will get added back the next time an opener is found)
            if(hash.size === 1) hash.delete(lastKey);
        }
    }

    // at end, if all matched up correctly then hash's size should be 0 - if it's not then false
    if(hash.size === 0) return true;
    return false;
};

// after submitting looked for additional solutions
// I think less time efficient because splitting/joining are O(n) and then within a while loop, but less memory and much easier to read/write quickly
// (not my code, copied to understand for later - comments to right hand side are my parsing of it)
// var isValid = function(s) {
//     let preS = ''
//     while(s !== preS){ // if s after splits/joins is the same as it was before it went through, we have removed all we can
//         preS = s // holds old value of s
//         s = s.split('()').join('') // splitting and joining on each pair will work from the inside out if there's lots nested in the right order and remove all valid remaining pairs
//         s = s.split('[]').join('')
//         s = s.split('{}').join('')
//     }
//     if(!s) // if everything had a valid pair we should end up with an empty string
//         return true;
//     return false;
// };
