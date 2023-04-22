const ProductsDAOMongoDB = require(`../daos/ProductsDAOMongoDB`);

//Instancia contenedores:
const storageProducts = new ProductsDAOMongoDB();

const socketIoProducts = (io) => {
    //socket Products
    io.on(`connection`, socket => {
        socket.on(`sendProduct`, async () => {
            //const allProductsFromDB = await selectAllProducts();
            const allProductsFromDB = await storageProducts.getAll();
            //Servidor --> Cliente : Se envian todos los mensajes al usuario que se conectó.
            socket.emit(`allProducts`, allProductsFromDB);

        });

        socket.on(`sendProductWithCategory`, async (category) => {
            const allProductsFromDB = await storageProducts.getAllProductsByCategory(category);
            socket.emit(`allProducts`, allProductsFromDB);
        });

        socket.on(`addProducts`, async data => {
            const newProducto = {
                nombre: `${data.nombre}`,
                descripcion:  `${data.descripcion}`,
                codigo:  `${data.codigo}`,
                thumbnail: `${data.thumbnail}`,
                precio: Number(data.precio),
                stock:  `${data.stock}`,
                category: `${data.category}`
            };

            //const product = await insertProduct(newProducto);
            const product = await storageProducts.save(newProducto);

            //Envio el producto nuevo a todos los clientes conectados
            io.sockets.emit(`refreshTable`, product);

        });
    });

}

module.exports = socketIoProducts;

