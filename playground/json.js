//#region
// var obj = {
//   name: 'Pouyan'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);
// console.log(typeof obj);
// console.log(obj);

// var personString = '{"name" : "Pouyan", "age" : 45}';
// var person = JSON.parse(personString);

// console.log(typeof person);
// console.log(person);
// console.log(person.age);
//#endregion

const fs = require('fs');

var originalNote = {
  title: 'Some title',
  body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
