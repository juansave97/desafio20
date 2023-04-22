const { Router } = require("express");

const { getChat, getChatByEmail } = require(`../controller/chatController`);

const chatRouter = Router();

chatRouter.get(`/`, getChat);
chatRouter.get(`/:email`, getChatByEmail);


module.exports = chatRouter;