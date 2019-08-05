var questionOneEnum = {
    // BREAKING CHARACTER
    BREAK_ITEM: '\n',
    BREAK_SEMICOLON: ';',
    BREAK_EQUAL: '=',

    // MESSAGE
    WARN_DUPLICATE_KEY: "Duplicate key of object",
    WARN_WRONG_KEYVALUE_BREAK: "Wrong key/value pair format",
    WARN_WRONG_ITEM_BREAK: "Wrong item format",
    WARN_WRONG_KEY: "Wrong item format"
};

/**
 * Convert array to text
 * @param {Array} arr input array
 * @returns {Object} resultObj: {resultStr: result string, msgArr: additional message}
**/
const store = (arr = []) => {
    let resultObj = {
        resultStr: "",
        msgArr: []
    };

    // validate input
    if (!arr || !Array.isArray(arr) || arr.length == 0) {
        return resultObj;
    }

    let arrLength = arr.length;
    // loop array input
    for (let i = 0; i < arrLength; i++) {
        // loop object attributes
        Object.keys(arr[i]).forEach((key, index) => {
            // append key=value to result string
            resultObj.resultStr += key;
            if (!arr[i][key]) {
                resultObj.msgArr.push(questionOneEnum.WARN_WRONG_KEY);
                return;
            }

            resultObj.resultStr += questionOneEnum.BREAK_EQUAL + arr[i][key];
            // append ";" to separate key/value pair
            if (index + 1 != Object.keys(arr[i]).length) {
                resultObj.resultStr += questionOneEnum.BREAK_SEMICOLON;
            }
        });
        // append "\n" to separate key/value pair
        if (i + 1 != arrLength) {
            resultObj.resultStr += questionOneEnum.BREAK_ITEM;
        }
    }
    // escape "\n" on result string
    resultObj.resultStr.replace(/\n/g, "\n");

    return resultObj;
};

/**
 * Convert text to array
 * @param {String} str input string
 * @returns {Object} resultObj: {resultArr: result array, msgArr: additional message}
**/
const load = (str = "") => {
    let resultObj = {
        resultArr: [],
        msgArr: []
    };

    // validate input
    if (!str || str.length == 0) {
        return resultObj;
    }

    // split string by "\n"
    let itemBreakArr = str.split(questionOneEnum.BREAK_ITEM);
    let itemBreakArrLength = itemBreakArr.length;

    // loop array from string splitted by "\n"
    for (let i = 0; i < itemBreakArrLength; i++) {
        let tempObj = {};
        // split string by ";"
        let semiBreakArr = itemBreakArr[i].split(questionOneEnum.BREAK_SEMICOLON);

        // loop array from string splitted by ";"
        for (let j = 0; j < semiBreakArr.length; j++) {
            // when split ";" item is blank
            if (semiBreakArr[j].length == 0) {
                resultObj.msgArr.push(questionOneEnum.WARN_WRONG_ITEM_BREAK);
                continue;
            }

            // split string by ";"
            let index = semiBreakArr[j].indexOf(questionOneEnum.BREAK_EQUAL);

            // when cannot find "=" in string
            if (index == -1) {
                resultObj.msgArr.push(questionOneEnum.WARN_WRONG_KEYVALUE_BREAK);
                continue;
            }

            let objKey = semiBreakArr[j].substring(0, index);
            let objValue = semiBreakArr[j].substring(index + 1);

            // check duplicate key
            if (tempObj.hasOwnProperty(objKey)) {
                resultObj.msgArr.push(questionOneEnum.WARN_DUPLICATE_KEY);
            }
            // create object
            tempObj[objKey] = objValue;
        }
        // push object to result array
        if (Object.keys(tempObj).length > 0) {
            resultObj.resultArr.push(tempObj);
        }
    }
    return resultObj;
};

module.exports = {
    store,
    load
};