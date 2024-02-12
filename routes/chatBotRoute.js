const chatBotController = require("../controllers/chatBotController.js");
const express = require('express');
const chatBotRouter = express.Router();

chatBotRouter.get('/chatbot', chatBotController.testChat);

module.exports= chatBotRouter;