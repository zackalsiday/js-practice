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

/*******************************************************************************
Write a function reverseOddRange(start, end) that returns an array containing all
odd numbers between 'start' and 'end'  in reverse-sequential order. Use a
loop to do this.

Examples:

reverseOddRange(10, 20) => [ 19, 17, 15, 13, 11 ]
reverseOddRange(3, 7) => [ 7, 5, 3 ]
reverseOddRange(9, 5) => []
*******************************************************************************/

// function reverseOddRange(start, end) {
//     let newArr = []
//     if (end < start) return newArr 
//     for (i = end; i >= start; i-- ){
//         if (i % 2 !== 0){
//             newArr.push(i)
//         }
//     }
//     return newArr
// }

// console.log(reverseOddRange(9, 5))

//////////////////////////////////////////////////////////////

/*******************************************************************************
Write a function isSquare(number) that takes in a number and returns true if the
number is a perfect square, false otherwise. A perfect square is a number that is
the result of squaring another number. For example, 3 * 3 is 9, so 9 is perfect
square. 4 * 4 is 16, so 16 is a perfect square. 18 is not a perfect square.

Examples:

isSquare(7) => false
isSquare(15) => false
isSquare(18) => false
isSquare(25) => true
isSquare(36) => true
isSquare(9) => true
isSquare(16) => true
*******************************************************************************/

// function isSquare(number) {
//     for (i = 1; i <= number; i++){
//         if(i * i === number){
//             return true
//         }else if(i * i > number){
//             return false 
//         }
//     }
//     return false 
// }

// console.log(isSquare(7))
// console.log(isSquare(15))
// console.log(isSquare(18))
// console.log(isSquare(25))
// console.log(isSquare(36))
// console.log(isSquare(9))
// console.log(isSquare(16))

//////////////////////////////////////////////////////////////////

/*******************************************************************************
Write a function mysticNumbers(max) that returns an array of numbers less than `max`.
Each number should be either divisible by 4 or 6, BUT NOT BOTH. The numbers
should be in reverse-sequential order.

Examples:

mysticNumbers(25) => [ 20, 18, 16, 8, 6, 4 ]
mysticNumbers(14) => [ 8, 6, 4 ]
*******************************************************************************/

// function mysticNumbers(max) {
//     let newArr = [];
//     for (i = max - 1; i >= 1; i--){
//         if ((i % 4 === 0 && i % 6 !== 0) || (i % 4 !== 0 && i % 6 === 0) ){
//             newArr.push(i)
//         }
//     }
//     return newArr
// }

// console.log(mysticNumbers(14))

////////////////////////////////////////////////////////////////////////////

/******************************************************************************
Write a function firstOrLast(array) that takes in an array and returns either:

- the first element if there is an even number of elements in the array

- the last element if there is an odd number of elemetns in the array

You can assume the array contains at least one element.

Examples:

firstOrLast(['a', 'b', 'c', 'd']) => 'a'
firstOrLast(['Jenny', 'Mary', 'Mark']) => 'Mark'
*******************************************************************************/

// function firstOrLast(array) {
//     return array.length % 2 === 0 ? array[0] : array[array.length - 1]
// }

// console.log(firstOrLast(['Jenny', 'Mary', 'Mark']))

/////////////////////////////////////////////////////////////////////////////

/*******************************************************************************
Write a function fromMeToYou(sentence) that returns an string where the word 'me'
is replaced with 'you'.

Examples:

fromMeToYou('that made me laugh') => 'that made you laugh'
fromMeToYou('love me or hate me') => 'love you or hate you'
*******************************************************************************/

// function fromMeToYou(sentence) {
//     let splitSent = sentence.split(' ')
//     let newSent = []
//     for (i = 0; i <= splitSent.length - 1; i++){
//         if (splitSent[i] === 'me'){
//             newSent.push('you')
//         }else{
//             newSent.push(splitSent[i])
//         }
//     }
//     return newSent.join(' ')
// }

// console.log(fromMeToYou('love me or hate me'))

//////////////////////////////////////////////////////////////////////////////

// Write a function `isInside(array, ele)` that returns true if `ele` is an element
// inside of the `array`, false otherwise.
//
// HINT: use indexOf
//
// isInside(['chase', 'phi', 'eliot'], 'eliot'); // => true
// isInside(['chase', 'phi', 'eliot'], 'fred'); // => false

// function isInside(array, ele){
//     return array.indexOf(ele) !== -1
// }

// console.log(isInside(['chase', 'phi', 'eliot'], 'fred'))

////////////////////////////////////////////////////////////////////

// Write a function `reverseStr(str)` that takes in a string as a parameter and
// returns the string but with the characters in reverse.
//
// Examples:
//
// reverseStr('bootcamp'); //=> 'pmactoob'
// reverseStr('App Academy'); //=> 'ymedacA ppA' 

// function reverseStr(str){
//     return str.split('').reverse().join('')
// }

// console.log(reverseStr('App Academy'))

//////////////////////////////////////////////////////////////////////


// Write a function `luckySevens(max)` that returns an array of all numbers up
// to max (inclusive) that are divisible by 7.
//
// Examples:
//
// luckySevens(25); // => [ 7, 14, 21 ]
// luckySevens(42); // => [ 7, 14, 21, 28, 35, 42 ]

// function luckySevens(max){
//     let newArr = [];
//     for (i = 7; i <= max; i += 7){
//         newArr.push(i)
//     }
//     return newArr
// }

// console.log(luckySevens(42))

///////////////////////////////////////////////////////////////////////

// Write a function `copyMachine(element, num)` that takes in an element and a number
// it should return an array of length `num` that is filled with `element`.
//
// Examples:
//
// copyMachine('candy', 0); // => []
// copyMachine('candy', 2); // => [ 'candy', 'candy' ]
// copyMachine('bread', 4); // => [ 'bread', 'bread', 'bread', 'bread' ]
// copyMachine(11, 6); // => [ 11, 11, 11, 11, 11, 11 ]

// function copyMachine(element, num){
//     let newArr = []
//     for (i = num; i > 0; i--){
//         newArr.push(element)
//     }
//     return newArr
// }

// console.log(copyMachine(11, 6))

/////////////////////////////////////////////////////////////////

// Write a function `everyOtherWord(sentence)` that takes in a sentence and returns
// an array containing every other word in that sentence.
//
// Examples:
//
// everyOtherWord('hello how are you doing on this lovely day?'); // => [ 'hello', 'are', 'doing', 'this', 'day?' ]
// everyOtherWord('the weather is wonderful'); // => [ 'the', 'is' ]

// function everyOtherWord(sentence){
//     let newSent = []
//     let splitSent = sentence.split(' ')
//     for (i = 0; i <= splitSent.length - 1; i++){
//         if ( i % 2 === 0){
//             newSent.push(splitSent[i])
//         }
//     }
//     return newSent
// }

// console.log(everyOtherWord('the weather is wonderful'))

///////////////////////////////////////////////////////////////////

