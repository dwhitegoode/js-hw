
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
const secondGreatestSecondLowest = arrayOfNums => {

  let secondGreatest = [...arrayOfNums].sort((a, b) => b - a)[1]
  let secondLowest = [...arrayOfNums].sort((a, b) => a - b)[1]

  console.log(secondGreatest)
  return [secondGreatest, secondLowest]
}
console.log(secondGreatestSecondLowest([3, 10, 2, 7, 4, 1, 8, 9]))
/**
 * Question 12
 * Write a JavaScript function which says whether a number is perfect. 
 */
const isPerfect = num => {

  let temp = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) temp += i
  }
  if (temp === num && temp !== 0) return `${num} is perfect!`
  else return `${num} is not perfect`

}
console.log(isPerfect(6))
console.log(isPerfect(10))

/**
 * Question 13
 * Write a JavaScript function to compute the factors of a positive integer. 
 */
const getFactors = num => {
  for (let i = 0; i <= num; i++) {
    if (num % i == 0) {
      console.log('factors are:', i)
    }
  }
}
console.log(getFactors(12))
/**
 * Question 14
 * Write a JavaScript function to convert an amount to coins. 
 */
const amountToCoins = money => {

  let coins = [25, 10, 5, 2, 1]
  let changeArr = []
  for (let i = 0; i < coins.length; i++) {
    let coin = coins[i]
    if (money >= coin) {
      money -= coin
      changeArr.push(coin)
      i--
    }

  }
  return changeArr;
}
console.log(amountToCoins(46))

/**
 * Question 15
 * Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. 
 */

const exponential = (base, exponent) => {

  if (exponent === 0) return 1
  let raisedNum = base
  for (let i = 1; i < exponent; i++) {
    raisedNum *= base
  }
  return raisedNum
}
console.log(exponential(2, 0))

/**
 * Question 16
 * Write a JavaScript function to extract unique characters from a string. 
 */
const isUniqueChar = string => {

  let stringPile = string.split(' ').join('')

  let charArr = []

  for (let char of stringPile) {

    if (charArr.indexOf(char) === -1) {
      charArr.push(char)
    }
  }
  return charArr;

}
console.log(isUniqueChar('hello dolly')) /** h,e,l,o,d,y */
/**
 * Question 17
 * Write a JavaScript function to  get the number of occurrences of each letter in specified string. 
 */
const charOccurances = string => {
  //  let stringArr = string.split('')
  for (let i = 0; i < string.length; i++) {
    let letter = string[i]
    let count = 0;
    for (let j = 0; j < string.length; j++) {
      if (letter === string[j] && i > j) break;
      if (letter === string[j]) count++
    }
    if (count > 0) console.log(`${letter} occurs ${count} times`)
  }

}
console.log(charOccurances('hello'))
/**
 * Question 18
 * Write a function for searching JavaScript arrays with a binary search. 
 */
const binarySearch = (array, searchNum, arrLeft, arrRight) => {

  // let arrLeft = 0
  // let arrRight = array.length - 1

  if (arrRight >= arrLeft) {
    let middle = Math.floor((arrRight - arrLeft) / 2) + arrLeft
    if (searchNum === middle) return `${searchNum} was found in array!`

    if (searchNum < array[middle]) return binarySearch(array, searchNum, arrLeft, middle - 1)

    return binarySearch(array, searchNum, middle + 1, arrRight)
  }

  return `${searchNum} not found.`

}
let array = [1, 2, 3, 4, 5, 6, 8, 10, 15, 20];

console.log(binarySearch(array, 3, 0, array.length - 1))
/**
 * Question 19
 * Write a JavaScript function that returns array elements larger than a number. 
 */
const elementsLarger = (array, num) => {
  let arrayOfLargerNums = []
  for (let i = num; i < array.length; i++) {
    let currentElement = array[i]
    if (currentElement > num) arrayOfLargerNums.push(currentElement)
  }
  return arrayOfLargerNums;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(elementsLarger(arr, 4))

/**
 * Question 20
 * Write a JavaScript function that generates a string id (specified length) of random characters. 
 */
const generateStringId = idLength => {

  let charDictionary = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  let generatedID = ''
  for (let i = 0; i < idLength; i++) {
    generatedID += charDictionary[Math.floor(Math.random() * charDictionary.length)]
  }
  return generatedID
}
console.log(generateStringId(10))

/**
 * Question 21
 * Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.
 */
const allPossibleSubSets = (arr, length) => {
  let subArr = []
  for (let i = 0; i < arr.length; i += length) {
    subArr.push(arr.slice(i, i + length))
  }
  return subArr
}
let arr1 = [1, 3, 5, 7, 9, 11, 13, 15, 17]
console.log(allPossibleSubSets(arr1, 3))

/**
 * Question 22
 * Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
 */
const countOfCharInString = (string, char) => {

  let charCount = 0
  for (let letter of string) {
    if (letter === char) charCount++
  }
  return `${char} occurs ${charCount} times.`

}
console.log(countOfCharInString('hello dolly', 'l'))
/**
 * Question 23
 * Write a JavaScript function to find the first not repeated character. 
 */
const firstNotRepeatedChar = string => {
  for (let i = 0; i < string.length; i++) {
    let letter = string[i]
    let count = 0
    for (let j = 0; j < string.length; j++) {
      if (letter === string[j] && i > j) return letter
    }
  }
  return string[0]

}
console.log(firstNotRepeatedChar('repeat')) /** expects: e */
console.log(firstNotRepeatedChar('github')) /** expects: g */
/**
 * Question 24
 * Write a JavaScript function to apply Bubble Sort algorithm. 
 */
const bubbleSort = array => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
  return array
}
console.log(bubbleSort([12, 5, 2, 8, 9, 6, 3]))
/**
 * Question 25
 * Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
 */
const longestCountryName = country => country.sort((a, b) => b.length - a.length)[0]

console.log(longestCountryName(['United States', 'England', 'Japan', 'China', 'Ethiopia', 'Singapore']))

/**
 * Question 26
 * Write a JavaScript function to find longest substring in a given a string without repeating characters. 
 */
const nonRepeatSubString = string => {
  let subString = ''
  for (let i = 0; i < string.length; i++) {
    let letter = string[i]
    if (subString.indexOf(letter) === -1) subString += letter
  }
  console.log(subString)
  //return subString
  // let longest = ''
  // for (let i = 0; i < string.length; i++) {
  //   let letter = string[i]
  //   for (let j = 0; j < string.length; j++) {
  //     if (){}
  //   }
  // }

}
console.log(nonRepeatSubString('sometimes')) //REFACTOR
/**
 * Question 27
 * Write a JavaScript function that returns the longest palindrome in a given string.
 */

/**
 * Question 28
 * Write a JavaScript program to pass a 'JavaScript function' as parameter. 
 * 
 */
const favorite = name => {
  if (name === 'David') {
    return `good name`
  }
  return `try again`
}
const fn = (name, func) => {

  return func(name)
}
console.log(fn('David', favorite))


/**
 * Question 29
 * Write a JavaScript function to get the function name. 
 */
const myNameIs = () => {

  return myNameIs.name
}

console.log(myNameIs())