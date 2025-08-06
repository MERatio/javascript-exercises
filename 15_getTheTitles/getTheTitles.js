const getTheTitles = function(books) {
  return books.reduce((bookTitles, book) => {
    return [...bookTitles, book.title];
  }, []);
};

// Do not edit below this line
module.exports = getTheTitles;
