const getAge = function(person) {
	const yearOfDeath = ('yearOfDeath' in person) 
		? person.yearOfDeath 
		: new Date().getFullYear();
	const age = yearOfDeath - person.yearOfBirth;
	return age;
}


const sortByAge = function(people) {
	const oldestToYoungest = people.slice().sort((a, b) => {
		const aAge = getAge(a);
		const bAge = getAge(b);
		return bAge - aAge;
	});
	return oldestToYoungest;
}


const findTheOldest = function(people) {
	const oldestToYoungest = sortByAge(people);
	return oldestToYoungest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
