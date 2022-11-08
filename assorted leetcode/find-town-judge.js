var findJudge = function(n, trust) {
    // trusting no one would mean an outdegree of 0
    // being trusted by everyone would mean having an indegree of n-1

    // if the trust array is empty and n = 1 then the single person fulfills conditions and is the judge
    // (trusts no one, and all nonexistant other people trust him)
    if(n === 1 && trust.length === 0) return n;

    // being trusted by everyone is less likely than not trusting anyone so start by checking indegrees
    // set variable for outdegrees in case needed later
    let inDegrees = findInDegrees(trust);
    let outDegrees;

    // go through all nodes
    for(let i = 1; i <= n; i++){
        let trustScore = inDegrees.get(i);

        // if the trustScore exists and = n-1 this person could be the judge
        if(trustScore !== undefined && trustScore === n - 1){
            // find the outgoing scores
            outDegrees = findOutDegrees(trust);

            // if the outgoing hash doesn't have a key for this node, then they trust no one and are the judge
            if(!outDegrees.has(i)) return i;
        }
    }

    // if make it through the loop without returning town judge can't be found, return -1
    return -1;
};

function findInDegrees(trust){
    // go through the trust array looking at incoming trust (trust[i][1])
    // hash those values for all existing trust information for efficient lookup later
    let hash = new Map();

    for(let i = 0; i < trust.length; i++){
        let trustSet = trust[i];
        let trustedPerson = trustSet[1];

        let count = hash.get(trustedPerson);

        // if count exists update person's count
        if(count !== undefined){
            hash.set(trustedPerson, count + 1);
        }
        // otherwise add them to hash with a count of 1
        else{
            hash.set(trustedPerson, 1);
        }
    }

    // return the hash
    return hash;
}

function findOutDegrees(trust){
    // go through the trust array looking at the outgoing trust (trust[i][0])
    // hash those values for all existing trust information for efficient lookup later
    let hash = new Map();

    for(let i = 0; i < trust.length; i++){
        let trustSet = trust[i];
        let trustingPerson = trustSet[0];

        let count = hash.get(trustingPerson);

        // if count exists update person's count
        if(count !== undefined){
            hash.set(trustingPerson, count + 1);
        }
        // otherwise add them to hash with a count of 1
        else{
            hash.set(trustingPerson, 1);
        }
    }

    // return the hash
    return hash;
}
