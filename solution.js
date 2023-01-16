
/* 
 * Question 1: 
 * Write a JavaScript function that reverses a number.
 */

const numericReverse = num => {
  let reversedNum = 0

  while (num != 0) {
    //add last digit to front, multiplying curr num by 10 places it to the right 
    reversedNum = reversedNum * 10 + num % 10
    // remove decimal
    num = Math.floor(num / 10)
  }
  return reversedNum;
}
console.log(numericReverse(1234)) /* 4321 */

/*
 * Question 2
 * Write a JavaScript function that checks whether a passed string is palindrome or not?  
*/

const isPalindrome = word => {
  if (word.length <= 1) {
    return true;
  }
  const firstLetter = word[0]
  const lastLetter = word[word.length - 1]

  if (firstLetter === lastLetter) {
    return isPalindrome(word.slice(1, -1))
  }
  else {
    return false
  }

}

console.log(isPalindrome('madam'))
console.log(isPalindrome('m'))

/** 
 * Question 3
 * Write a JS function that generates all combinations of string. 
 */
const allStringCombinations = word => {

  for (let i = 0; i < word.length; i++) {
    let wordBuilder = "";
    for (let j = i; j < word.length; j++) {
      let pivotChar = word[j]
      wordBuilder += pivotChar
      console.log(wordBuilder)
    }
  }
}

console.log(allStringCombinations('dog'))

/**
 * Question 4
 * Write a JavaScript function that returns a passed string with letters in alphabetical order.
 */

const alphabetizeString = word => word.split("").sort().join("")

console.log(alphabetizeString('zebra'))

/**
 * Question 5
 * Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
 */

const toUpperFirstChar = string => {
  let words = string.split(" ")

  let upperedWords = []
  let wordBalance;
  let firstChar;
  for (let word of words) {
    firstChar = word.charAt(0)

    wordBalance = word.substring(1)

    upperedWords.push(firstChar.toUpperCase() + wordBalance)

  }
  return upperedWords.join(' ')

}

console.log(toUpperFirstChar("chatgpt will not replace me"))

/**
 * Question 6
 * Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
 */

const longestWordInString = string => {
  let strArr = string.split(' ')

  let longdstWord = strArr.sort((a, b) => b.length - a.length)[0]
  return longdstWord;
}

console.log(longestWordInString("chatgpt will not replace me"))

/**
 * Question 7
 * Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
 */

const getVowelCount = string => {

  let vowels = 'aeiou'
  let wordArr = string.split(' ').join('')
  let vowelCount = 0;

  console.log(wordArr)
  for (let i = 0; i < wordArr.length; i++) {

    if (vowels.indexOf(wordArr[i]) !== -1) {
      vowelCount++
    }
  }
  return vowelCount;

}

console.log(getVowelCount("she sells sea shells by the seashore")) /*expects 10*/

/**
 * Question 8
 * Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
 */

const isPrime = num => {
  //a whole number greater than 1 
  if (num <= 1) return `${num} is not a prime number`
  //that cannot be exactly divided by any whole number other than itself and 1
  else {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) return `${num} is not a prime number`
    }
  }
  return `${num} is prime!`
}
console.log(isPrime(1)) /**expect false */
console.log(isPrime(11))/**expect true */
console.log(isPrime(8))/**expect false */

/**
 * Question 9
 * Write a JavaScript function which accepts an argument and returns the type. 
 */
const myType = arg => typeof arg

console.log(myType('hello, world!')) /** string */
console.log(myType(true)) /** boolean */
console.log(myType([1, 2, 3, 4])) /** object */

/**
 * Question 10
 * Write a JavaScript function which returns the n rows by n columns identity matrix. 
 */
const identityMatrix = n => {

  let idArr = []

  // result [[1,0,0],[0,1,0],[0,0,1]]
  return idArr
}

console.log(identityMatrix(3))

/**
 * Question 11
 * Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
 */

/**
 * Question 12
 * Write a JavaScript function which says whether a number is perfect. 
 */

/**
 * Question 13
 * Write a JavaScript function to compute the factors of a positive integer. 
 */

/**
 * Question 14
 * Write a JavaScript function to convert an amount to coins. 
 */

/**
 * Question 15
 * Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. 
 */

/**
 * Question 16
 * Write a JavaScript function to extract unique characters from a string. 
 */

/**
 * Question 17
 * Write a JavaScript function to  get the number of occurrences of each letter in specified string. 
 */

/**
 * Question 18
 * Write a function for searching JavaScript arrays with a binary search. 
 */

/**
 * Question 19
 * Write a JavaScript function that returns array elements larger than a number. 

 */

/**
 * Question 20
 * Write a JavaScript function that generates a string id (specified length) of random characters. 
 */

/**
 * Question 21
 * Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.
 */

/**
 * Question 22
 * Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
 */

/**
 * Question 23
 * Write a JavaScript function to find the first not repeated character. 
 */

/**
 * Question 24
 * Write a JavaScript function to apply Bubble Sort algorithm. 
 */

/**
 * Question 25
 * Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 

 */

/**
 * Question 26
 * Write a JavaScript function to find longest substring in a given a string without repeating characters. 
 */

/**
 * Question 27
 * Write a JavaScript function that returns the longest palindrome in a given string.
 */

/**
 * Question 28
 * Write a JavaScript program to pass a 'JavaScript function' as parameter. 
 * 
 */

/**
 * Question 29
 * Write a JavaScript function to get the function name. 
 */