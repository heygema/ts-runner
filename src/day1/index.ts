import * as path from 'path';
import {getInput} from '../utils';

export default async function main() {
  let inputPath = path.join(__dirname, './input.txt');
  let inputs = (await getInput(inputPath))
    .split('\n')
    .map(Number)
    .slice(1, 10);

  console.log('hello', inputs);
}