// Write a function `wordYeller(sentence)` that takes in a sentence string as
// input. It should return the sentence where every word has an exclamation
// point behind it, except words that already have punctuation. Punctuation
// marks are ". , ! ? ; :"
//
// Example 1
// var sent = "Stop it now! Please, wont you stop?";
// var yelledWords = wordYeller(sent);
// yelledWords === "Stop! it! now! Please, wont! you! stop?"; // => true
//
// Example 2
// var words = "Go to the store and grab the following: milk, bread, run, and cake";
// wordYeller(words) === "Go! to! the! store! and! grab! the! following: milk, bread, run, and! cake!"; // => true

// function wordYeller(sentence){
//     const punc = ['.',',','!','?',';',':']
//     let sentSplit = sentence.split(' ')
//     let newSent = []
//     for (i = 0; i <= sentSplit.length - 1; i++){
//         if (punc.indexOf(sentSplit[i][sentSplit[i].length - 1]) === -1){
//             newSent.push(sentSplit[i] + '!')
//         }else{
//             newSent.push(sentSplit[i])
//         }
//     }
//     return newSent.join(' ')
// }
// console.log(wordYeller("Go to the store and grab the following: milk, bread, run, and cake"))

///////////////////////////////////////////////////////////////////////////

// Write a function `arraySubstring(words, str)` that takes in an array of
// strings and a string as arguments and returns an array where each element is
// replaced with true if the string is a substring of the element and false if
// it is not.
//
// Examples:
//
// arraySubstring(["hello", "history", "helix", "hellos"],"hel")
// => [true, false, true, true]
// arraySubstring(["prefix", "problems", "pragmatic", "prefer"], "pre")
// => [true, false, false, true]

// function arraySubstring(words, str){
//     let newArr = []
//     for (i = 0; i <= words.length - 1; i++){
//         if (words[i].indexOf(str) !== -1){
//             newArr.push(true)
//         }else{
//             newArr.push(false)
//         }
//     }
//     return newArr 
// }

// console.log(arraySubstring(["prefix", "problems", "pragmatic", "prefer"], "pre"))

///////////////////////////////////////////////////////////////////////////////////


// Write a function evenCaps(sentence) that takes in a sentence as an
// argument and returns the same string with each even index being
// capitalized. Index 0 counts as even.
//
// Examples:
//
// evenCaps("Tom got a small piece of pie")
// => "ToM GoT A SmAlL PiEcE Of pIe"
// evenCaps("the book is in front of the table")
// => "ThE BoOk iS In fRoNt oF ThE TaBlE" 

// function evenCaps(sentence){
//     let sentSplit = sentence.split('')
//     let newSent = []
//     for (i = 0; i <= sentSplit.length - 1;i++){
//         if (i % 2 === 0){
//             newSent.push(sentSplit[i].toUpperCase())
//         }else{
//             newSent.push(sentSplit[i])
//         }
//     }
//     return newSent.join('')
// }

// console.log(evenCaps("the book is in front of the table"))

///////////////////////////////////////////////////////////////

/***********************************************************************
Write a function `diffArrayLen(arr1, arr2)` that takes two arrays. The
function should return true if the arrays have different lengths. The
function should return false otherwise.

Examples:

var a1 = ['a', 'b', 'c'];
var a2 = ['w', 'x', 'y'];
var a3 = [1, 3, 7, 4];

diffArrayLen(a1, a2); // => false
diffArrayLen(a1, a3); // => true
***********************************************************************/
// var a1 = ['a', 'b', 'c'];
// var a2 = ['w', 'x', 'y'];
// var a3 = [1, 3, 7, 4];
// function diffArrayLen(arr1, arr2) {
//     return arr1.length !== arr2.length 
// }

// console.log(diffArrayLen(a1, a3))

////////////////////////////////////////////////////////////////

/***********************************************************************
Write a function `mirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples:

Examples:

mirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
mirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
***********************************************************************/

// function mirrorArray(array) {
//     let newArr = array 
//     for (i = array.length -1; i >= 0; i--){
//         newArr.push(array[i])
//     }
//     return newArr
// }

// console.log(mirrorArray(['a', 'b', 'c', 'd']))

//////////////////////////////////////////////////////////////////

/***********************************************************************
Write a function `avgValue(array)` that takes in an array of numbers and
returns the average number.

Examples:

avgValue([10, 20]); // => 15
avgValue([2, 3, 7]); // => 4
avgValue([100, 60, 64]); // => 74.66666666666667
***********************************************************************/

// function avgValue(array) {
//     let sum = 0;
//     for (i = 0; i <= array.length - 1;i++){
//         sum += array[i]
//     }
//     return sum / array.length 
// }

// console.log(avgValue([100, 60, 64]))

/////////////////////////////////////////////////////////////

/***********************************************************************
Write a function `abbreviate(sentence)` that takes in a sentence string
and returns a new sentence where words longer than 4 characters have
their vowels removed. Assume the sentence has all lowercase characters.
Feel free to use the array below in your solution:

var vowels = ['a', 'e', 'i', 'o', 'u'];

Examples:

abbreviate('bootcamp prep is fun'); // => 'btcmp prep is fun'
abbreviate('programming is fantastic'); // => 'prgrmmng is fntstc'
abbreviate('hello world'); // => 'hll wrld'
abbreviate('how are you'); // => 'how are you'
***********************************************************************/

// function abbreviate(sentence) {
//     let splitSent = sentence.split(' ')
//     let newSent = []
//     for ( var i = 0; i < splitSent.length ;i++){

//         if (splitSent[i].length >= 5){
//             var word = splitSent[i]
//             newSent.push(removeVowels(word))
//         }else{
//             newSent.push(word)
//         }
//     }
//     return newSent.join(' ')
// }

// function removeVowels(word) {
//     var vowels = ['a', 'e', 'i', 'o', 'u'];
//     let sWord = word.split('')
//     let newWord = []
//     for ( var i = 0; i <= sWord.length - 1;i++){
//         if (vowels.indexOf(sWord[i]) === -1){
//             newWord.push(sWord[i])
//         }
//     }
//     return newWord.join('')
// }

// console.log(abbreviate('hello world'))

//////////////////////////////////////////////////////////////////////////////////////////////////

/***********************************************************************
Write a function `firstLastCap(sentence)` that takes in a sentence and
returns a new sentence where the first and last letters of each word is
uppercase. All other characters should be lowercase.

Examples:

firstLastCap('hello BOOTCAMP PrEp'); // =>'HellO BootcamP PreP'
firstLastCap('what is on the radio'); // =>'WhaT IS ON ThE RadiO'
***********************************************************************/

// function firstLastCap(sentence) {
//     let lowerSentence = sentence.toLowerCase().split(' ')
//     let newSent = []
//     for (i = 0; i <= lowerSentence.length - 1;i++){
//         let first = lowerSentence[i][0].toUpperCase() + lowerSentence[i].slice(1, -1) + lowerSentence[i][lowerSentence[i].length - 1].toUpperCase()
//         newSent.push(first)
//     }
//     return newSent.join(' ')
// }

