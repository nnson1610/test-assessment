class Product {
    constructor(price, productType) {
        this.price = price;
        this.productType = productType;
    }

    getPrice() {
        return this.price;
    }

    getProductType() {
        return this.productType;
    }
}

module.exports = { Product };