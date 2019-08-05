const constant = require("../utils/constants");

/**
 * Calculate net payable amount
 * @param {Bill} bill 
 * @return net payable amount
 */
const calcPaymentNetAmmount = (bill) => {
    let percentageDiscountVal = calcPercentageDiscount(bill);
    return percentageDiscountVal - calcBillAmountDiscount(percentageDiscountVal);
};

/**
 * Calculate percentage discount amount of a bill
 * @param {Bill} bill 
 * @return net amount after minus percentage discount 
 */
const calcPercentageDiscount = (bill) => {
    let percentageDiscount = 0;
    let products = bill.getProducts();

    for (let i = 0; i < products.length; i++) {
        if (constant.NON_DISCOUNT_PRODUCT_TYPE.includes(products[i].getProductType())) {
            percentageDiscount += products[i].getPrice();
        } else {
            discountRate = bill.getUser().getDiscountRate();
            percentageDiscount += products[i].getPrice() - (discountRate * products[i].getPrice() / 100);
        }
    }

    return percentageDiscount;
};

/**
 * Calculate bill discount amount of a bill
 * @param {Number} netAmount 
 * @return net amount after minus bill discount 
 */
const calcBillAmountDiscount = (netAmount) => {
    return parseInt(netAmount / constant.DISCOUNT_ON_BILL_TOTAL) * constant.DISCOUNT_ON_BILL_VALUE;
};

module.exports = {
    calcPaymentNetAmmount
};