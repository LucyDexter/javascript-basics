const sayHello = (string) => {
  return ("Hello, " + string + "!")
};

const uppercase = (string) => {
  return string.toUpperCase(string);
};

const lowercase = (string) => {
  return string.toLowerCase(string);
};

const countCharacters = (string) => {
  return string.length
};

const firstCharacter = (string) => {
  return string.charAt(0);
};

const firstCharacters = (string, n) => {
  return string.substring(string, n);
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
}
