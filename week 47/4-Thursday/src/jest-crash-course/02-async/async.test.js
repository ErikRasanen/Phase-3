const fetchData = require('./async');

it('should return title', () => {
	fetchData().then((res) => {
		expect(res.title).toBe("student");
	});
});

// toBe checks that a value is what you expect. It uses === to check strict equality.


it('should return age', async () => {
	const res = await fetchData();
	expect(res.age).toBe(24);
});

// toEqual:  Use when you want to check that two objects have the same value. 
it('should return object', async () => {
	const res = await fetchData();
	expect(res).toEqual({ 
		name: 'Matti',
		title:'student',
		age: 24

	});
});