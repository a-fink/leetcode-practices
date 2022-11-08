// determine if an integer is a palindrome (same backwards and forwards)
// 121 is, -121 is not since it would read 121- when reversed, 10 is not
// try to do without converting int to string

var isPalindrome = function(x) {
    // if number is negative can't be a palindrome
    if(x < 0) return false;

    // if number is 1 digit it's automatically a palindrome
    if(0 <= x && x < 10) return true;

    // make a copy of number to use in divisions, and variables for the digit we are on and the number once it's reversed
    let num = x;
    let reversed = 0;
    let digit;

    // make a reversed copy of the number
    while(num >= 1){
        // get the last digit of num by using modulo 10
        digit = num % 10;
        // put the digit in the reversed number - multiply reversed by 10 and add digit
        reversed = (reversed * 10) + digit;

        // divide num by 10 and decrement length
        // only want int part of num since already dealt with last digit
        num = Math.floor(num/10);
    }

    // if x and reversed match it's a palindrome
    reversed = Number(reversed);
    if(x === reversed) return true;
    return false;
};
