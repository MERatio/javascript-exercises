const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
	return nums.reduce((acc, num) => acc + num, 0);
};

const multiply = function(nums) {
  return nums.reduce((product, num) => product * num);
};

const power = function(base, exp) {
	return base ** exp;
};

const factorial = function(n) {
	if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
