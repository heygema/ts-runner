#!/usr/bin/env node

import path from 'path';
import fs from 'fs';

function main() {
  let whichToRun = process.argv[2];
  let required = path.join(__dirname, 'lib/', whichToRun);
  let main = require(required);

  let result = main.default && main.default();

  Promise.resolve(result).then(respond => {
    console.log(respond);
  });
}

fs.exists(path.join(__dirname, 'lib/'), exist => {
  if (exist) {
    main();
    return;
  } else {
    console.log("build folder doesn't exist");
    return;
  }
});
