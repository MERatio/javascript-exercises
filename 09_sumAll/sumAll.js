const sumAll = function(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
    return 'ERROR';
  }

  let min;
  let max;
  let sum = 0;

  if (a < b) {
    [min, max] = [a, b];
  } else {
    [min, max] = [b, a];
  }

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
