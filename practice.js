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

// Write a function `logEach(array)` that prints every element of the array and its
// index to the console.
//
// Example:
//
// logEach(["Anthony", "John", "Carson"]); // prints
// 0: Anthony
// 1: John
// 2: Carson

// function logEach(array){
//     for (i = 0; i < array.length; i++){
//         console.log(i + ': ' + array[i])
//     }
// }

// console.log(logEach(["Anthony", "John", "Carson"]))

/////////////////////////////////////////////////////

// Write a function range(start, end) that returns an array that contains all
// numbers between 'start' and 'end' in sequential order.
//
// Examples:
//
// range(1,4) => [1,2,3,4]
// range(4,2) => []

// function range(start, end){
//     let array = [] 
//     for (i = start; i <= end; i++){
//         array.push(i)
//     }
//     return array 
// }

// console.log(range(1, 4))
// console.log(range(4, 2))

///////////////////////////////////////////////////////////

// Write a function sumArray(array) that takes in an array of numbers that returns the
// total sum of them.
//
//
// Examples:
//
// sumArray([5, 6, 4]); // => 15
// sumArray([7, 3, 9, 11]); // => 30

// function sumArray(array){
//     let sum = 0;
//     for(i = 0; i <= array.length - 1; i++){
//         sum += array[i]
//     }

//     return sum 
// }

// console.log(sumArray([5, 6, 4]))
// console.log(sumArray([7, 3, 9, 11]))

//////////////////////////////////////////////////////////

// Write a function `capWords(words)` that takes in an array of words and
// returns a new array where every word is capitalized.
//
// Example:
//
// capWords(['hello', 'boOtCaMp', 'PREP!']); // => ['HELLO', 'BOOTCAMP', 'PREP!']


// function capWords(words){
//     let arr = []
//     for (i = 0; i <= words.length - 1; i++){
//         arr.push(words[i].toUpperCase())
//     }
//     return arr 
// }

// console.log(capWords(['hello', 'boOtCaMp', 'PREP!'])); // => ['HELLO', 'BOOTCAMP', 'PREP!'])
///////////////////////////////////////////////////////////////


// Write a function `wordPeriods(sentence)` that takes in a sentence and returns a new
// sentence where every word has period after it.
//
// Examples:
//
// wordPeriods('hello world'); // => 'hello. world.'
// wordPeriods('what is the weather today'); // => 'what. is. the. weather. today.'

// function wordPeriods(sentence){
//     let sentSplit = sentence.split(' ')
//     let newSent = []
//     i = 0 
//     while (i <= sentSplit.length - 1){
//         newSent.push(sentSplit[i] + '.')
//         i += 1
//     }
//     return newSent
// }

// console.log(wordPeriods('what is the weather today'))

/////////////////////////////////////////////////////////////////////

// Write a function `maxValue(array)` that returns the largest value in `array`. [1,2,5]
// Assume `array` is an array of numbers.
//
// Examples:
//
// maxValue([12, 6, 43, 2]); // => 43
// maxValue([]); // => null
// maxValue([-4, -10, 0.43]); // => 0.43 



///////////////////////////////////////////////////////////////////////////

// Write a function `myIndexOf(array, target)` that takes in an array of
// numbers and a target number as arguments. It should return the index value
// of the target if it is present in the array or -1 if it is not present.
//
// CONSTRAINT: Do not use the indexOf method.
//
// Examples:
//
// myIndexOf([1,2,3,4],4) => 3
// myIndexOf([5,6,7,8],2) => -1

// function myIndexOf(array, target){
//     let final = -1
//     for (i = 0; i <= array.length - 1; i++){
//         if (target === array[i]){
//             return i 
//         }
//     }
//     return final 
// }

// console.log(myIndexOf([5, 6, 7, 8], 2))

////////////////////////////////////////////////////////////////////

// Write a function `factorArray(array, number)` that takes in an array of
// numbers and a number and returns an array of all the factors.
//
// Examples:
//
// factorArray([2,3,4,5,6],20) => [2,4,5]
// factorArray([2,3,4,5,6],35) => [5]
// factorArray([10,15,20,25],5) => []

// function factorArray(array, number){
//     let arr = [];
//     for (i = 0; i <= array.length; i++){
//         if (number % array[i] === 0){
//             arr.push(array[i])
//         }
//     }
//     return arr 
// }

// console.log(factorArray([10, 15, 20, 25], 5))

///////////////////////////////////////////////////////////////////

/******************************************************************************
** Write a function average(num1, num2) that returns the average of two numbers.
**
** Examples:
**
** average(10, 20); // => 15
** average(5, 7); // => 6
** average(24, 32); // => 28
*/

// function average(num1, num2) {
//     return (num1 + num2) / 2.0 
// }

// console.log(average(24, 32))

///////////////////////////////////////////////////////////////////

/*******************************************************************************
** Write a function tripler(array) that takes in an array and returns a new array
** containing 3 times every element of the original array.
**
** Examples:
**
** tripler([1,2,3]); // => [ 3, 6, 9 ]
** tripler([4, 1, 7]); // => [ 12, 3, 21 ]
*/

// function tripler(array) {
//     let newArr = [];
//     for (i = 0; i <= array.length - 1; i++){
//         newArr.push(array[i] * 3)
//     }
//     return newArr
// }

// console.log(tripler([4, 1, 7]))

//////////////////////////////////////////////////////////////



/******************************************************************************
** Write a function oddRange(end) that takes in a number and returns an array containing
** all positive odd numbers up to `end`.
**
** Examples:
**
** oddRange(13); // => [ 1, 3, 5, 7, 9, 11, 13 ]
** oddRange(6); // => [ 1, 3, 5 ]
*/

// function oddRange(end) {
//     let newArr = [];
//     for (i = 1; i <= end; i++){
//         if (i % 2 !== 0){
//             newArr.push(i)
//         }
//     }
//     return newArr
// }

// console.log(oddRange(6))


//////////////////////////////////////////////////////////////



