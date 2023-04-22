const mongoDB = require(`../db/options/mongoDB`);

const productsModel = require(`../db/models/products`);
const userModel = require(`../db/models/user`);
const ordenModel = require(`../db/models/orders`);

const ContenedorOrdenes = require(`../db/contenedor/ContenedorOrdenes`);


class OrdenesDAOMongoDB extends ContenedorOrdenes {
    constructor() {
        super(mongoDB, productsModel, userModel, ordenModel);
    };
};

module.exports = OrdenesDAOMongoDB;
