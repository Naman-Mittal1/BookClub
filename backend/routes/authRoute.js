const express = require("express");
const authRouter = express.Router();
const authController = require('../controllers/authController');

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    
    next();
  }

  
authRouter.post('/register', authController.register)
authRouter.post('/login', authController.login)
authRouter.delete('/logout', verifyToken, authController.logout)
authRouter.get('/me', verifyToken, authController.verifyToken)

module.exports = authRouter;
