var removeElement = function(nums, val) {
    // get the length of the total array and save as k to represent sorted section
    // iterate through the array
    // at each element if it is the value to remove, splice it and push it onto the end and reduce k
        // when reduce k need to also reduce i to make sure we account for movement and check new element now at same i
        // stop iteration once i = k so don't check/move the removed values again
    // return k at the end
    // edge cases
        // if array is length 0 won't go in for loop and will just return 0
        // if value not there, won't be found in iteration, k won't reduce and will return full length at end
    let k = nums.length;

    for(let i = 0; i < k; i++){
        if(nums[i] === val){
            let temp = nums[i];
            nums.splice(i, 1);
            nums.push(temp);
            k--;
            i--;
        }
    }

    return k;
};
