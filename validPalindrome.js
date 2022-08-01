var isPalindrome = function(s) {

    // go through string and make a new string with only the letters & numbers, if uppercase switch to lowercase
    let letterStr = "";
    for(let i = 0; i < s.length; i++){

        // get ASCII value of char at index i
        let val = s.charCodeAt(i);

        // if it's a lower case letter already - ASCII value between 97 & 122 add to string
        if(val >= 97 && val <= 122) letterStr += s[i];

        // if it's a lower case letter - ASCII value between 65 & 90, add lower case version to string
        if(val >= 65 && val <= 90) letterStr += s[i].toLowerCase();

        // if it's a number - ASCII value between 48 & 57 - also add it to the new string
        if(val >= 48 && val <= 57) letterStr += s[i];
    }

    // make a copy of the string to reverse
    let secondStr = letterStr;
    // switch to array of chars, reverse the array, and join back into string
    secondStr = secondStr.split('').reverse().join('');

    // if lettertr and secondStr match then s is a palindrome
    if(letterStr === secondStr) return true;

    // otherwise it fails
    return false;
};
