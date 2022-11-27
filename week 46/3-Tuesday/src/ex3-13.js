const mongoose = require('mongoose')

//
const express = require("express");
const app = express();

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]


const url = `mongodb+srv://fullstack:${password}@cluster0.1x4ks.mongodb.net/personApp?retryWrites=true&w=majority`;

mongoose.connect(url)

const pesonSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model('Person', pesonSchema)


app.get('/api/persons', (request, response) => {
  // Your code here
})

app.get('/api/persons/:id', (request, response) => {
  console.log(request.params.id);
  // Your code here
})


//
app.listen(3001, () => {
  console.log(`Server running on port 3001`);
});