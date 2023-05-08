const fs = require('fs');
const { join } = require('path');
const { stderr } = require ('process');//stdout
const pathFile = join (__dirname, 'text.txt');
let readableStream = fs.createReadStream(pathFile, 'utf8');
readableStream.pipe(stderr);