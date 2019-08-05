const testData = require('../testdata/question1');
const quest1 = require('../question1/question1');
const assert = require('assert');

describe('Question 1 Test Suite', function () {
  // Test Load function
  testData.QUESTION1.LOAD.forEach((item, index) => {
    it('Load Function Test. Case: ' + (index + 1), function () {
      let result = quest1.load(item.input);
      assert.deepEqual(result.resultArr, item.output);
      printMessageOnLoadFunc(result.msgArr, (index + 1));
    });
  });

  // Test Store function
  testData.QUESTION1.STORE.forEach((item, index) => {
    it('Store Function Test. Case: ' + (index + 1), function () {
      let result = quest1.store(item.input);
      assert.equal(result.resultStr, item.output);
      printMessageOnLoadFunc(result.msgArr, (index + 1));
    });
  });
});

/**
 * @description Print message when running load function
 * @param {Array} msgArr 
 * @param {Array} index test case index
 */
function printMessageOnLoadFunc(msgArr, index) {
  if (!msgArr || !Array.isArray(msgArr) || msgArr.length == 0) {
    return;
  }

  console.log("Case " + index + ": ");
  for (let i = 0; i < msgArr.length; i++) {
    console.log(msgArr[i]);
  }
}