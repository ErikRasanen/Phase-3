const axios = require('axios');

const fetchData = async () => {
	const res = await axios.post('https://httpbin.org/post', 
	{ 
		name: 'Matti',
		title:'student',
		age: 24

	});

	return res.data.json; 

};

// fetchData().then((res) => {
// 	console.log("title:",res.title);
// });

// const test = async () => {
// 	const res = await fetchData();
// 	console.log("name: ",res.name);
// 	console.log("age: ",res.age);
// }
// test()

module.exports = fetchData;
