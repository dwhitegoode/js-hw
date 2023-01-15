
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

}

console.log(getVowelCount("chatgpt will not replace me"))

/**
 * Question 8
 * Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
 */

/**
 * Question 9
 * Write a JavaScript function which accepts an argument and returns the type. 
 */

/**
 * Question 10
 * Write a JavaScript function which returns the n rows by n columns identity matrix. 
 */

/**
 * Question 11
 */

/**
 * Question 12
 */

/**
 * Question 13
 */

/**
 * Question 14
 */

/**
 * Question
 */

/**
 * Question
 */

/**
 * Question
 */

/**
 * Question
 */

/**
 * Question
 */

/**
 * Question
 */

/**
 * Question
 */

/**
 * Question
 */

/**
 * Question
 */

/**
 * Question
 */

/**
 * Question
 */

/**
 * Question
 */

/**
 * Question
 */

/**
 * Question
 */

/**
 * Question
 */