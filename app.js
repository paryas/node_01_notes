console.log('starting app...');

///fs = file system module
const fs = require('fs');
///os = operating system module
const os = require('os');

var user = os.userInfo();
//console.log(user);

///appendFile to create the txt file and append into it
//fs.appendFileSync('greeting.txt', 'Hello world\r\n');
fs.appendFileSync('greeting.txt', `Hello ${user.username}`);
//fs.appendFileSync('D:\\greeting.txt', 'Hello world');

console.log('Ending app...');
