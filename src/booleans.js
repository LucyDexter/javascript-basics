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
  if(a === true ^ b === true ) {
    return true
  }
  else {
    return false
  }
};

const truthiness = (a) => {
  if (a) {
    return true
  }
  else {
    return false
  }
};

const isEqual = (a, b) => {
  return a === b
};

const isGreaterThan = (a, b) => {
  return a > b
};

const isLessThanOrEqualTo = (a, b) => {
  return a <= b
};

const isOdd = (a) => {
 if (a % 2 === 0) {
   return false
 }
 else {
   return true
 }
};

const isEven = (a) => {
  if (a % 2 === 0) {
    return true
  }
  else {
    return false
  }
};

const isSquare = (a) => {
  return Math.sqrt(a) % 1 === 0
};

const startsWith = (char, string) => {
  return string.startsWith(char)
};

const containsVowels = (string) => {
  /*  practice code for (let characterIndex = 0; characterIndex < string.length; characterIndex ++)
       return string === ['a','e','i','o','u'].include(string[characterIndex]) */
      }; 

const isLowerCase = (string) => {
  for (let characterIndex = 0; characterIndex < string.length; characterIndex++)
    return string === string.toLowerCase(string[characterIndex])
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
