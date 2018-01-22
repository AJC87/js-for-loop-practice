module.exports = {
  problem1,problem2,problem3,problem4,problem5,problem6,problem7,problem8,problem9,problem10,
  problem11,problem12,problem13,problem14,problem15,problem16,problem17,problem18,problem19,problem20
}
// Write a for loop within this function that will create this array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function problem1() {
  var oneToTen = [];
  for(let i = 1; i < 11; i++) {
    oneToTen.push(i);
  }
  return oneToTen;
}

// Write a for loop within this function that will create this array: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
function problem2() {
  var tenToOne = [];
  for(let i = 10; i > 0; i--){
    tenToOne.push(i);
  }
  return tenToOne;
}

// Write a for loop within this function that will create this array: [1, 3, 5, 7, 9]
function problem3() {
  var oddNumsArray = [];
  for(let i = 1; i < 10; i += 2) {
    oddNumsArray.push(i);
  }
  return oddNumsArray;
}

// Write a for loop within this function that will create this array: [2, 4, 6, 8, 10]
function problem4() {
  var evenNumsArray = [];
  for(let i = 2; i < 11; i += 2) {
    evenNumsArray.push(i);
  }
  return evenNumsArray;
}
// Write a for loop within this function that will create this array: [3, 6, 9]
function problem5() {
  var threesArray = [];
  for(let i = 3; i < 10; i += 3) {
    threesArray.push(i);
  }
  return threesArray;
}

// Write a for loop within this function that will add only names that start with "J"
// to the 'jNamesArray'.
function problem6(arr) {
  var jNamesArray = [];
  arr.forEach((element) => {
    if(element.charAt(0) === "J") jNamesArray.push(element);
  })
  return jNamesArray;
}

// Write a for loop that adds all of the values in the array together
function problem7(arr) {
  var accumulator = 0;
  arr.forEach((element) => {
    accumulator += element;
  })
  return accumulator;
}

// Write a for loop that adds each letter (UPPERCASE) in the alphabet from A to Z into the alphabetArray.
function problem8() {
  var alphabetArray = [];
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  alphabet.split("").forEach((element) => {
    alphabetArray.push(element);
  })
  return alphabetArray;
}


// Write a for loop that adds each letter (UPPERCASE) in the alphabet from Z to A into the alphabetArray.
function problem9() {
  var alphabetArray = [];
  var alphabet = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
  alphabet.split("").forEach((element) => {
    alphabetArray.push(element);
  })
  return alphabetArray;
}


// Write the logic that will allow the function to return a string containing all of the array elements joined with a space.
// Example: problem10(['a', 'b', 'c']) ==> 'a b c'
function problem10(arr) {
  return arr.join(" ");
}

// Write the logic that will allow the function to return a string containing all of the array elements alternating uppercase and lowercase starting with the first element being uppercase.
// Example: problem11(['a', 'p', 'p', 'l', 'e']) ==> 'ApPlE'
function problem11(arr) {
  var staggeredLetters = [];
  arr.forEach((element, index) => {
    if(index % 2 === 0) staggeredLetters.push(element.toUpperCase());
    else staggeredLetters.push(element);
  })
  return staggeredLetters.join("");
}

// Write the logic that will allow the function to return a string containing all of the array elements alternating uppercase and lowercase starting with the first element being uppercase.
function problem12(arr) {
  var staggeredLetters = [];
  var staggeredLetters = [];
  arr.forEach((element, index) => {
    if(index % 2 === 0) staggeredLetters.push(element);
    else staggeredLetters.push(element.toUpperCase());
  })
  return staggeredLetters.join("");
}

// Write the logic that will allow the function to return a an array containing an array of odd elements as index 0 and another array containing even elements.
function problem13(arr) {
  var evensAndOdds = [[],[]];
  arr.forEach((element) => {
    if(element % 2 !== 0) evensAndOdds[0].push(element);
    else evensAndOdds[1].push(element);
  })
  return evensAndOdds;
}

// Write the logic that will allow the function to return an array that contains all of the elements from both arrays
function problem14(arr1, arr2) {
  var combinedArray = [];
  Array.from(arguments).forEach((arr) => {
    arr.forEach((element) => {
      combinedArray.push(element);
    })
  })
  return combinedArray;
}

// Write the logic that will allow the function to return an array containing all of the first letters from the words in the string.
// Example: problem15(['apple', 'orchards']) ==> ['a', 'o']
function problem15(arr) {
  return arr.map((element) => {
    return element.charAt(0);
  })
}
// Write the logic that will allow the function to return an array containing all of the last letters from the words in the string.
// Example: problem16(['apple', 'orchards']) ==> ['e', 's']
function problem16(arr) {
  return arr.map((element) => {
    return element.charAt(element.length - 1);
  })
}

// Write the logic that will allow the function to return index 1 to n multiplied by the number at index 0
// Example: problem17([2, 1, 2, 3]) ==> [2, 2, 4, 6]
function problem17(arr) {
  var firstIndexMult = [];
  for(let i = 1; i < arr.length; i++) {
    firstIndexMult.push(arr[0] * arr[i]);
  }
  return firstIndexMult;
}

// Write the logic that will allow the function to return index 1 to n multiplied by the number at index 0
// Example: problem18([2, 2, 4, 6]) ==> [2, 1, 2, 3]
function problem18(arr) {
  var firstIndexDivision = [];
  for(let i = 1; i < arr.length; i++) {
    firstIndexDivision.push(arr[i] / arr[0]);
  }
  return firstIndexDivision;
}

// Write the logic that will allow the function to return index 1 to n multiplied by the number at index 0
// Example: problem19(['a', 'apple', 'grape', 'peach', 'banana']) ==> ['a', 'aapple', 'graape', 'peaach', 'baanaanaa']
function problem19(arr) {
  var duplicateTheFirstIndex = [];
  // start coding here


  // done coding here
  return duplicateTheFirstIndex;
}

// Write the logic that will allow the function to return index 1 to n multiplied by the number at index 0
// Example: problem20(0, 10, 1)) ==> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function problem20(startingPoint, goUntil, incrementBy) {
  var arr = [];
  // start coding here


  // done coding here
  return arr;
}
