'use strict';

const fs = require('fs');
// const testFolder = __dirname+"./";
process.chdir("../../src/js");
console.log('dir: '+__dirname);

// fs.readdir(testFolder, (err, files) => {
//   files.forEach(file => {
//     console.log(file);
//   });
// });


let rawdata = fs.readFileSync('path_mapping.json');
let mappings = JSON.parse(rawdata);

const compDetails = {
  cwd: "node_modules/oraclejet-demo-card",
  debug: {
    src: ["**"],
    path: "jet-composites/oraclejet-demo-card/loader.js"
  },
  release: {
    src: ["**"],
    path: "jet-composites/oraclejet-demo-card/loader.js"
  }
}

mappings.libs['oraclejet-demo-card'] = compDetails;
fs.writeFileSync('path_mapping.json', JSON.stringify(mappings,null,2));

// for (var lib in mappings.libs) {
//   console.log("key:" + lib + ", value:" + mappings.libs[lib]);
// }
// console.log('Data: ' + JSON.stringify(mappings.libs['oraclejet-demo-card']));
//console.log('full: '+ JSON.stringify(mappings,null, 2));