// Write a function `isOdd` that takes in a number as an argument and returns `true`
// if the number is odd and returns `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
// Examples:
// isOdd(2);    // => false
// isOdd(5);    // => true
// isOdd(-17);  // => true

// function isOdd(num) {
//     if (num % 2 === 0){
//         return false 
//     }else{
//         return true 
//     }
// }

// function isOdd(num){
//     return num % 2 !== 0 
// }

// console.log(isOdd(2))
// console.log(isOdd(5))
// console.log(isOdd(-17))

///////////////////////////////////////////////////////

// Write a function `plusFive` that takes in a number as an argument and returns
// the sum of that number and 5.
//
// Examples:
// plusFive(10);  // => 15
// plusFive(2);   // => 7
// plusFive(-8);  // => -3
//

function plusFive(num) {
    return num + 5
}

console.log(plusFive(10));  // => 15
console.log(plusFive(2));   // => 7
console.log(plusFive(-8));  // => -3