// console.log(firstLastCap('what is on the radio'))


////////////////////////////////////////////////////////////////////////////////////////////////////

/***********************************************************************
Write a function `catBuilder(name, color, toys)` that returns a cat object
object with the corresponding properties.

Example:

var cat1 = catBuilder('Whiskers', 'black', ['scratching-post', 'yarn']);
cat1; // => { name: 'Whiskers', color: 'black', toys: ['scratching-post', 'yarn'] }

var cat2 = catBuilder('Nyan', 'rainbow', ['poptarts']);
cat2; // => { name: 'Nyan', color: 'rainbow', toys: [ 'poptarts' ] }
***********************************************************************/

// function catBuilder(name, color, toys) {
//     return {'name': name, 'color': color, 'toys': toys}
// }

// console.log(catBuilder('Nyan', 'rainbow', ['poptarts']))

/////////////////////////////////////////////////////////////////////////////////////////////////////


/***********************************************************************
Write a function `printObject(obj)` that prints out all key-value pairs
of an object. HINT: use a for loop.

Example:

var bootcamp = {
 name: 'App Academy',
 color: 'Red',
 population: 120,
};

printObject(bootcamp); // prints

`name - App Academy`
`color - Red`
`population - 120`
***********************************************************************/

// var bootcamp = {
//     name: 'App Academy',
//     color: 'Red',
//     population: 120,
// };
// function printObject(obj) {
//     for (const keys in obj){
//         console.log( `${keys}: ${obj[keys]}`)
//     }
// }

// console.log(printObject(bootcamp))

////////////////////////////////////////////////////////////////////////////////////////////////////////////

/***********************************************************************
Write a function `getFullName(person)` that takes in an person object
and returns a string containing their full name.

Examples:

var p1 = {firstName: 'John', lastName: 'Doe'};
getFullName(p1); // => 'John Doe'

var p2 = {firstName: 'Charlie', lastName: 'Brown', age: 9};
getFullName(p2); // => 'Charlie Brown'
***********************************************************************/

// function getFullName(person) {
//     return person.firstName + ' ' + person.lastName
// }

// var p1 = { firstName: 'John', lastName: 'Doe' };
// console.log(getFullName(p1)); // => 'John Doe'

// var p2 = { firstName: 'Charlie', lastName: 'Brown', age: 9 };
// console.log(getFullName(p2)); // => 'Charlie Brown'

/////////////////////////////////////////////////////////////////////////////////////////////////////

/***********************************************************************
Write a function `valuePair(obj1, obj2, key)` that takes in two objects
and a key (string). The function should return an array containing the
corresponding values of the objects for the given key.

Examples:

var object1 = {name: 'One', location: 'NY', age: 3};
var object2 = {name: 'Two', location: 'SF'};

valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]
valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]
***********************************************************************/

// function valuePair(obj1, obj2, key) {
//     return [obj1[key], obj1[key]]
// }

// var object1 = { name: 'One', location: 'NY', age: 3 };
// var object2 = { name: 'Two', location: 'SF' };

// console.log(valuePair(object1, object2, 'location')); // => [ 'NY', 'SF' ]
// console.log(valuePair(object1, object2, 'name')); // => [ 'One', 'Two' ]

///////////////////////////////////////////////////////////////////////////////////////////////////


/***********************************************************************
Write a function `doesKeyExist(obj, key)` that takes in an object and a
key and returns true if the key is inside the object and false if the
key is not inside the object.

Examples:

var obj1 = {bootcamp: 'App Academy', course: 'Bootcamp Prep'}
doesKeyExist(obj1, 'course'); // => true
doesKeyExist(obj1, 'name'); // => false
***********************************************************************/

// function doesKeyExist(obj, key) {
//     return (key in obj)
// }

// var obj1 = { bootcamp: 'App Academy', course: 'Bootcamp Prep' }
// console.log(doesKeyExist(obj1, 'course'))
// console.log(doesKeyExist(obj1, 'name'))

//////////////////////////////////////////////////////////////////////////////////////////////////


/***********************************************************************
Write a function `adults(people)` that takes in an array of person
objects. The function should return an array containing the names of
those who have an age of 18 or higher.

Example:

var ppl = [
  {name: 'John', age: 20},
  {name: 'Jim', age: 13},
  {name: 'Jane', age: 18},
  {name: 'Bob', age: 7}
];

adults(ppl); // => [ 'John', 'Jane' ]
***********************************************************************/

// function adults(people) {
//     let arr = []
//     for (i = 0; i <= people.length - 1; i++){
//         if (people[i].age >= 18){
//             arr.push(people[i].name)
//         }
//     }
//     return arr 
// }

// var pp = [
//     { name: 'John', age: 20 },
//     { name: 'Jim', age: 13 },
//     { name: 'Jane', age: 18 },
//     { name: 'Bob', age: 7 }
// ];

// console.log(adults(pp)); // => [ 'John', 'Jane' ]

/////////////////////////////////////////////////////////////////////////////////////////////////////

/***********************************************************************
Write a function `hasFavoriteFood(obj, food)` that takes in an object
and a food string. The function should return true if the object has
that favorite food. See the examples below.

Examples:

var dog = {
  name: 'Fido',
  favoriteFoods: ['chicken', 'sausage', 'scooby snacks']
}

hasFavoriteFood(dog, 'sausage'); // => true
hasFavoriteFood(dog, 'cat food'); // => false

var person = {
  name: 'Al',
  favoriteFoods: ['pizza', 'burgers', 'ramen']
}

hasFavoriteFood(person, 'burgers'); // => true
hasFavoriteFood(person, 'fish'); // => false
***********************************************************************/

// function hasFavoriteFood(obj, food) {
//     return obj.favoriteFoods.indexOf(food) !== - 1
// }

// var dog = {
//     name: 'Fido',
//     favoriteFoods: ['chicken', 'sausage', 'scooby snacks']
// }

// console.log(hasFavoriteFood(dog, 'sausage')); // => true
// console.log(hasFavoriteFood(dog, 'cat food')); // => false

// var person = {
//     name: 'Al',
//     favoriteFoods: ['pizza', 'burgers', 'ramen']
// }

// console.log(hasFavoriteFood(person, 'burgers')); // => true
// console.log(hasFavoriteFood(person, 'fish')); // => false

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/***********************************************************************
Write a function `countScores(people)` that takes in an array of score
objects (people) as its input. A score object has two key-value pairs:
a name (string) and a score (number). `countScores(people)` should
return an object that has key-value pairs where each name is a key and
the value is their total score.

Example 1

var ppl = [ {name: "Anthony", score: 10},
            {name: "Fred", score : 10},
            {name: "Anthony", score: -8},
            {name: "Winnie", score: 12}];

var countPpl = countScores(ppl);
countPpl; //=> { Anthony: 2, Fred: 10, Winnie: 12 }

Example 2

var peeps = [
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2}
];
countScores(peeps); //=> { Anthony: 4, Fred: 4, Winnie: 6 }
***********************************************************************/


