// given a string tell me if its an anagram of a palindrome
// any string, need to check for palindrome
// '' counts as true
// string can be any characters
// racecar aaccrre
// mom omm mmo
// moom

function anagramOfPalindrome(string){
// if string is '' return true
if(string === '') return true;

// make a hash map
let hash = new Map();

// iterate over the string
for(let i = 0; i < string.length; i++){
    // if letter exists in map update count
    let letter = string[i];
    let count = hash.get(letter);
    if(count){
        hash.set(letter, count + 1)
    }

    // otherwise add letter
    else{
        hash.set(letter, 1);
    }
}

// iterate through keys in hashmap, track if there is more than one odd value, if so it fails, otherwise true
let oddUsed = false;
for(const [key, value] of hash){
    if(value % 2 === 1){
        if(oddUsed) return false;
        else oddUsed = true;
    }
}

return true;
}
