"use strict"




const nubmer = ['1', '2', '4', '4', '3', '1', '1'];

const countNumber = (list) => {
	const count = {};

	list.forEach(f => {
		if (!count[f]) {
			count[f] = 1;
		} else {
			count[f] ++;
		}
	});

	return count;
};

console.log(nubmer);

console.log(countNumber(nubmer));

const arr = [5,5,5];
