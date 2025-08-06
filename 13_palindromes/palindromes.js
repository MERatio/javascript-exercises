const palindromes = function (str) {
  const wordChars = str.toLowerCase()
    .replace(/\W/g, '')
    .split('');  
  const reversedWordChars = wordChars.toReversed();
  return wordChars.join('') === reversedWordChars.join('')
};

// Do not edit below this line
module.exports = palindromes;
