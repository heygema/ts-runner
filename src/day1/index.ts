import * as path from 'path';
import {getInput} from '../utils';

export default async function main() {
  let inputPath = path.join(__dirname, './input.txt');

  function fuelCounter(input: number) {
    return Math.floor(input / 3) - 2;
  }

  let inputs = (await getInput(inputPath))
    .split('\n')
    .map(Number)
    .map(fuelCounter)
    .reduce((acc, current) => acc + current, 0);

  return inputs;
}