// function countScores(people) {
//     let obj = {}
//     for (i = 0; i <= people.length - 1; i++){
//         let name = people[i].name
//         obj[name] === undefined ? obj[name] = people[i].score : obj[name] += people[i].score
//     }
//     return obj 
// }

// var ppl = [{ name: "Anthony", score: 10 },
// { name: "Fred", score: 10 },
// { name: "Anthony", score: -8 },
// { name: "Winnie", score: 12 }];

// var countPpl = countScores(ppl);
// console.log(countPpl); //=> { Anthony: 2, Fred: 10, Winnie: 12 }



// var peeps = [
//     { name: "Anthony", score: 2 },
//     { name: "Winnie", score: 2 },
//     { name: "Fred", score: 2 },
//     { name: "Winnie", score: 2 },
//     { name: "Fred", score: 2 },
//     { name: "Anthony", score: 2 },
//     { name: "Winnie", score: 2 }
// ];
// console.log(countScores(peeps)); //=> { Anthony: 4, Fred: 4, Winnie: 6 }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/***********************************************************************
In these exercises we will be practicing decomposition by building
multiple functions. Be sure to test each function thoroughly as you go
before moving on to the next problem. Each function will require the
previous to solve.
***********************************************************************/


/***********************************************************************
Write a function `isPrime(number)` that returns a boolean indicating if
`number` is prime or not. Assume `number` is a positive integer.

Examples:

isPrime(2); // => true
isPrime(1693); // => true
isPrime(15); // => false
isPrime(303212); // => false
***********************************************************************/

// function isPrime(number) {
//     if (number < 2 ) return false 
//     for (var i = 2; i < number; i++){
//         if (number % i === 0){
//             return false 
//         }
//     }
//     return true 
// }

// console.log(isPrime(2)); // => true
// console.log(isPrime(1693)); // => true
// console.log(isPrime(15)); // => false
// console.log(isPrime(303212)); // => false

/***********************************************************************
Using the `isPrime` function you made, write a function `firstNPrimes(n)`
that returns an array of the first `n` prime numbers.

Examples:

firstNPrimes(0); // => []
firstNPrimes(1); // => [2]
firstNPrimes(4); // => [2, 3, 5, 7]
***********************************************************************/

// function firstNPrimes(n) {
//     let arr = [];
//     for (var i = 0; arr.length < n; i++){
//         if (isPrime(i)) arr.push(i)
//     }
//     return arr 
// }

// console.log(firstNPrimes(0)); // => []
// console.log(firstNPrimes(1)); // => [2]
// console.log(firstNPrimes(4)); // => [2, 3, 5, 7]

/***********************************************************************
Using `firstNPrimes`, write a function `sumOfNPrimes(n)` that returns
the sum of the first `n` prime numbers.

Examples:

sumOfNPrimes(0); // => 0
sumOfNPrimes(1); // => 2
sumOfNPrimes(4); // => 17
***********************************************************************/

// function sumOfNPrimes(n) {
//     let arrOfPrimes = firstNPrimes(n)
//     let sum = 0;
//     for ( var i = 0; i <= arrOfPrimes.length - 1;i++){
//         sum += arrOfPrimes[i]
//     }
//     return sum 
// }

// console.log(sumOfNPrimes(0)); // => 0
// console.log(sumOfNPrimes(1)); // => 2
// console.log(sumOfNPrimes(4)); // => 17

//////////////////////////////////////////////////////////////////////////////////////////////

/***********************************************************************
Write a function `peakFinder(array)` that takes in an array of numbers.
It should return an array containing the indices of all the peaks. A
peak is an element that is greater than both of its neighbors. If it is
the first or last element, it is a peak if it is greater than its one
neighbor. Assume the array has a length of at least 2.
Hint: this can be solved using a single loop
Examples:
peakFinder([1, 2, 3, 2, 1]); //=> [2]
peakFinder([2, 1, 2, 3, 4, 5]); //=> [0, 5]
peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5]); //=> [2, 6, 8]
***********************************************************************/

// function peakFinder(array) {
//     let arr = [];
//     for (var i = 0; i <= array.length - 1; i++){
//         if (i === 0 && (array[0] > array[1])){
//             arr.push(0)
//         } else if (i === array.length - 1 && array[array.length - 1] > array[array.length - 2]){
//             arr.push(array.length - 1)
//         } else if (array[i] > array[i + 1] && array[i] > array[i - 1] ){
//             arr.push(i)
//         }
//     }
//     return arr 
// }

// console.log(peakFinder([1, 2, 3, 2, 1])); //=> [2]
// console.log(peakFinder([2, 1, 2, 3, 4, 5])); //=> [0, 5]
// console.log(peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5])); //=> [2, 6, 8]

///////////////////////////////////////////////////////////////////////////////////////////////

/***********************************************************************
Write a function `divisibleByThreePairSum(array)` that takes an array of
numbers. It should return an array of all the pairs of indices, whose
elements sum to a multiple of three.
Examples:
var arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
arr1 //=> [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]
var arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
arr2 //=> [[1, 3]]
***********************************************************************/

// function divisibleByThreePairSum(array) {
//     let newArr = [];
//     for (var a = 0; a <= array.length -2; a++){
//         for( var b = a + 1; b <= array.length -1; b ++ ){
//             if ((array[a] + array[b]) % 3 === 0){
//                 newArr.push([a,b])
//             }
//         }
//     }
//     return newArr 
// }

// var arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
// console.log(arr1) //=> [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]
// var arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
// console.log(arr2) //=> [[1, 3]]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/***********************************************************************
Write a function `zipArray(arr1, arr2)` that takes in two arrays and
"zips" them together by returning a single 2D-array. Assume that both
input arrays have the same length.
Examples:
var a1 = ['a', 'b', 'c', 'd'];
var a2 = [10, 20, 30, 40];
var result = zipArray(a1, a2);
result; // => [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 40 ] ]
***********************************************************************/

// function zipArray(arr1, arr2) {
//     let newArr = [];
//     for (var i = 0; i <= arr1.length - 1; i++){
//         newArr.push([arr1[i], arr2[i]])
//     }
//     return newArr 
// }

// var a1 = ['a', 'b', 'c', 'd'];
// var a2 = [10, 20, 30, 40];
// var result = zipArray(a1, a2);
// console.log(result); // => [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 40 ] ]

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/***********************************************************************
Write a function `twoDimensionalTotal(array)` that takes in a 2D array
of numbers and returns the total sum of all elements.
var arr1 = [
  [5, 2, 5, 3],
  [12, 13],
];
twoDimensionalTotal(arr1); // => 40
var arr2 = [
  [2],
  [1, 9],
  [1, 1, 1]
]
twoDimensionalTotal(arr2); // => 15
***********************************************************************/

