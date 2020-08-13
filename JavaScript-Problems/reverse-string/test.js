// Reverse a String   //

function reverseString(str) {
var strArr = str.split("") // split will change the string to an Array
var reversedStrArray = strArr.reverse(); // to reverse strArr
var reversedString = reversedStrArray.join("") // join will convert the array to a string
return reversedString
}
console.log("reverseString: ", reverseString("Hello"))

//------- OR ----------//

function reverseString2(str) {
    return str.split("").reverse().join("")
    // split to turn str to array, .reverse() to reverse order, 
    // .join() to turn back to string
}
console.log("reverseString2: ", reverseString2("Hola"))

// --------- OR ---------- //
// for loop reverse  //

function reverseString3(str) {
    var final = "";
    for (let i = str.length - 1; i >= 0; i--) {
        final += str[i];
    }
    return final
}
console.log("ReversedString 3: ", reverseString3("HELLO"))




