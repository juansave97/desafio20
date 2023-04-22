const MessageDTO = require("../../DTOs/MessageDTO");

class Contenedor {
    constructor(mongoDB, messageModel, userModel) {
        this.mongoDB = mongoDB;
        this.messageModel = messageModel;
        this.userModel = userModel
    }

    async save(message) {
        try {
            // Instancia del modelo message
            const newMessage = new this.messageModel(message);
            console.log('newMessage', newMessage)

            console.log('estoy desde MongoDB');
            this.mongoDB
                .then(_ => newMessage.save())
                .catch(err => console.log(`Error: ${err.message}`));

        } catch (error) {
            console.log('error', error)
            console.error(`Error en save`);
        }
    }

    async getAll() {
        try {
            /*
            Esta lógica va en Repository:

            const messages = await this.messageModel.find();
            const messageDTO = messages.map(message => new MessageDTO(message));
            */
            const messages = await this.messageModel.find();
            const messageDTO = messages.map(message => new MessageDTO(message));

            if (messageDTO) {
                return messageDTO;
            } else {
                return false;
            }
        } catch (error) {
            throw Error(`Error en getAll`);
        }
    }

    async getAllMessagesByEmail(email) {
        let docs = false
        docs = await this.messageModel.find({ "author.id": email });
    
        if (docs) {
            return docs;
        } else {
            return false;
        }
    }
}
module.exports = Contenedor;
