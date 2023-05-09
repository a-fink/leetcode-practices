// A web developer needs to know how to design a web page's size. So, given a specific rectangular web page’s area, your job by now is to design a rectangular web page, whose length L and width W satisfy the following requirements:
//     The area of the rectangular web page you designed must equal to the given target area.
//     The width W should not be larger than the length L, which means L >= W.
//     The difference between length L and width W should be as small as possible.

// Return an array [L, W] where L and W are the length and width of the web page you designed in sequence.

// Example 1:
//     Input: area = 4
//     Output: [2,2]
//     Explanation: The target area is 4, and all the possible ways to construct it are [1,4], [2,2], [4,1].
//     But according to requirement 2, [1,4] is illegal; according to requirement 3,  [4,1] is not optimal compared to [2,2]. So the length L is 2, and the width W is 2.

// Example 2:
//     Input: area = 37
//     Output: [37,1]

// Example 3:
//     Input: area = 122122
//     Output: [427,286]

// Constraints:
//     1 <= area <= 107

var constructRectangleOne = function(area) {
    // length iterate from 1/2 n down to 1
    // witdh = area/length
    // if width is a whole number keep checking
    // if L >= W and current pair undef or difference in new pair less than diff in old pair, update
    let w, pair;
    let lowestLength = Math.floor(Math.sqrt(area));

    for(let l = area; l >= lowestLength; l--){
        if(area % l === 0){
            w = area/l;
            if(pair === undefined) pair = [l, w];
            else{
                let newDiff = Math.abs(l - w);
                let oldDiff = Math.abs(pair[0] - pair[1]);

                if(newDiff < oldDiff) pair = [l, w];
            }
        }
    }

    return pair;
};

// redone after peeking at solution for more performant
function constructRectangle(area){
    let width = Math.floor(Math.sqrt(area));

    // start at rounded square root and go down, first evenly dividing one is the best pair
    // since going down from sqrt area/width will always be bigger than width once found
    while(area % width !== 0){
        width--;
    }

    return [area/width, width];
}
