const { Schema, model } = require('mongoose');

const schema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: [{ type: String, enum: ['new', 'pending', 'completed'] }],
    required: true,
    default: ['new'],
  },
});

module.exports = model('Todo', schema);
