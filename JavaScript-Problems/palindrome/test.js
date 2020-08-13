// Panlindrome
// A Palindrome is a word or sentence that's spelled both
// foward and backward.
// Return TRUE if the given string is a palindrome, Otherwise return FALSE

function palindrome(str) {
    var reversed = str.split("").reverse().join("")
    if (reversed == str) return true;
    // else
    return false
}

console.log(palindrome("racecar"));

// Remove all non-alphanumeric characters(punctuation, spaces and symbols) turn everything lowercase.
// so race car, RaceCar, race CAR should return true or racecar.
// look up Regex

function palindrome2(str) {
 var reg = /[\W_]/g; // W to macth all non alpha numeric, _ to get rid of underscores, g for global(entire string)
 
 var smallStr = str.toLowerCase().replace(reg, "") // match to reg, then replace to "" - nothning. so removing it.

 return smallStr

}
console.log(palindrome2("race Car"))
console.log(palindrome2("RaceCar"))
console.log(palindrome2("RaCecAR9*_"))

function palindrome3(str) {
    var reg = /[\W_]/g; // W to macth all non alpha numeric, _ to get rid of underscores, g for global(entire string)
    
    var smallStr = str.toLowerCase().replace(reg, "") // match to reg, then replace to "" - nothning. so removing it.
   
    let reverse = smallStr.split("").reverse().join("");
    if (reverse === smallStr) return true;
    // else
    return false
   
   }
   console.log(palindrome3("race CAR"))


// function palindromeArray(arr) {
//     //initialize to true
//     let isPalindrome = arr.split('');
//     //loop through half length of the array
//     for(let i = 0; i < arr.length / 2; i++) {
//         //check if first half is equal to the second half
//         if(arr[i] !== arr[arr.length - i - 1]){
//           isPalindrome = false; 
//           break;
//         }
//     }
//     return isPalindrome;
// }
// console.log(palindromeArray('wow'))