const constant = require("../utils/constants");
const User = require("../models/user").User;

class Employee extends User {
    getDiscountRate() {
        return constant.DISCOUNT_EMPLOYEE;
    }
}

module.exports = { Employee };