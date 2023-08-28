const express = require('express');
const { initiateChat, getChats } = require('../controllers/chatController');

const router = express.Router();

router.post('/initiate', initiateChat);

router.get('/:userId', getChats);

module.exports = router;