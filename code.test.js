const fs = require('fs');
const jsc = require('jsverify');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

// Unit testing
const testingList1 = [
  [1, 2],
  [0, 2],
  [0, 1]
];

const testingList2 = [
  [1, 2],
  [0],
  [0]
];

assert.deepStrictEqual(are_isomorphic(testingList1, testingList2), false); 
