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

// function plusFive(num) {
//     return num + 5
// }

// console.log(plusFive(10));  // => 15
// console.log(plusFive(2));   // => 7
// console.log(plusFive(-8));  // => -3

/////////////////////////////////////////////////////////

// Write a function `threeOrSeven` that takes in a number and returns `true`
// if the number is divisible by either 3 or 7 and `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
//
// Examples:
// threeOrSeven(3);   // => true
// threeOrSeven(42);  // => true
// threeOrSeven(8);   // => false
//
// function threeOrSeven(num) {
//     if (num % 3 === 0 || num % 7 === 0){
//         return true 
//     }else{
//         return false 
//     }
// }

// function threeOrSeven(num) {
//     return num % 3 === 0 || num % 7 === 0
// }



// console.log(threeOrSeven(3));   // => true
// console.log(threeOrSeven(42))
// console.log(threeOrSeven(8))

///////////////////////////////////////////////

// Define a function `logBetween(lowNum, highNum)` that will print every number
// from `lowNum` to `highNum`, inclusive. Inclusive means that the range includes
// `lowNum` and `highNum`. Hint: this function only needs to print using `console.log`,
// it does not need to return.
//
// Examples:
//
// logBetween(-1, 2); // prints
// -1
// 0
// 1
// 2
//
// logBetween(14, 6); // prints nothing
//
// logBetween(4,6); // prints
// 4
// 5
// 6

// function logBetween(lowNum, highNum){
//     for (i = lowNum; i <= highNum; i++){
//         console.log(i)
//     }
// }

// console.log(logBetween(-1, 2))
// console.log(logBetween(14, 6))
// console.log(logBetween(4, 6))

/////////////////////////////////////////////////////////

// Write a function `logBetweenStepper(min, max, step)` that takes in 3 numbers as
// parameters. The function should print out numbers between `min` and `max` at `step`
// intervals. See the following examples.
//
// Examples:
//
// logBetweenStepper(5, 9, 1) // prints
// 5
// 6
// 7
// 8
// 9
//
// logBetweenStepper(-10, 15, 5) // prints
// -10
// -5
// 0
// 5
// 10
// 15

// function logBetweenStepper(min, max, step){
//     for (i = min; i <= max; i += step){
//         console.log(i)
//     }
// }

// console.log(logBetweenStepper(5, 9, 1))
// console.log(logBetweenStepper(-10, 15, 5))

/////////////////////////////////////////////////////////

// Write a function `printFives(max)` that prints out the multiples of 5 that are
// less than max.
//
// Try to solve this in two ways, using a conditional (if) and without using a
// conditional
//
// Example:
//
// printFives(20) // prints
// 0
// 5
// 10
// 15

// function printFives(max){
//     for (i = 0; i < max; i += 5){
//         console.log(i)
//     }
// }

// function printFives(max){
//     for (i = 0; i < max; i += 5){
//         console.log(i)
//     }
// }



// console.log(printFives(20))

//////////////////////////////////////////////////

// Write a function `printReverse(min, max)` that print out all numbers from max
// to min (exclusive), in reverse order.
//
// Examples
//
// printReverse(13, 18) // prints
// 17
// 16
// 15
// 14
//
// printReverse(90, 94) // prints
// 93
// 92
// 91

// function printReverse(min, max){
//     for (i = max - 1; i > min; i--){
//         console.log(i)
//     }
// }

// console.log(printReverse(13,18))
// console.log(printReverse(90, 94))

////////////////////////////////////////////////

// Write a function `sumNums(max)` that returns the sum of all positive numbers less
// than or equal to max.
//
// Examples:
//
// sumNums(4); // => 10
// sumNums(10); // => 55
// sumNums(365); // => 66795

// function sumNums(max){
//     sum = 0
//     for(i = 0; i <= max; i++){
//         sum += i
//     }
//     return sum 
// }

// console.log(sumNums(4))
// console.log(sumNums(10))
// console.log(sumNums(365))

////////////////////////////////////////////////////////

// Define a function `isFactorOf(number, factor)` that returns `true` if `factor`
// is a factor of `number`. `false` otherwise. A factor is a number that divides
// another number without a leftover remainder.
//
// Examples:
//
// isFactorOf(6,2); // => true
// isFactorOf(-6, 2); // => true
// isFactorOf(5,0); // => false
// isFactorOf(22, 7); // => false


// function isFactorOf(number, factor){
//     return number % factor === 0 
// }

// console.log(isFactorOf(6, 2))
// console.log(isFactorOf(-6, 2))
// console.log(isFactorOf(5, 0))
// console.log(isFactorOf(22, 7))

///////////////////////////////////////////////////////////

// Define a function `fizzBuzz(max)` that takes a number and prints  every number
// from 0 to `max` that is divisible by either 3 or 5, but not both.
//
// Examples:
//
// fizzBuzz(20); // prints
// 3
// 5
// 6
// 9
// 10
// 12
// 18

// function fizzBuzz(max){
//     for (i = 0; i < max; i++){
//         if((i % 3 === 0 && i % 5 !== 0) || (i % 3 !== 0 && i % 5 === 0)){
//             console.log(i)
//         }
//     }
// }
// console.log(fizzBuzz(20))
//////////////////////////////////////////////////////////////

// Define a function `isPrime(number)` that returns `true` if `number` is prime.
// Otherwise, false. Assume `number` is a positive integer.
//
// Examples:
//
// isPrime(2); // => true
// isPrime(10); // => false
// isPrime(11); // => true
// isPrime(9); // => false
// isPrime(2017); // => true

// function isPrime(number){
//     if (number < 2) return false 
//     // if (number === 2) return true 
//     for(i = 2; i < number;i++){
//         console.log(i)
//         // if (number % i === 0){
//         //     // return false 
//         // }
//     }
//     // return true 
// }

// console.log(isPrime(2))
// console.log(isPrime(10))
// console.log(isPrime(11))
// console.log(isPrime(9))
// console.log(isPrime(2017))

///////////////////////////////////////////////////////


