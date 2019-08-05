const moment = require("moment");

const isOverTwoYearFromNow = (date) =>
    moment()
        .subtract(2, 'year')
        .isAfter(date);

module.exports = {
    isOverTwoYearFromNow
};