const mongoose = require('mongoose');
const { Schema } = mongoose;

const tutorialSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  published: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

const Tutorial = mongoose.model('Tutorial', tutorialSchema);

module.exports = Tutorial;
