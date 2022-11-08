var twoSum = function(nums, target) {
    // if length of nums is 0 or 1 can't have pair
    if(nums.length < 2) return undefined;

    let hash = new Map();

    // go through array
    for(let i = 0; i < nums.length; i++){
        let num = nums[i];
        let value = hash.get(num);

        // at each index check if already in hash, if it is return array with current index and index in value at key
        if(value !== undefined){
            return [i, value];
        }

        // if it's not - find target - num and store that in hash with value of index currently at
        else{
            hash.set((target - num), i);
        }
    }

    // if get to end and no pair found return undefined
    return undefined;
};

console.log(twoSum([2,7,11,15], 9));
