const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://tivi:${password}@cluster0.1x4ks.mongodb.net/class?retryWrites=true&w=majority`
// const url =  'mongodb://localhost:27017';


mongoose.connect(url);

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model("Person", personSchema);

if (process.argv.length === 5) {
  const person = new Person({
    name: process.argv[3],
    number: process.argv[4],
  });

  person.save().then(() => {
    console.log("person added!");
    mongoose.connection.close();
  });
}

if (process.argv.length === 3) {

  Person.find({}).then((persons) => {
    console.log("phonebook:")
    persons.forEach((person) => {
      console.log(person.name, person.number);
    });
    mongoose.connection.close();
  });


}
