var lengthOfLastWord = function(s) {
    // split the string into an array of words by breaking at the spaces
    let wordsArray = s.split(' ');

    // return the length of the last thing in the array
    // if the given string has spaces at the end it will cause empty strings at the end of the array
    // go through array in reverse order, the first thing found that is not an empty string is our last word, return length
    for (let i = wordsArray.length - 1; i >= 0; i--){
        if(wordsArray[i] !== ''){
            return wordsArray[i].length;
        }
    }
};