// function twoDimensionalTotal(array) {
//     let sum = 0;
//     for(var a = 0; a <= array.length - 1; a++){
//         for (var b = 0; b <= array[a].length -1; b++){
//             sum += array[a][b]
//         }
//     }
//     return sum 
// }

// var arr1 = [
//     [5, 2, 5, 3],
//     [12, 13],
// ];
// console.log(twoDimensionalTotal(arr1)); // => 40
// var arr2 = [
//     [2],
//     [1, 9],
//     [1, 1, 1]
// ]
// console.log(twoDimensionalTotal(arr2)); // => 15

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/***********************************************************************
Write a function `countInnerElement(arr)` that takes in a 2-D array of elements.
Each element of 'arr' is a sub array that contains multiple elements. The number
of elements contained in each sub array are not the same. We can assume each sub
array contains at least one element. We should return an object that counts
how many times each element in each sub array repeats.
// Examples:
// var arr1 = [
//   [1,2,4,5],
//   [2,7,4],
//   [1,4,5,2,7]
// ]
// countInnerElement(arr1) // => {1: 2, 2: 3, 4: 3, 5: 2, 7: 2}
// var arr2 = [
//   ['a','b','c','d'],
//   ['a','b'],
//   ['a','c','d','a']
// ]
// countInnerElement(arr2) // => {a: 4, b: 2, c: 2, d: 2}
***********************************************************************/


// function countInnerElement(arr) {
//     let newObj = {};
//     for (var a = 0; a <= arr.length -1; a++){
//         for(var b = 0; b <= arr[a].length -1; b++){
//             newObj[arr[a][b]] === undefined ? newObj[arr[a][b]] = 1 : newObj[arr[a][b]] += 1
//         }
//     }
//     return newObj
// }

// var arr1 = [
//   [1,2,4,5],
//   [2,7,4],
//   [1,4,5,2,7]
// ]
// console.log(countInnerElement(arr1)) // => {1: 2, 2: 3, 4: 3, 5: 2, 7: 2}
// var arr2 = [
//   ['a','b','c','d'],
//   ['a','b'],
//   ['a','c','d','a']
// ]
// console.log(countInnerElement(arr2)) // => {a: 4, b: 2, c: 2, d: 2}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/***********************************************************************
Write a function `twoDiff(array)`, given an array of numbers, return a 2-D 
array, where each of the sub array are indices of the two numbers such 
that their difference is 2. If there are no such numbers, return an empty
array.
NOTE: The pairs are unique.
HINT: Account for negative difference too!
//Example:
// twoDiff([2, 3, 4, 6, 1, 7]) // => [[0, 2], [1, 4], [2, 3]]
// twoDiff([0, 2, 4, 3, 5]) // => [[0, 1], [1, 2], [3,4]]
// twoDiff([]) // => []
***********************************************************************/


// function twoDiff(array) {
//     let newArr = [];
//     for (var a = 0; a <= array.length - 2; a++){
//         for (var b = a + 1; b <= array.length -1; b++){
//             if ((array[a] - array[b] === 2) || (array[a] - array[b] === -2)){
//                 newArr.push([a,b])
//             }
//         }
//     }
//     return newArr 
// }

// console.log(twoDiff([2, 3, 4, 6, 1, 7])) // => [[0, 2], [1, 4], [2, 3]]
// console.log(twoDiff([0, 2, 4, 3, 5])) // => [[0, 1], [1, 2], [3,4]]
// console.log(twoDiff([])) // => []

////////////////////////////////////////////////////////////////////////////////////////////////////////

/***********************************************************************
Write a function `arrayDiff(arr1, arr2)` that takes in two arrays. The 
function should return a new array, containing the elements of arr1 that
are not also in arr2.
Note: Assume both arrays have unique elements.
//Example:
// array1 = [1,23,2,43,3,4]
// array2 = [3, 23]
// arrayDiff(array1, array2) // => [1, 2, 43 ,4]
// array3 = ['a', 'ab', 'c', 'd', 'c']
// array4 = ['d']
// arrayDiff(array3, array4) // => ['a', 'ab', 'c', 'c']
***********************************************************************/


// function arrayDiff(arr1, arr2) {
//     let newArr = [];
//     for (var i = 0; i <= arr1.length - 1; i++){
//         if (arr2.indexOf(arr1[i]) === -1) newArr.push(arr1[i])
//     }
//     return newArr 
// }

// array1 = [1,23,2,43,3,4]
// array2 = [3, 23]
// console.log(arrayDiff(array1, array2)) // => [1, 2, 43 ,4]
// array3 = ['a', 'ab', 'c', 'd', 'c']
// array4 = ['d']
// console.log(arrayDiff(array3, array4)) // => ['a', 'ab', 'c', 'c']

////////////////////////////////////////////////////////////////////////////////////////////////

/***********************************************************************
Write a function `valueCounter(obj, val)` that takes in an object and a 
value, the function should return the number of times 'val' repeats as a
value in 'obj'.
//Example:
// obj1 = {1: 'Anne', 2: 'Alvin', 3: 'Anne', 4: 'Anne'}
// valueCounter(obj1, 'Anne') // => 3
// obj2 = {Anne: 50, Alvin: 1, JJ: 100, Roman: 100}
// valueCounter(obj2, 88) // => 0
// pairs = {Anne: 'Roman', Alvin: 'Roman', JJ: 'Anne', Roman: 'Anne'}
// valueCounter(pairs, 'Roman') // => 2
***********************************************************************/

// function valueCounter(obj, val) {
//     let counter = 0;
//     for (keys in obj){
//         if (obj[keys] === val){
//             counter += 1
//         }
//     }
//     return counter 
// }

// obj1 = {1: 'Anne', 2: 'Alvin', 3: 'Anne', 4: 'Anne'}
// console.log(valueCounter(obj1, 'Anne')) // => 3
// obj2 = {Anne: 50, Alvin: 1, JJ: 100, Roman: 100}
// console.log(valueCounter(obj2, 88)) // => 0
// pairs = {Anne: 'Roman', Alvin: 'Roman', JJ: 'Anne', Roman: 'Anne'}
// console.log(valueCounter(pairs, 'Roman')) // => 2


//////////////////////////////////////////////////////////////////////////////////////////////////


/***********************************************************************
Write a function elementCount(array) that returns a object. Each key
corresponds to an element in the array and the value corresponds to how
many times that element appears in the array.
Example:
elementCount(["a", "a", "b", "b"]); //=> { "a" : 2, "b" : 2 }
elementCount(['c', 'a', 'c', 'a', 'b']); // => { "c": 2, "a": 2, "b": 1 }
***********************************************************************/

// function elementCount(array) {
//     let obj = {};
//     for (var i = 0; i <= array.length - 1;i++){
//         if (obj[array[i]] === undefined ) {
//             obj[array[i]] = 1
//         }else{
//             obj[array[i]] += 1
//         }
//     }
//     return obj 
// }

