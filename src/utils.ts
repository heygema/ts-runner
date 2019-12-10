import * as fs from 'fs';

export function getInput(filePath: string): Promise<string> {
  return new Promise((resolve, _) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        resolve('');
      }

      resolve(data);
    });
  });
}
