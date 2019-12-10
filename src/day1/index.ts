import * as fs from 'fs';
import * as path from 'path';

function getInput() {
  let inputPath = path.join(__dirname, './input.txt');
  fs.readFile(inputPath, 'utf-8', (err, data) => {
    if (err) {
      console.log('error >>>', err);
    }

    console.log('data >>>', data);
  });
}

export default async function main() {
  getInput();
  console.log('hello');
}
