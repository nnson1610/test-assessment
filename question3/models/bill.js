class Bill {
    constructor(user, products) {
        this.user = user;
        this.products = products;
    }

    getUser() {
        return this.user;
    }

    getProducts() {
        return this.products;
    }
}

module.exports = { Bill };