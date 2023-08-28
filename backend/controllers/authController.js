// authController.js

const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {

  const { name, email, password } = req.body;
  console.log(req.body);

  try {
    
    // Generate salt and hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = await User.create({
      name, 
      email,
      password: hashedPassword
    });

    // Generate JWT token
    const token = generateToken(user.id);

    res.status(201).json({
      status: 'success',
      data: {
        token,
        user
      } 
    });

  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: 'error',
      message: 'Error creating new user. Please try again'
    });
  }

}


const login = async (req, res) => {
  
  const { email, password } = req.body;

  try {
    
    // Find user by email
    const user = await User.findOne({ email });
    
    // Check if passwords match
    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch) {
      return res.status(401).json({
        status: 'fail',
        message: 'Incorrect email or password.'
      });
    }

    // Generate JWT token if login successful
    const token = generateToken(user.id);

    res.status(200).json({
      status: 'success', 
      token,
      data: {
        user  
      }
    });

  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: 'Error logging in user. Please try again.'
    });
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

const generateToken = (id) => {
  
  // Hardcoded for simplicity, use env vars instead
  return jwt.sign({ id }, 'secretkey', {
    expiresIn: '30d'
  });

}


exports.register = register;
exports.login = login;
exports.logout = logout;