// console.log(elementCount(["a", "a", "b", "b"])); //=> { "a" : 2, "b" : 2 }
// console.log(elementCount(['c', 'a', 'c', 'a', 'b'])); // => { "c": 2, "a": 2, "b": 1 }

////////////////////////////////////////////////////////////////////////////

/***********************************************************************
Write a function `titleize(title, stopWords)` that takes in a string
`title` and an array of strings `stopWords`. Return the `title` where
every word that does not exist in the `stopWords` array is capitalized;
all others lowercase.
Hints: Decompose this problem into helper functions. Perhaps create these,
- removePunctuation(word)
- isStopWord(word, stopWords)
- Test after you write every function of this decomposition!
- First write a function removePunctuation(word) that takes in a single
word and returns that same word without any punctuation at the end. Feel
free to use the punctuation array we've given you below.
- Second, write a function isStopWord(word, stopWords) that takes in a
single word and returns true if it is a stop word. The check will vary
depending on if the word contains punctuation or not, so use your
removePunctuation function before checking.
- Use slice
var punctuation = [";", "!", ".", "?", ",", "-"];
Examples:
titleize("forest gump, the runner", ["the"])
=> "Forest Gump, the Runner"
titleize("MASTER AND COMMANDER", ["and"])
=> "Master and Commander"
titleize("i LOVE; lover of mine", ["love", "of"])
=> "I love; Lover of Mine"
titleize("shall we dance?", ["dance"])
=> "Shall We dance?"
***********************************************************************/

// function titleize(title, stopWords) {
//     let splitSent = title.toLowerCase().split(' ');
//     let newSent = []
//     for( var i = 0; i <= splitSent.length - 1;i++){
//         let word = splitSent[i]
//         if (isStopWord(word, stopWords) === false){
//         newSent.push(word.charAt(0).toUpperCase() + word.slice(1))
//         }else{
//             newSent.push(word)
//         }
//     }
//     return newSent.join(' ')
// }

// function removePunctuation(word){
//     var punctuation = [";", "!", ".", "?", ",", "-"];
//     if (punctuation.indexOf(word[word.length - 1]) != -1){
//         return word.slice(0,-1)
//     }
//     return word 
// }

// function isStopWord(word, stopWords){
//     let clearWord = removePunctuation(word)
//     // console.log(clearWord)
//     return stopWords.indexOf(clearWord ) != -1
// }


// console.log(titleize("forest gump, the runner", ["the"]))
// // => "Forest Gump, the Runner"
// console.log(titleize("MASTER AND COMMANDER", ["and"]))
// // => "Master and Commander"
// console.log(titleize("i LOVE; lover of mine", ["love", "of"]))
// // => "I love; Lover of Mine"
// console.log(titleize("shall we dance?", ["dance"]))
// // => "Shall We dance?"

/////////////////////////////////////////////////////////////////////////////////////////////////////


// Debug this function below so it passes mocha

// Examples:
//
// jump(5) //=> "I'm jumping 5 feet high!";
// jump(12) //=> "I'm jumping 12 feet high!";

// function howHigh(height) {
//     return height + " feet high!"; // "4 feet high!""
// }

// function jump(height) {
//     return "I'm jumping " + howHigh(height); // "I'm jumping 4 feet high!"
// }

// console.log(jump(5))
// console.log(jump(12))

/////////////////////////////////////////////////////////////////////////////////////////////////


// Debug this function below so it passes mocha

// Examples:
//
// unique([1,23,2,4,5,1,23]) //=> [1, 23, 2, 4, 5];

// function unique(array) {
//     var uniqueArray = [];

//     for (var i = 0; i <= array.length -1; i += 1) {
//         var ele = array[i];

//         if (uniqueArray.indexOf(ele) === -1) {
//             uniqueArray.push(ele);
//         }
//     }
//     return uniqueArray
// }
// console.log(unique([1, 23, 2, 4, 5, 1, 23]))

////////////////////////////////////////////////////////////////////////////////////

// Debug this function below so it passes mocha

// Examples:
//
// var people = [
//   { happiness : 15},
//   { happiness : 13},
//   { happiness : 3},
//   { happiness : 20},
//   { happiness : 9},
//   { happiness : 7},
//   { happiness : 17},
//   { happiness : 1}
// ];

// console.log(isHappyGroup(people)) //=> true;

// function isHappy(person) {
//     if (person.happiness > 5) {
//         return true;
//     }
//     return false;
// }

// function isHappyGroup(group) {
//     var amount = 0;

//     for (var i = 0; i <= group.length - 1; i += 1) {
//         var person = group[i];

//         if (isHappy(person)) {
//             amount += 1;
//         }
//     }

//     if (amount > 5) {
//         return true;
//     }

//     return false;
// }

////////////////////////////////////////////////////////////////////////////////////////////////////


// Debug this function below so it passes mocha

// Examples:
//


// var magicify = function (number) {
//     return number - 34;
// }

// var isMagicNumer = function (number) {
//     var magicNumb = magicify(number);

//     if (magicNumb % 13 === 0 || magicNumb < 0) {
//         return true;
//     }

//     return false;
// }
// console.log(isMagicNumer(26)) //=> true;
// console.log(isMagicNumer(50)) //=> false;

///////////////////////////////////////////////////////////////////////////////////////


// Debug this function below so it passes mocha

// Examples:
//
// fizzBuzz(19) //=> [3, 5, 6, 9, 10, 12, 18]

// function fizzBuzz(max) {
//     var i = 1;
//     var array = [];

//     while (i < max) {
//         if ((i % 5 === 0 || i % 3 === 0 ) && i !== 15) {
//             array.push(i);
//         }
//         i += 1;
//     }

//     return array;
// }

// console.log(fizzBuzz(19))

//////////////////////////////////////////////////////////////////////////////////////////////


/***********************************************************************
Write a function called capVowels(string) that takes in a string and
returns the string where every vowel is capitalized. All other letters
should be lowercased.
Hint: Don't forget that strings are immutable!
Examples:
capVowels('hello world'); // => 'hEllO wOrld'
capVowels('HELLO WORLD'); // => 'hEllO wOrld'
capVowels('boOtCamP PreP'); // => 'bOOtcAmp prEp'
***********************************************************************/

// function capVowels(string) {
//     const vowels = 'aeiou'.split('')
//     const splitString = string.toLowerCase()
//     let newStr = ''
//     for (i = 0; i <= splitString.length - 1; i++){
//         let character = splitString[i]
//         vowels.indexOf(character) === -1 ? newStr += character : newStr += character.toUpperCase()
//     }
//     return newStr 
// }

// console.log(capVowels('hello world')); // => 'hEllO wOrld'
// console.log(capVowels('HELLO WORLD')); // => 'hEllO wOrld'
// console.log(capVowels('boOtCamP PreP')); // => 'bOOtcAmp prEp'

