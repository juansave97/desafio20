const storage = require(`../Factories/DAOFactory`);

const productsStorage = storage().productos;

const getDataHome = async (req, res) => {
    try {
        userLog = req.user;

        if (userLog) {
            const allProducts = await productsStorage.getAll();
            console.log(allProducts)
            return res.render(`productos`, { allProducts, userLog });
        } else {
            return res.render(`loginSession`);
        }
    } catch (err) {
        return res.status(404).json({
            error: `Error al obtener todos los productos${err}`
        });
    }
}

module.exports = {
    getDataHome,
};

