const constant = require("../utils/constants");
const User = require("../models/user").User;

class Affiliate extends User {
    getDiscountRate() {
        return constant.DISCOUNT_AFFILIATE;
    }
}

module.exports = { Affiliate };