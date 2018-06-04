const createPerson = (name, age) => {
   const myObj = {age: (age),
  name: (name)};
   return myObj
};

const getName = (object) => {
  return object.name;
};

const getProperty = (property, object) => {
  return (object[property]);
};

const hasProperty = (property, object) => {
  // your code here
};

const isOver65 = (person) => {
  // your code here
};

const getAges = (people) => {
  return people[0]
};

const findByName = (name, people) => {
  // your code here
};

const findHondas = (cars) => {
  // your code here
};

const averageAge = (people) => {
  // your code here
};

const createTalkingPerson = (name, age) => {
  // your code here
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
}
