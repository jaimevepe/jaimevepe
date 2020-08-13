// Factorialize
// If the integer with the letter n, a factorial is the product of all 
// positive integers less than or equal to n!

function factorialize(num) {
    let result = 1;
    for (let i = 1; i<= num; i++) {
        // result = result * i; OR
        result *=i;
        // num will multiply every time it loops
        // Ex 5 = 1 * 2 * 3 * 4 * 5 = 120
    }
    return result;
} 
console.log(factorialize(5))