///////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************
Write a function `nextTwoPrimes(num)` that takes in a number `num` and
returns the next two prime numbers greater than `num`.
Examples:
nextTwoPrimes(2); // => [ 3, 5 ]
nextTwoPrimes(3); // => [ 5, 7 ]
nextTwoPrimes(7); // => [ 11, 13 ]
nextTwoPrimes(8); // => [ 11, 13 ]
nextTwoPrimes(20); // => [ 23, 29 ]
nextTwoPrimes(97); // => [ 101, 103 ]
***********************************************************************/

// function nextTwoPrimes(num) {
//     let newArr = []
//     for (var i = num + 1; newArr.length < 2; i++){
//         if (isPrime(i)) newArr.push(i)
//     }
//     return newArr
// }

// function isPrime(n){
//     if (n < 2) return false;
//     for (var i = 2; i < n; i++){
//         if (n % i === 0) {
//             return false 
//         }
//     }
//     return true 
// }

// console.log(nextTwoPrimes(2)); // => [ 3, 5 ]
// console.log(nextTwoPrimes(3)); // => [ 5, 7 ]
// console.log(nextTwoPrimes(7)); // => [ 11, 13 ]
// console.log(nextTwoPrimes(8)); // => [ 11, 13 ]
// console.log(nextTwoPrimes(20)); // => [ 23, 29 ]
// console.log(nextTwoPrimes(97)); // => [ 101, 103 ]

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/***********************************************************************
Write a function `pairProduct(arr, num)` that accepts an array of
numbers (arr) and a target number (num). It should return pairs of
indices whose elements multiply to `num`. No pair should appear twice in
the result.
Use only `while` loops. No `for` loops.
Examples:
pairProduct([1,2,3,4,5], 4); //=> [ [ 0, 3 ] ]
pairProduct([1,2,3,4,5], 8); //=> [ [ 1, 3 ] ]
pairProduct([1, 2, 3, 12, 8], 24); //=> [ [ 1, 3 ], [ 2, 4 ] ]
***********************************************************************/

// function pairProduct(arr, num) {
//     let newArr = [];
//     let a = 0;
//     while (a <= arr.length - 2){
//         b = a + 1
//         while (b <= arr.length -1){
//             if ((arr[a] * arr[b]) === num ){
//                 newArr.push([a,b])
//             }
//             b += 1
//         }
//         a += 1
//     }
//     return newArr 
// }

// console.log(pairProduct([1, 2, 3, 4, 5], 4)); //=> [ [ 0, 3 ] ]
// console.log(pairProduct([1, 2, 3, 4, 5], 8)); //=> [ [ 1, 3 ] ]
// console.log(pairProduct([1, 2, 3, 12, 8], 24)); //=> [ [ 1, 3 ], [ 2, 4 ] ]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/***********************************************************************
Write a function twoDimensionalSize(array) that takes in a 2D-array as
an argument. The function should return the total number of elements in
the 2D-array.
Examples:
var arr1 = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9]
];
twoDimensionalSize(arr1); // => 9
var arr2 = [
  ['a'],
  ['b', 'c', 'd', 'e']
];
twoDimensionalSize(arr2); // => 5
***********************************************************************/

// function twoDimensionalSize(array) {
//     let total = 0;
//     for (var i = 0; i <= array.length - 1; i++){
//         total += array[i].length 
//     }
//     return total 
// }

// var arr1 = [
//     [1, 2, 3],
//     [4, 5],
//     [6, 7, 8, 9]
// ];
// console.log(twoDimensionalSize(arr1)); // => 9
// var arr2 = [
//     ['a'],
//     ['b', 'c', 'd', 'e']
// ];
// console.log(twoDimensionalSize(arr2)); // => 5

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*******************************************************************************
Write a function isElement(array, ele) that takes an array and an element.
The function should return true if the element is found inside of the array, it
should return false otherwise.

DO NOT USE THE BUILT-IN `indexOf` METHOD IN YOUR SOLUTION!

Examples:

isElement([1,2,3,4,5], 5) => true
isElement(["a", "b", "c"], "a") => true
isElement(["a", "b", "c"], "d") => false
*******************************************************************************/

// function isElement(array, ele) {
//     for (var i = 0; i <= array.length -1; i++){
//         if (array[i] === ele ) return true
//     }
//     return false 
// }

// console.log(isElement([1, 2, 3, 4, 5], 5))
// console.log(isElement(["a", "b", "c"], "a"))
// console.log(isElement(["a", "b", "c"], "d"))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*******************************************************************************
Write a function `minMaxProduct(array)` that return the product between the
largest value and the smallest value in the array. Assume `array` is an array of
numbers. Assume an array of at least two numbers.

Examples:

minMaxProduct([6, 3, 7, 2]) => 14
minMaxProduct([0, 1, -5, 3, 6]) => -30
*******************************************************************************/

// function minMaxProduct(array) {
//     return Math.min(...array) * Math.max(...array)
// }

// console.log(minMaxProduct([6, 3, 7, 2]))
// console.log(minMaxProduct([0, 1, -5, 3, 6]))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*******************************************************************************
Write a function phraseFinder(words, phrase), that takes in an array of words and a
string representing a phrase. The function should return true if the phrase can be
formed by a pair of words from the array. The function should return false if the
phrase cannot be formed by any pair of words.

Examples:

phraseFinder(['world', 'prep', 'hello', 'bootcamp'], 'bootcamp prep') => true
phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'bootcamp prep') => true
phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'hello world') => true
phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'hello prep') => true
phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'hello goodbye') => false
*******************************************************************************/

// function phraseFinder(words, phrase) {
//     let splitPhrase = phrase.split(' ')
//     for (var i = 0; i <= splitPhrase.length - 1;i++){
//         if (words.indexOf(splitPhrase[i]) === -1){
//             return false 
//         }
//     }
//     return true 
// }


// console.log(phraseFinder(['world', 'prep', 'hello', 'bootcamp'], 'bootcamp prep'))
// console.log(phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'bootcamp prep'))
// console.log(phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'hello world'))
// console.log(phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'hello prep'))
// console.log(phraseFinder(['world', 'bootcamp', 'hello', 'prep'], 'hello goodbye') )

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*******************************************************************************
Write a function that multiples(max, num) that takes in two numbers. The function
should return an array of positive numbers less than `max` that are multiples of `num`.

Examples:

multiples(10, 2) => [ 2, 4, 6, 8 ]
multiples(15, 3) => [ 3, 6, 9, 12 ]
*******************************************************************************/

// function multiples(max, num) {
//     let newArr = [];
//     for (i = num; i < max; i += num){
//             newArr.push(i)
//     }
//     return newArr 
// }

// console.log(multiples(10, 2))
// console.log(multiples(15, 3) )

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*******************************************************************************
Write a function valueReplace(array, object) that takes in an array and an object.
The function should return a new array where each element of the original array
is replaced with it's corresponding value from the object.

Examples:

valueReplace(['a', 'b', 'c', 'd'], {a: 1, b: 2, d: 4})
=> [ 1, 2, 'c', 4 ]

