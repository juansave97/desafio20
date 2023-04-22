const mongoDB = require(`../db/options/mongoDB`);

const carritoModel = require(`../db/models/carrito`);
const productsModel = require(`../db/models/products`);
const userModel = require(`../db/models/user`);

const ContenedorCarrito = require(`../db/contenedor/ContenedorCarritos`);


class CarritoDAOMongoDB extends ContenedorCarrito {
    constructor() {
        super(mongoDB, carritoModel, productsModel, userModel);
    };
};

module.exports = CarritoDAOMongoDB;


