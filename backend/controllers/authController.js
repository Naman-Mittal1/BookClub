
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    try{
        const { name, username, email, password } = req.body;
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ message: "Username already exists" });
    }
    const checkEmail = await User.findOne({ email });
    if (checkEmail) {
        return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, username, email, password: hashedPassword });
    await newUser.save();
    return res.status(200).json({ message: "User registered successfully" });
    }catch(err){
        return res.status(400).json({message: "Unable to register user"})
    }
  }


const login = async (req, res) => {
    try{
        const { username, password } = req.body;
  
    const user = await User.findOne({ username });
  
    if (!user) {
      return res
        .status(400)
        .json({ message: "Username is incorrect" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(400)
        .json({ message: "password is incorrect" });
    }
    const token = jwt.sign({ id: user._id }, "secret");
    res.json({ token, userID: user._id });
    }catch(err){
        return res.status(400).json({message: "Unable to login user"})
    }
  }

const logout = async(req, res)=>{
    res.clearCookie('token')

    if (req.session) {
      req.session.destroy(function(error) {
        if (error) {
          return res.status(500).send(error);
        }
        return res.status(200).send({
          message: 'You have been logged out successfully'
        });
      });
    } else {
      return res.status(200).send({
        message: 'Your cookie was not stored'
      });
    }

}

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    jwt.verify(authHeader, "secret", (err) => {
      if (err) {
        return res.sendStatus(403);
      }
      next();
    });
  } else {
    res.sendStatus(401);
  }
};


exports.register = register;
exports.login = login;
exports.logout = logout;
exports.verifyToken = verifyToken
