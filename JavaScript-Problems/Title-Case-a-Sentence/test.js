// Return the provided string with the first letter of each word Capitalized.
// Make sure the rest of the other words are lowercase.

function tittleCase(str) {
    let words = str.toLowerCase().split(" "); // space in "" / str to lowercase all the words and turn them into an Arr
    for ( let i=0; i<words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1)
    // Accessing the arr with[i], then taking the first letter [0] and uppercasing it
    // + words[i] .slice() to get the rest of words from 1 to the rest of the index
    }
    return words.join(" "); // join to make it a string
}

console.log(tittleCase("I'm a little tea pot"))

// ------------- OR ------------//

function tittleCase2(str) {
   let tittles = str.toLowerCase().split(" ") // now you have an Arr of words lower cased
                        .map(function(elem) { // map will loop throu every elem/word and uppercasing the first letter
                            return elem[0].toUpperCase() + elem.slice(1); // then getting the rest of the words
                        })
                        return tittles.join(" ");
}

console.log(tittleCase2("I'm a super sore"))