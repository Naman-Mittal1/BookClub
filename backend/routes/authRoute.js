const express = require("express");
const authRouter = express.Router();
const authController = require('../controllers/authController');
const { register } = require('../controllers/authController');


authRouter.post('/register', authController.register)
authRouter.post('/login', authController.login)
authRouter.delete('/logout', authController.logout)


module.exports = authRouter;
