const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]


//CCC1ecrfGpccZvct
const url = `mongodb+srv://tivi:${password}@cluster0.1x4ks.mongodb.net/?retryWrites=true&w=majority`
// const url =  'mongodb://localhost:27017';

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'my other note',
  date: new Date(),
  important: false,
})

note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
})