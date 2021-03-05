function oddNumbers(l, r) {
    // make an array between l-r
    let numbers = []
    for (let i = l; i <= r; i++) {
        numbers.push(i)
    }
    // find odd numbers
    let oddNumbers = []
    for (let i = 0; i <= numbers.length; i++) {
        if (numbers[i] % 2 === 1) {
            oddNumbers.push(numbers[i])
        }
    }
    return oddNumbers
}

console.log(oddNumbers(2, 5)) // numbers between 2 - 5 so 2, 3, 4, 5