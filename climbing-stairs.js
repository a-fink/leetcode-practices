var climbStairs = function(n) {
    // could hash with iterative, or do recursive
    // hash/iterative should have better efficiency

    // at n=1 there's one 1, at n=2 there's 2 ways
    // if we know the number ways to get to the points [n-1] and [n-2] respectively, denoted as n1 and n2 , then the total
    // ways to get to the point [n] is n1 + n2. Because from the [n-1] point, we can take one single step to reach [n]. And
    // from the [n-2] point, we could take two steps to get there.

    // make a hash
    let hash = new Map();
    hash.set(1, 1);
    hash.set(2, 2);

    for(let i = 3; i <= n; i++){
        let numberWays = hash.get(i-1) + hash.get(i-2);
        hash.set(i, numberWays);
    }

    return hash.get(n);
};
