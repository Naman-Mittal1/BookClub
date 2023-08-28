// chatController.js

const Chat = require('../models/chatModel');

const initiateChat = async (req, res) => {

  const { recipientId } = req.body;

  try {

    const user1 = req.user._id;

    const chat = await Chat.create({
      user1,
      user2: recipientId
    });

    res.status(200).json(chat);

  } catch (error) {
    res.status(400).json({ error: 'Error creating chat' }); 
  }

}


const getChats = async (req, res) => {
  
  try {

    const userId = req.params.userId;
    
    const chats = await Chat.find({
      $or: [
        { user1: userId },
        { user2: userId }  
      ]
    }).populate('user1 user2');

    res.status(200).json(chats);

  } catch (error) {
    res.status(400).json({ error: 'Error fetching chats' });
  }

}

exports.initiateChat = initiateChat
exports.getChats = getChats
