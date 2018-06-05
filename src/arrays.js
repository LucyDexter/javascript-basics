const getNthElement = (index, array) => {
  return array[index]
};

const arrayToCSVString = (array) => {
  return (array.toString());
};

const csvStringToArray = (string) => {
  return string.split([',']);
};

const addToArray = (element, array) => {
  array.push(element)
};

const addToArray2 = (element, array) => {
  // your code here
};

const removeNthElement = (index, array) => {
  // your code here return (array.slice([index]));
  
};

const numbersToStrings = (numbers) => {
  return numbers.map(String);
};

const uppercaseWordsInArray = (strings) => {
  /* your code here strings.map(array.toUppercase)
  return array */
};

const reverseWordsInArray = (strings) => {
  strings.split(' ').reverse().join(' ');
};

const onlyEven = (numbers) => {
  // your code here
};

const removeNthElement2 = (index, array) => {
  // your code here
};

const elementsStartingWithAVowel = (strings) => {
  // your code here
};

const removeSpaces = (string) => {
  // your code here
};

const sumNumbers = (numbers) => {
  // your code here
};

const sortByLastLetter = (strings) => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
}
