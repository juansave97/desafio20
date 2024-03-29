const storage = require(`../Factories/DAOFactory`);

const ordenesStorage = storage().ordenes;

const sendEmail = require(`../utils/nodemailerGmail`);

const createOrdenController = async (req, res) => {
    try {
        const userLog = req.user;
        const userID = req.body.idUser;
        const orden = await ordenesStorage.createOrden(userID);

        auxEmail(userLog, orden);
        /*
            NOTA:
                -La función encargada de realizar el envío de SMS se encuentra comentada ya que genera gastos.
                -La función encargada de realizar el envío de whatsapp se encuentra comentada ya que genera gastos.
        */
        //sendSMS(`Su pedido ha sido recibido y se encuentra en proceso`, `+14057251618`, `+59894057052`);
        //auxWhatsApp(userLog, orden);

        return res.render(`compraFinalizada`);
    } catch (err) {
        return res.status(404).json({
            error: `Error al crear el la orden ${err}`
        });
    }
};

const viewOrdenesController = async (req, res) => {
    const userID = req.user.id;
    console.log('req user', req.user.id)
    const orders = await ordenesStorage.getAllOrdersByOwner(userID);
    return res.render(`orders`, { allOrders: orders });
}

const auxEmail = async (userLog, orden) => {
    let detallePedido = ``;

    orden.products.forEach(element => {
        detallePedido += `
        <li>UNIDADES: ${element.cantidad}. PRODUCTO: ${element.nombre}. CODIGO: ${element.codigo} </li>
    `;
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.TO_EMAIL,
        subject: `Nuevo pedido de: ${userLog.username}`,
        html: `
            <h3>Nuevo pedido!</h3>
            <p> Datos del cliente:</p>
            <ul>
            <li> Nombre: ${userLog.username}</li>
            <li> Email: ${userLog.email}</li>
            <li> Teléfono: ${userLog.telefono}</li>
            <li> Direccion: ${userLog.direccion}</li>
            </ul>
            <p> Pedido:</p>
            <ul>
            ${detallePedido}
            </ul>
        `
    };
    const email = await sendEmail(mailOptions);
    console.log(email);
}


module.exports = {
    viewOrdenesController,
    createOrdenController
};
