// long flower bed repped by array, some are planted and some are not, flowers cannot be planted in adjacent plot
// given int array w/0 & 1 (empty, full)
// given int n
// return true or false whether n new flowers can be planted in the flower bed without violating no adjacent rule

//[0,1,0,1,0..]
// [1,1,0,]
// [1,0,0,0,1]

// no empty arrays, will have at least 1 thing
//[0] [1] // one in array, if 0 can plant, if 1 we cannot
//[0,0] [0,1] // two in array, if both 0 can plant 1, if already a 1, can plant 0

//@0 can plant if 1 is not 1, @n I can plant if n-1 is not 1, anywhere in the middle I can plant if n-1 & n+1 are not 1
// [1,0,0,0,0,0,1]
// [0,0,0]

function canPlantFlowers(array, n){
// make counter for planting
let plantCount = 0;
// if array length is 1, increase depending whether element is 0 return
if(array.length === 1){
    if(array[0] === 0) plantCount++;
    return plantCount >= n;
}
// go through array from i=0 to length
for(let i = 0; i < array.length; i++){
    let curr = array[i];

    if(curr === 0){
        let canPlant = true;
        if(array[i-1] !== undefined && array[i-1] === 1) canPlant = false;
        if(array[i+1] !== undefined && array[i+1] === 1) canPlant = false;

        if(canPlant){
            plantCount++;
            array[i] = 1;
        }
    }
}
// compare count with given n
return plantCount >= n
}

// [1,0,1]
// i=2
// canPlant = true
// plantCount = 2

// final version submitted and tweaked on leetcode and succeeded
