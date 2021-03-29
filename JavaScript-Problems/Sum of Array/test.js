//  write and algorithm that takes an array of numbers as input
//  and calculates the sum of those numbers.

function sumNumbers(numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
       sum = sum + numbers[i]
    }
    return sum
  }
  console.log(sumNumbers([1, 3, 10]));
  
  //----------- OR ------------------// 
  
  function sumNumbers2(numbers){
      let result = 0;
    for (const number of numbers){
         result += number;
    }
    return result;
  }
  console.log(sumNumbers2([10, 10, 10]));
  
  // --- Not the Best solution but wanted to use .reduce()
  // --- Look it up
  function sumNumbers3(numbers){
    return numbers.reduce((sum,curNum) => sum + curNum, 0) 
  }
  console.log(sumNumbers([1, 3, 10]));