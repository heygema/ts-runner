import path from 'path';

let whichday = process.argv[2];
let required = path.join(__dirname, 'lib/', whichday);
let main = require(required);

main.default && main.default();
