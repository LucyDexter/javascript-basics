const getNthElement = (index, array) => {
  return array[index];
}

const arrayToCSVString = (array) => {
  return array.join();
};

const csvStringToArray = (string) => {
  return string.split(',');
};

const addToArray = (element, array) => {
    array.push(element);
};

const addToArray2 = (element, array) => {
  
};

const removeNthElement = (index, array) => {
  return array.splice(2, 1);
};

const numbersToStrings = (numbers) => {
  // consistency in indentation
  const string = numbers.toString();
 return string.split(',');
};

const uppercaseWordsInArray = (strings) => {
  return strings.map(a => a.toUpperCase())
};

const reverseWordsInArray = (strings) => {
  return strings.split('').reverse().join('');
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
  return string.replace(/\s/g, '');
};

const sumNumbers = (numbers) => {
  return numbers.reduce(function(a, b) {
    return a + b
  })
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
