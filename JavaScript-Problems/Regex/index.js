//regex
//regex literals
let chickenRegex = /chicken/;
//regex is used on strings
//can use different methods

let string1 = "I love chicken";
let string2 = "I love mushrooms";
let string3 = "The Chicken and the Pig are friends";

console.log("string1", chickenRegex.test(string1))//true
console.log("string2", chickenRegex.test(string2))//false since string2 has no chicken.
console.log("string3", chickenRegex.test(string3))//false since chicken is capitol C

chickenRegex = /chicken/i; // i flag will check wether is a capital letter word or not.
console.log("string3 with i flag", chickenRegex.test(string3))

let orRegex = /chicken|mushrooms/i; // or = | orRegex included mushroom in the Search with or/operator
console.log(orRegex.test(string1))
console.log(orRegex.test(string2))
console.log(orRegex.test(string3))


let string4 = "Chickens are great, chicken are birds, chickens are funny, Chickens are delicious";

let globalRegex = /chicken/gi; // g is global includes all chickens in the string, i flag to include capitol letters
console.log(string4.match(globalRegex)); // match() turns the test into an Array with the g/global flag
console.log(string4.match(globalRegex).map(word => word.toUpperCase())); // just cuz

//--------------------------------------------//

const string5 = "hug, mug, pug, snug, fun, sun, gun, p5un";

let unRegex = /[a-z]un/g // a-z is to include what ever word is before un, same with the other side
                        // it could include whatever word AFTER un
console.log("string5", string5.match(unRegex));

let ugRegex = /[a-z]ug/g // . period is a wildcard simbol, it could be anything
console.log("string5 ugRegex", string5.match(ugRegex));


//-------------------------//
let string6 = "30 32 35 42 45 49 56 50 59 78"

console.log("String6", string6.match(/[0-9][0-9]/g))// each [] is for each number ex 30
console.log("String6", string6.match(/3[0-9]/g)) // for just return the 30's
console.log("String6", string6.match(/[5-5][0-9]/g)) // for just 50's same as 30's but dif way

//----------------------------//

let string7 = "443 21 32 4 8 555 965 26 31 1 5 5555 456215 1144";

console.log("string7", string7.match(/[0-9][0-9][0-9]/g)); // to get just three digit numbers
console.log("string7", string7.match(/[0-9]{3}/g)); // other way to get three digit numbers
console.log("string7", string7.match(/[0-9]{2}/g));
console.log("string7", string7.match(/[0-9]{2,4}/g));//return 2-4 digit numbers
console.log("string7", string7.match(/[0-9]{3,}/g));// return 3 digits OR bigger.
// {n} exact amount
// {n,n} number to number
// {n,} minimum n amount


