const removeFromArray = function(arr, ...valuesToRemove) {
	return arr.filter((value) => !valuesToRemove.includes(value));
};

// Do not edit below this line
module.exports = removeFromArray;
