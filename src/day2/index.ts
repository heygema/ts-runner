import * as path from 'path';
import {getInput} from '../utils';

type action = '+' | '*' | 'halt';

type opcodes = {
  [key: string]: {
    action: action;
  };
};

function getOpResult(first: number, second: number, action: action) {
  switch (action) {
    case '+':
      return first + second;
    case '*':
      return first * second;
    default:
      return NaN;
  }
}

export default async function main() {
  let inputPath = path.join(__dirname, './input.txt');
  let input = await getInput(inputPath);

  let running = 1;
  let currentPos = 0;

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
  } as opcodes;

  let codes = input.split(',').map(Number) as number[];

  // initiate assignment
  codes[1] = 12;
  codes[2] = 2;

  while (running) {
    let command = opcodes[codes[currentPos]];

    if (command && command.action === 'halt') {
      running = 0;
    }

    if (command && command.action) {
      let firstInputIndex = codes[currentPos + 1];
      let secondInputIndex = codes[currentPos + 2];
      let targetIndex = codes[currentPos + 3];

      let firstInput = codes[firstInputIndex];
      let secondInput = codes[secondInputIndex];

      let opResult = getOpResult(firstInput, secondInput, command.action);

      if (isNaN(opResult)) {
        running = 0;
      } else {
        // reassign value in the position of targetIndex
        codes[targetIndex] = opResult;
      }

      currentPos += 4;
    } else {
      running = 0;
    }
  }

  return codes;
}
