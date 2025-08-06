const fibonacci = function(f) {
 if (f < 0) {
  return 'OOPS';
} else if (f == 0) {
  return 0;
}

let prev = 0;
let cur = 1;

for (let i = 1; i < f; i++) {
  const temp = cur;
  cur += prev;;
  prev = temp; 
}

return cur;
};

// Do not edit below this line
module.exports = fibonacci;
