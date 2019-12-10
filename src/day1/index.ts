import * as path from 'path';
import {getInput} from '../utils';

export default async function main() {
  let inputPath = path.join(__dirname, './input.txt');

  function fuelCounter(input: number) {
    return Math.floor(input / 3) - 2;
  }

  return (await getInput(inputPath))
    .split('\n')
    .filter(massStr => massStr !== '')
    .map(Number)
    .map(fuelCounter)
    .reduce((acc, current) => acc + current, 0) as number;
}
