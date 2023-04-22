const ProductosDAOMongoDB = require(`../DAOs/ProductsDAOMongoDB`);
const MessagesDAOMongoDB = require(`../DAOs/MessageDAOMongoDB`);
const CarritoDAOMongoDB = require(`../DAOs/CarritoDAOMongoDB`);
const OrdenesDAOMongoDB = require(`../DAOs/OrdenesDAOMongoDB`);

const getStorage = () => {
    //const storage = process.env.STORAGE;
    const storage = `MongoDb`; //Prueba: forzar variable para trabajar con la DB deseada.

    switch (storage) {

        case `MongoDB`:
            return {
                productos: new ProductosDAOMongoDB(),
                mensajes: new MessagesDAOMongoDB(),
                carrito: new CarritoDAOMongoDB(),
                ordenes: new OrdenesDAOMongoDB(),
            }
            break

        default:
            return {
                productos: new ProductosDAOMongoDB(),
                mensajes: new MessagesDAOMongoDB(),
                carrito: new CarritoDAOMongoDB(),
                ordenes: new OrdenesDAOMongoDB(),
            }
            break
    }
}

module.exports = getStorage;