const findTheOldest = function(people) {
  function getAge(person) {
    let yearOfDeath = person.yearOfDeath
    if (yearOfDeath === undefined) {
      yearOfDeath = new Date().getFullYear();
    }
    return yearOfDeath - person.yearOfBirth;
  }


  return people.reduce((oldest, person) => {
    if (getAge(oldest) < getAge(person)) {
      return person;
    } else {
      return oldest;
    }
  });
};

// Do not edit below this line
module.exports = findTheOldest;
