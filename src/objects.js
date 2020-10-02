const { TestScheduler } = require("jest");

const createPerson = (name, age) => {
  return {
    name: name,
    age: age,
  };
};

const getName = (object) => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  if (object[property]) {
    return true;
  } else {
    return false;
  }
};

const isOver65 = (person) => {
  return person.age > 65;
};

const getAges = (people) => {
  const mappedArr = people.map(function(person) {
    return person.age;
  });
  return mappedArr;
};

const findByName = (name, people) => {
  let findPers = people.filter(function(findPerson) {
    return findPerson.name === name;
  });
  for (var correctName = 0; correctName < findPers.length; correctName++) {
    return findPers[correctName];
  }
};

const findHondas = (cars) => {
  let findCar = cars.filter(function(findHonda) {
    return findHonda.manufacturer === "Honda";
  });
  return findCar;
};

const averageAge = (people) => {
  const avAgeMap = people.map(function(person) {
    return person.age;
  });
  let sum = avAgeMap.reduce(function(numA, numB) {
    return numA + numB;
  });
  return sum / 3;
};

const createTalkingPerson = (name, age) => {
  return {
    name: name,
    age: age,
    introduce: function(inputName) {
      return `Hi ${inputName}, my name is ${this.name} and I am ${this.age}!`;
    },
  };
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
  createTalkingPerson,
};
