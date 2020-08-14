// Return the length of the longest word in the provided sentence
// Response should be a number.

function findLongestWord(str) {
    let words = str.split(" "); // space
    let longest = "";
    for (let word of words) { // for of loop
        if (word.length > longest.length) longest = word;
}
    return longest.length;
}

console.log(findLongestWord("The quick brown fox jumped over the laxy dog"))

// --------- OR -----------//
function findLongestWord2(str) {
    return str.split(" ").sort(function(a, b) {
        return b.length - a.length // return greates word to the short's word
    });
}

console.log(findLongestWord2("The quick brown fox jumped over the laxy dog"))