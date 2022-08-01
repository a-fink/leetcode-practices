var romanToInt = function(s) {
    //split given string to array of chars
    let chars = s.split('');
    let subtractions = [4, 9, 40, 90, 400, 900];
    let total = 0;

    //go through array and use switch for various cases
    for (let i = 0; i < chars.length; i++){
        let current = chars[i];
        let next = chars[i+1];

        // use helper to read value
        let value = readNumeralHelper(current, next);

        // if value is in the subtractions array, increase i so skip next character
        if(subtractions.includes(value)) i++;

        // add value to total
        total += value;
    }

    // return total
    return total;
};

function readNumeralHelper(current, next){
    switch (current){
        // if it's an I check if it is before a V or an X
        case 'I':
            // if next char is a V, add 4 and increase i to skip next char
            if(next === 'V'){
                return 4;
            }

            // if next char is an X, add 9 and increase i to skip next char
            else if(next === 'X'){
                return 9;
            }

            // otherwise add one
            else{
                return 1;
            }

        // will only hit this case if find V alone, not with I before it
        case 'V':
            return 5;

        // if it's an X check if it is before an L or a C (will only hit when X alone, not when I before it)
        case 'X':
            // if next char is L add 40 and increase i to skip next char
            if(next === 'L'){
                return 40;
            }
            // if next char is C add 90 and increase i to skip next char
            else if(next === 'C'){
                return 90;
            }
            // otherwise add 10
            else{
                return 10;
            }

        // will only hit when L alone, no X before it
        case 'L':
            return 50;

        // if it's a C check if it's before a D or M (will only hit when C alone, not when X before it)
        case 'C':
            // if next char is D add 400 and increase i to skip next char
            if(next === 'D'){
                return 400;
            }
            // if next char is an M add 900 and increase i to skip next char
            else if(next === 'M'){
                return 900;
            }
            // otherwise add 100
            else{
                return 100;
            }

        // will only hit when alone, no C before
        case 'D':
            return 500;

        // will only hit when alone, no C before
        case 'M':
            return 1000;
    }
}

console.log(romanToInt("MCMXCIV"));
