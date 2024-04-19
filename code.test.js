const fs = require('fs');
const jsc = require('jsverify');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

// Unit test #1
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

// Unit test #2
const testingList3 = [
  [1],
  [0, 2],
  [1]
];
const testingList4 = [
  [1],
  [2, 0],
  [1]
];
assert.deepStrictEqual(are_isomorphic(testingList3, testingList4), true); 

// Unit test #3
const testingList5 = [
  [0, 1, 2, 4],
  [0, 3],
  [0, 1, 3],
  [1, 3]
];
const testingList6 = [
  [0, 1, 2],
  [0, 3],
  [0, 1, 3],
  [1]
];
assert.deepStrictEqual(are_isomorphic(testingList5, testingList6), false); 

// Unit test #4
const testingList7 = [
  [2, 4],
  [0],
  [0, 1],
  [1, 3]
];
const testingList8 = [
  [2, 4],
  [0],
  [0, 1],
  [1, 3]
];
assert.deepStrictEqual(are_isomorphic(testingList7, testingList8), true); 

// Unit test #5
const testingList9 = [
  [2],
  [0, 1, 2],
  [1, 2],
  [3, 4]
];
const testingList10 = [
  [2],
  [0, 1, 2]
];
assert.deepStrictEqual(are_isomorphic(testingList9, testingList10), false);

