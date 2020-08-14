// Return an Array consisting of the largest number from each provided sub-array.

const { maxHeaderSize } = require("http");

function largestNumber(arr) {
    let maxes = []; //to store max numbers in this array
    for (let i = 0; i<arr.length; i++) {
        let tempMax = arr[i][0]; // every time the outer loop runs, make tempmax = to the first number of each inner array
        for ( let j = 0; j<arr[i].length; j++) { // nested loop to loop over the elem of the first/inner array
           let currentElem = arr[i][j]; // storing all the numbers or current elem in currentElem var
            if (currentElem >= tempMax) {
                tempMax = currentElem;
            }
           
        }
        maxes.push(tempMax); // push greater numbers into maxes
    }
    return maxes
}

console.log(largestNumber([ [4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1] ]))

// should return [5, 27,39, 1001]