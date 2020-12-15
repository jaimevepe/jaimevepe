// Factorialize
// If the integer with the letter n, a factorial is the product of all 
// positive integers less than or equal to n!

function factorialize(num) {
    let result = 1;
    for (let i = 1; i<= num; i++) {
        // result = result * i; OR
        result *=i; // same as above
        // i = 1, result(1) * i = 1, result remains 1
        // then i = 2, result(1) * 2 = 2, result is now 2
        // then i = 3, result(2) * 3 = 6, result is now 6
        // then i = 4, result(6) * 4 = 24, result is now 24
        // then i = 5, result(24) * 5 = 120, result is now 120, 
        // loops stops since 5<=num
        // TODO: Ex result = 1 * 2 * 3 * 4 * 5 = 120
    }
    return result;
} 
console.log(factorialize(5))