// //Recusrion Brute-force
// function eggDropBrute(eggs, floors) {
//     if (floors === 0 || floors === 1) return floors;
//     if (eggs === 1) return floors;

//     let minAttempts = Infinity;

//     for (let k = 1; k <= floors; k++) {
//         let attempts = 1 + Math.max(
//             eggDropBrute(eggs - 1, k - 1),  // egg breaks
//             eggDropBrute(eggs, floors - k) // egg survives
//         );

//         minAttempts = Math.min(minAttempts, attempts);
//     }

//     return minAttempts;
// }

// console.log(eggDropBrute(2, 3));



// Using memoization
function eggDropMemo(eggs, floors, dp = {}) {
    let key = eggs + "-" + floors;
    if (key in dp) return dp[key];

    if (floors === 0 || floors === 1) return floors;
    if (eggs === 1) return floors;

    let minAttempts = Infinity;

    for (let k = 1; k <= floors; k++) {
        let attempts = 1 + Math.max(
            eggDropMemo(eggs - 1, k - 1, dp), 
            eggDropMemo(eggs, floors - k, dp)
        );

        minAttempts = Math.min(minAttempts, attempts);
    }

    dp[key] = minAttempts;
    return minAttempts;
}

// console.log(eggDropMemo(2, 6));




// // Tabulation
function eggDropTabulation(eggs, floors) {
    const dp = Array.from({ length: eggs + 1 }, () =>
        Array(floors + 1).fill(0)
    );

    // Base cases
    for (let f = 1; f <= floors; f++) {
        dp[1][f] = f;
    }

    for (let e = 1; e <= eggs; e++) {
        dp[e][1] = 1;
        dp[e][0] = 0;
    }

    // Fill DP table
    for (let e = 2; e <= eggs; e++) {
        for (let f = 2; f <= floors; f++) {
            dp[e][f] = Infinity;

            for (let k = 1; k <= f; k++) {
                let attempts = 1 + Math.max(
                    dp[e - 1][k - 1], // egg breaks
                    dp[e][f - k]      // egg survives
                );

                dp[e][f] = Math.min(dp[e][f], attempts);
            }
        }
    }

    return dp[eggs][floors];
}

console.log(eggDropTabulation(4, 40));
