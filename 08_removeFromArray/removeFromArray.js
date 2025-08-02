const removeFromArray = function(arr, ...thingsToRemove) {
  return arr.slice()
    .filter((el) => !thingsToRemove.includes(el));
};

// Do not edit below this line
module.exports = removeFromArray;
