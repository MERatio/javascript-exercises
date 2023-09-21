const fibonacci = function(member) {
	if (member < 0) {
		return 'OOPS';
	}

	if ([0, 1].includes(member)) {
		return member;
	}

	let prev = 1;
	let cur = 1;
	let curDummy = cur;

	for (let i = 3; i <= member; i++) {
		curDummy = cur;
		cur = prev + cur;
		prev = curDummy;
	}

	return cur;
};

// Do not edit below this line
module.exports = fibonacci;
