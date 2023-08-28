const Thread = require('../models/threadModel');

const getAllThreads = async (req, res) => {
  try {
    const threads = await Thread.find().populate('creator', 'name'); // Populate creator field with user's name
    res.status(200).json({
      status: 'success',
      data: threads,
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: 'Error fetching threads',
    });
  }
};

const getThreadById = async (req, res) => {
  try {
    const thread = await Thread.findById(req.params.id)
      .populate('creator', 'name')
      .populate('comments.user', 'name');
    res.status(200).json({
      status: 'success',
      data: thread,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'Thread not found',
    });
  }
};

const createThread = async (req, res) => {
  const { title, commentText } = req.body;

  try {
    const newThread = await Thread.create({
      title,
      creator: req.user.id, // Assuming you have user authentication
      comments: [{
        user: req.user.id,
        text: commentText,
      }],
    });

    res.status(201).json({
      status: 'success',
      data: newThread,
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: 'Error creating thread',
    });
  }
};

const addComment = async (req, res) => {
  const { commentText } = req.body;

  try {
    const thread = await Thread.findById(req.params.id);

    if (!thread) {
      return res.status(404).json({
        status: 'fail',
        message: 'Thread not found',
      });
    }

    thread.comments.push({
      user: req.user.id,
      text: commentText,
    });

    await thread.save();

    res.status(201).json({
      status: 'success',
      data: thread,
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: 'Error adding comment',
    });
  }
};

exports.getAllThreads = getAllThreads
exports.getThreadById = getThreadById
exports.createThread = createThread
exports.addComment = addComment