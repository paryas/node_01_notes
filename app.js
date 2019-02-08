console.log('starting app...');

///fs = file system module
const fs = require('fs');
///os = operating system module
const os = require('os');
const notes = require('./notes.js');

console.log('Result:', notes.add(9, -2));

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

console.log('Ending app...');
