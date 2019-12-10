import * as path from 'path';
import {getInput} from '../utils';

export default async function main() {
  let inputPath = path.join(__dirname, './input.txt');
  let input = await getInput(inputPath);

  let running = 1;
  let indexAccess = 0;

  const opcodes = {
    1: {
      action: '+',
    },
    2: {
      action: '*',
    },
    99: {
      action: 'halt',
    },
  };

  let codes = input
    .split(',')
    .slice(0, 12)
    .map(Number) as number[];

  while (running) {
    let command = opcodes[codes[indexAccess]];

    let firstInputIndex = codes[indexAccess + 1];
    let secondInputIndex = codes[indexAccess + 2];
    let targetIndex = codes[indexAccess + 3];

    let firstInput = codes[firstInputIndex];
    let secondInput = codes[secondInputIndex];

    console.log(codes[indexAccess]);
  }

  return codes;
}
