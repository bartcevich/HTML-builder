const { on } = require('events');
const fs = require('fs');
const { join } = require('path');
const pathFile = join(__dirname, 'text.txt');
const { stdin, stdout } = require('process');
const readline = require('readline');
let writeStream = fs.writeFile(pathFile, '', function (err) {
  if (err) throw err;
  console.log('Text saved to file!');
});

const rl = readline.createInterface({ input: stdin, output: writeStream });
stdout.write(
  '\x1b[31m' + 'Enter text, click to finish "CTRL + C" or "exit"\n' + '\x1b[0m'
);
let line = '';
rl.on('line', (line) => {
    if (line.toLowerCase().split(' ').indexOf('exit') !== -1) {
      //writeStream.write(line.replace(/exit/gi, ''));
      console.log(line[0]);
    }
    //writeStream.writeFile(line + '\n');
  });

//fs.appendFile(pathFile, line, function (err) {
  //if (err) throw err;
  //console.log(line[0]);
//});