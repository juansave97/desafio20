class ProductsDTO {
    constructor(product) {
        this.title = product.title
        this.price = product.price
        this.thumbnail = product.thumbnail
        this.category = product.category
    };
}

module.exports = ProductsDTO;