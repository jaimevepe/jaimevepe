// Return the length of the longest word in the provided sentence
// Response should be a number.

function findLongestWord(str) {
    let words = str.split(" "); // space
    let longest = "";
    for (let word of words) { // for of loop
        if (word.length > longest.length) longest = word;
      } // loops throu each word, checks the lengths, and longest word gets stores in
        // longest variable, eventually when it gets to JUMPED, it will stay
        // because no other word is bigger than JUMPED.
    return longest.length;
}

console.log(findLongestWord("The quick brown fox jumped over the laxy dog"))

// --------- OR -----------//
function findLongestWord2(str) {
    return str.split(" ").sort(function(a, b) {
        return b.length - a.length // return greates word to the short's word
    })[0];
}

console.log(findLongestWord2("The quick brown fox jumped over the laxy dog"))