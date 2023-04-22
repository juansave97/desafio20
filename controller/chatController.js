
const mongoose = require('mongoose');
const MessageDAOMongoDB = require(`../daos/MessageDAOMongoDB`);

//Instancia contenedores:
const storageMessages = new MessageDAOMongoDB();

const getChat = (req, res) => res.render('chat');

const getChatByEmail = async (req, res) => { 
    const email = req.params.email;
    const allMessageFromDB = await storageMessages.getAllMessagesByEmail(email);
    res.render('chatByEmail', { allMessages: allMessageFromDB }); 
}

module.exports = {
    getChat,
    getChatByEmail
};
