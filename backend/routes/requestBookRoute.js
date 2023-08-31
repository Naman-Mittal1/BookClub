const express = require("express")
const requestBookController = require("../controllers/requestBookController")
const requestBookRouter = express.Router();

requestBookRouter.post('/request', requestBookController.createRequest)

module.exports = requestBookRouter;