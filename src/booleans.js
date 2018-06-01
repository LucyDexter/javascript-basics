const negate = (a) => {
  return (!a)
};

const both = (a, b) => {
  return (a && b)
};

const either = (a, b) => {
  return (a || b)
};

const none = (a, b) => {
  if(a === false && b === false) { 
  return true} else
  {return false}
};

const one = (a, b) => {

};

const truthiness = (a) => {
  return !!a
};

const isEqual = (a, b) => {
  if(a === b) {
    return true} else
    {return false}
};

const isGreaterThan = (a, b) => {
  if( a > b) {
    return true} else
    {return false}
};

const isLessThanOrEqualTo = (a, b) => {
  if(a <= b) {
    return true} else
    {return false}
};

const isOdd = (a) => {
  return a % 2 === 1
};

const isEven = (a) => {
  return a % 2 === 0
};

const isSquare = (a) => {
  
};

const startsWith = (char, string) => {
  // your code here
};

const containsVowels = (string) => {
  // your code here
};

const isLowerCase = (string) => {
  // your code here
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
}
