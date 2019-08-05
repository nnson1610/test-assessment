const dateUtils = require("../utils/dateUtils");
const constant = require("../utils/constants");

class User {
    constructor(id, createdAt) {
        this.id = id;
        this.createdAt = createdAt;
    }

    getCreatedAt() {
        return this.createdAt;
    }

    getDiscountRate() {
        if (dateUtils.isOverTwoYearFromNow(this.getCreatedAt())) {
            return constant.DISCOUNT_TWO_YEARS_USER;
        }

        return 0;
    }
}

module.exports = { User };