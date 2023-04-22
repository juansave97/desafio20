const mongoDB = require(`../db/options/mongoDB`);

const messageModel = require(`../db/models/message`);
const userModel = require(`../db/models/user`);

const ContenedorMessage = require(`../db/contenedor/ContenedorMessage`);

class MessageDAOMongoDB extends ContenedorMessage {
    constructor() {
        super(mongoDB, messageModel, userModel);
    };
};

module.exports = MessageDAOMongoDB;