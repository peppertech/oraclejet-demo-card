'use strict';

const fs = require('fs');
process.chdir("../../src/js");

let rawdata = fs.readFileSync('path_mapping.json');
let mappings = JSON.parse(rawdata);

const compDetails = {
  cwd: "node_modules/oraclejet-demo-card",
  debug: {
    src: ["**"],
    path: "jet-composites/oraclejet-demo-card/"
  },
  release: {
    src: ["**"],
    path: "jet-composites/oraclejet-demo-card/"
  }
}

mappings.libs['oraclejet-demo-card'] = compDetails;
fs.writeFileSync('path_mapping.json', JSON.stringify(mappings, null, 2));
console.log("The oraclejet-demo-card component has been added to your path_mapping.json file \n Add 'oraclejet-demo-card/loader' to your viewmodel dependency block to initialize this component. \n Add <demo-card> to your view to use the component.")
