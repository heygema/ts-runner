import path from 'path';

let whichday = process.argv[2];
let required = path.join(__dirname, 'lib/', whichday);
let main = require(required);

let result = main.default && main.default();

Promise.resolve(result).then(respond => {
  console.log(respond);
});