valueReplace(['danny', 'kurstie', 'tommy'], {kurstie: 'operations', danny: 'placements'})
=> [ 'placements', 'operations', 'tommy' ]
*******************************************************************************/

// function valueReplace(array, obj) {
//     let newArr = []
//     for (var i = 0; i <= array.length - 1;i++){
//         if (obj[array[i]]){
//             newArr.push(obj[array[i]])
//         }else{
//             newArr.push(array[i])
//         }
//     }
//     return newArr 
// }
// console.log(valueReplace(['a', 'b', 'c', 'd'], { a: 1, b: 2, d: 4 }))
// console.log(valueReplace(['danny', 'kurstie', 'tommy'], { kurstie: 'operations', danny: 'placements' }))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/***********************************************************************
Write a function `longWordCount(string)` that takes in a string and
returns the number of words longer than 7 characters.
Examples:
longWordCount(""); // => 0
longWordCount("short words only"); // => 0
longWordCount("one reallylong word"); // => 1
longWordCount("two reallylong words inthisstring"); // => 2
longWordCount("allwordword longwordword wordswordword"); // => 3
longWordCount("seventy schfifty five"); // => 1
***********************************************************************/

// function longWordCount(sentence) {
//     let newSent = sentence.split(' ')
//     counter = 0;
//     for (var i = 0; i <= newSent.length - 1; i++ ){
//         if (newSent[i].length > 7)  counter += 1 
//     }
//     return counter 
// }

// console.log(longWordCount("")); // => 0
// console.log(longWordCount("short words only")); // => 0
// console.log(longWordCount("one reallylong word")); // => 1
// console.log(longWordCount("two reallylong words inthisstring")); // => 2
// console.log(longWordCount("allwordword longwordword wordswordword")); // => 3
// console.log(longWordCount("seventy schfifty five")); // => 1


//////////////////////////////////////////////////////////////////////////////////////////////////////////

/***********************************************************************
Write a function `factorial(n)`, that returns the factorial of the
number `n`. For example, the factorial of 4 is `4 * 3 * 2 * 1 = 24`.
Examples:
factorial(1); // => 1
factorial(4); // => 24
factorial(5); // => 120
factorial(10); // => 3628800
***********************************************************************/

// function factorial(n) {
//     let total = 1;
//     for (var i = n; i >= 1; i--){
//         total *= i 
//     }
//     return total 
// }

// console.log(factorial(1)); // => 1
// console.log(factorial(4)); // => 24
// console.log(factorial(5)); // => 120
// console.log(factorial(10)); // => 3628800

////////////////////////////////////////////////////////////////////////////////////////////////////

/***********************************************************************
Write a function `lcm(num1, num2)` that returns the lowest number which
is a multiple of both num1 and num2.
Examples:
lcm(2, 3); // => 6
lcm(6, 10); // => 30
lcm(24, 26); // => 312
***********************************************************************/

// function lcm(num1, num2) {
//     let start = Math.max(num1, num2)
//     for (i = start; i <= (num1 * num2); i++){
//         if (i % num1 === 0 && i % num2 === 0){
//             return i 
//         }
//     }
// }

// console.log(lcm(2, 3)); // => 6
// console.log(lcm(6, 10)); // => 30
// console.log(lcm(24, 26)); // => 312

///////////////////////////////////////////////////////////////////////////////////////////////////


/***********************************************************************
Write a function `hipsterfy(sentence)` that takes takes a string
containing several words as input. Remove the last vowel from each word.
`'y'` is not a vowel.
Examples:
hipsterfy("proper"); // => "propr"
hipsterfy("proper tonic panther"); // => "propr tonc panthr"
hipsterfy("towel flicker banana"); // => "towl flickr banan"
hipsterfy("runner anaconda"); // => "runnr anacond"
hipsterfy("turtle cheeseburger fries"); // => "turtl cheeseburgr fris"
***********************************************************************/

// function hipsterfy(sentence) {
//     let newSent = sentence.split(' ')
//     let final = []
//     for (var i = 0; i <= newSent.length - 1;i++){
//         final.push(removeLastv(newSent[i]))
//     }
//     return final.join(' ')
// }

// function removeLastv(word){
//     let vowels = 'aeiou'.split('')
//     for (var i = word.length - 1; i >= 0;i--){
//         if (vowels.indexOf(word[i]) != -1 ){
//             return word.replace(word[i], '')
//         }
//     }
//     return word 
// }

// console.log(hipsterfy("proper")); // => "propr"
// console.log(hipsterfy("proper tonic panther")); // => "propr tonc panthr"
// console.log(hipsterfy("towel flicker banana")); // => "towl flickr banan"
// console.log(hipsterfy("runner anaconda")); // => "runnr anacond"
// console.log(hipsterfy("turtle cheeseburger fries")); // => "turtl cheeseburgr fris"console.log(

////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*******************************************************************************
Write a function `objectToString(count)` that takes in a char count object and
returns a string representing the counts of each character.

Examples:

objectToString({a : 2, b: 4, c: 1}) => 'aabbbbc'
objectToString({b: 1, o: 2, t: 1}) => 'boot'
*******************************************************************************/

// function objectToString(count) {
//     let str = '';
//     for (key in count ){
//         for( var i = 1; i <= count[key]; i++){
//             str += key
//         }
//     }
//     return str 
// }

// console.log(objectToString({ a: 2, b: 4, c: 1 }))
// console.log(objectToString({ b: 1, o: 2, t: 1 }) )

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*******************************************************************************
Write a function shortestWord(sentence) that returns the shortest word of a sentence.
You can assume that the words of the sentence all have different lengths.

Examples:

shortestWord('app academy is cool') => 'is'
shortestWord('bootcamp prep') => 'prep'
*******************************************************************************/

// function shortestWord(sentence) {
//     let splitSent = sentence.split(' ')
//     let final = splitSent[0]
//     for (var i = 0; i <= splitSent.length -1 ;i++){
//         if (splitSent[i].length < final.length  ){
//             final = splitSent[i]
//         }
//     }
//     return final 
// }

// console.log(shortestWord('app academy is cool'))
// console.log(shortestWord('bootcamp prep'))

/////////////////////////////////////////////////////////////////////////////////////////////////////

/*******************************************************************************
Write a function greatestCommonFactor(num1, num2) that returns the largest number
that is divides both `num1` and `num2`.

Examples:

greatestCommonFactor(15, 25) => 5
greatestCommonFactor(16, 24) => 8
greatestCommonFactor(7, 11) => 1
*******************************************************************************/

function greatestCommonFactor(num1, num2) {
    let start = Math.min(num1, num2)
    for (var i = start; i > 0; i--){
        if (num1 % i === 0 && num2 % i === 0) return i
    }
}

console.log(greatestCommonFactor(15, 25))
console.log(greatestCommonFactor(16, 24))
console.log(greatestCommonFactor(7, 11)) 