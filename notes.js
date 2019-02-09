//#region Comments
// console.log('Starting notes.js ...');
// console.log(module);

// module.exports.age = 25;

// module.exports.addNote = () => {
//   console.log('addNote');
//   return 'New note';
// };

// module.exports.add = (a, b) => {
//   return a + b;
// };
//#endregion

const fs = require('fs');

// #region utilities
var fetchNotes = () => {
  try {
    var noteString = fs.readFileSync('notes-data.json');
    return (notes = JSON.parse(noteString));
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var logNote = (note) => {
  console.log('--');
  console.log(`title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};
// #endregion

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length == 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  return fetchNotes();
};

var getNote = (title) => {
  var notes = fetchNotes();
  var filteredNote = notes.filter((note) => (note.title = title));
  return filteredNote[0];
};

var removeNote = (title) => {
  var notes = fetchNotes();
  var filterNotes = notes.filter((note) => note.title !== title);
  saveNotes(filterNotes);

  return notes.length !== filterNotes.length;
};

module.exports = {
  // addNote: addNote
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
