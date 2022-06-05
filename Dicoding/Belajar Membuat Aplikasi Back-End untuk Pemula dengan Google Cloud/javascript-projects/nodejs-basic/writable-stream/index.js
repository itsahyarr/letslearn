const fs = require('fs');
const path = require('path');

const file = path.resolve(__dirname, 'output.txt');
const writableStream = fs.createWriteStream(`${file}`);

writableStream.write('Ini merupakan teks baris pertama!\n');
writableStream.write('Ini merupakan teks baris kedua!\n');
writableStream.end('Akhir dari writable stream!\n');