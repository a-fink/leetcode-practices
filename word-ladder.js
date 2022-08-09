var ladderLength = function(beginWord, endWord, wordList) {
    // if the end word is not in the word list we know we can't get there, return 0
    if(!wordList.includes(endWord)) return 0;

    // do a breadth first search for a path style search, building sequences from beginWord to endWord
    // set up a que and put sequence to beginWord in it
    let q = [[beginWord]];

    // set up a set for words that have been visited & put beginWord in it
    let visited = new Set();
    visited.add(beginWord);

    while(q.length > 0){
        //get first sequence in que, and the last word in the sequence
        let currentSeq = q.shift();
        let currentWord = currentSeq[currentSeq.length - 1];

        // get the array of words that are 1 letter appart from currentWord
        let neighbors = getNeighbors(currentWord, wordList);

        // go through neighbors
        for(let i = 0; i < neighbors.length; i++){
            let neighbor = neighbors[i];
            // if not already used check to see if we found endWord
            if(!visited.has(neighbor)){
                // if neighbor is end word we have completed the sequence
                if(neighbor === endWord){
                    // add length of currentSeq + 1 for neighbor & return the answer
                    let length = currentSeq.length + 1;
                    return length;
                }
                // otherwise
                else{
                    // put word on end of sequence and put sequence in queue
                    // put word into visited words
                    let newSeq = [...currentSeq, neighbor];
                    q.push(newSeq);
                    visited.add(neighbor);
                }
            }
        }
    }
    // if can't find a path from start to end through neighbors after searching return 0
    return 0;
};

function getNeighbors(currentWord, wordList){
    // words in word list, begin word, and end word are guaranteed to be the same length & all lowercase english letters

    // make array to hold neighbors
    let neighbors = [];

    // go through each word in word list
    wordList.forEach(word => {
        let difference = 0;

        // go throuhg the word string
        for(let i = 0; i < word.length; i++){
            // if ascii values of the letters don't match then we have found a difference, increase the counter
            if(word.charCodeAt(i) !== currentWord.charCodeAt(i)) difference++;
        }

        // if the total difference between the two words is 1 then put it in the neighbors array
        if(difference === 1) neighbors.push(word);

    });

    // return answers array
    return neighbors;
}

let start = 'hot';
let end = 'dog';

let wordList = ["hot","dog"];

console.log(ladderLength(start, end, wordList));
