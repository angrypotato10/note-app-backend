const mongoose = require('mongoose');

if (process.argv.length < 3) {
  console.log('give password as argument');
}

const password = process.argv[2];

const url = `mongodb+srv://fullstack:${password}@cluster0-pv7wt.mongodb.net/note-app?retryWrites=true&w=majority`;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
});

const Note = mongoose.model('Note', noteSchema);

Note.find({ important: true }).then((result) => {
  result.forEach((note) => {
    console.log(note);
  });
  mongoose.connection.close();
});
