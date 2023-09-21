const palindromes = function (str) {
	const lettersArr = str.match(/\w/g);
	const lettersSubstr = lettersArr.join('');
	const reversedOnlyLetters = lettersArr.reverse().join('');
	return lettersSubstr.toLowerCase() === reversedOnlyLetters.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
