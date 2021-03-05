

function findNumber(arr, k) {
    let result = arr.find((num) => (num === k ? true : false));
    if (result) {
        return "YES";
    } else {
        return "NO";
    }
}