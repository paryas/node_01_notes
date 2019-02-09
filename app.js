// fs = file system module
const fs = require('fs');
// os = operating system module
const os = require('os');
const _ = require('lodash');
// my own js file
const notes = require('./notes.js');
const yargs = require('yargs');

// #region rgs
//const argv = yargs.argv;
const titleOption = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};

const bodyOption = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};

const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOption,
    body: bodyOption
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: titleOption
  })
  .command('remove', 'Remove a note', {
    title: titleOption
  })
  .help().argv;
var command = argv._[0];

// console.log('Process', process.argv);
// console.log('Yargs', argv);
// var command = process.argv[2];

// console.log('command: ', command);
// #endregion

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  console.log('NoteObj', note);
  if (note) {
    console.log('Note created');
    notes.logNote(note);
  } else {
    console.log('Note title taken');
  }
} else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} notes(s)`);
  allNotes.forEach((note) => {
    notes.logNote(note);
  });
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log('Note found');
    notes.logNote(note);
  } else {
    console.log('Note not found');
  }
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
} else {
  console.log('Command not recognized');
}

//#region Comments
// console.log('Result:', notes.add(9, -2));

// var filteredArray = _.uniq(['Pouyan', 1, 'Pouyan', 1, 2, 3, 4]);
// console.log(filteredArray);

// console.log(_.isString(true));
// console.log(_.isString('true'));

//var user = os.userInfo();
//console.log(user);

// var res = notes.addNote();
// console.log(res);

///appendFile to create the txt file and append into it
// fs.appendFileSync('greeting.txt', 'Hello world\r\n');
// fs.appendFileSync(
//   'greeting.txt',
//   `\r\nHello ${user.username}! You are ${notes.age}.`
// );
// fs.appendFileSync('D:\\greeting.txt', 'Hello world');

// console.log('Ending app...');
//#endregion
