'use strict';

console.log(`Run 🏃‍♂️🏃‍♂️`);

fetch('https://api.github.com/users/rzonsol/repos?sort=updated&per_page=4')
	.then(resp => resp.json())
	.then(resp => {
		console.log('Data download!!!');
		console.table(resp);
	})
	.catch(errors => {
		console.log(errors);
	});
