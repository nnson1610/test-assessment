const assert = require('assert');
const User = require("../question3/models/user").User;
const Affiliate = require("../question3/models/affiliate").Affiliate;
const Employee = require("../question3/models/employee").Employee;
const Product = require("../question3/models/product").Product;
const Bill = require("../question3/models/bill").Bill;
const calcPaymentService = require("../question3/services/calcPaymentService");

let normalUser = new User(1, "2019-05-15");
let twoYrsUser = new User(2, "2015-05-15");
let employeeUser = new Employee(3, "2019/05/15");
let affiliateUser = new Affiliate(4, "2019/05/15");

let productOne = new Product(50, "Grocery");
let productTwo = new Product(200, "Shoes");
let productThree = new Product(100, "Clothes");

let billOne = new Bill(normalUser, [productOne, productTwo, productThree]);
let billTwo = new Bill(twoYrsUser, [productOne, productTwo, productThree]);
let billThree = new Bill(affiliateUser, [productOne, productTwo, productThree]);
let billFour = new Bill(employeeUser, [productOne, productTwo, productThree]);

describe('Question 3 Test Suite', function () {
    it('Calculate Net Amount of Bill. Test Case: 1', function () {
        let netAmount = calcPaymentService.calcPaymentNetAmmount(billOne);
        assert.equal(netAmount, 335);
    });

    it('Calculate Net Amount of Bill. Test Case: 2', function () {
        let netAmount = calcPaymentService.calcPaymentNetAmmount(billTwo);
        assert.equal(netAmount, 320);
    });

    it('Calculate Net Amount of Bill. Test Case: 3', function () {
        let netAmount = calcPaymentService.calcPaymentNetAmmount(billThree);
        assert.equal(netAmount, 305);
    });

    it('Calculate Net Amount of Bill. Test Case: 4', function () {
        let netAmount = calcPaymentService.calcPaymentNetAmmount(billFour);
        assert.equal(netAmount, 250);
    });
});