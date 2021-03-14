// arr is that you input, k is what you are looking for

function findNumber(arr, k) {
    console.log(arr)
    console.log("This is K: ", k)
    let result = arr.find((num) => (num === k ? true : false));
    if (result) {
        return "YES";
    } else {
        return "NO";
    }
}
console.log(findNumber([1, 2, 3, 4, 5], 1))