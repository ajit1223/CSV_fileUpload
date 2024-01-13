const mongoose = require('mongoose');
const { Schema } = mongoose;

// mongodb connection url
mongoose.connect('mongodb+srv://ajitkumaryadav1223:bETMOGUkGjQe3YtW@cluster0.d92o5qb.mongodb.net/?retryWrites=true&w=majority');

const tutorialSchema = new Schema({
  title: String,
  description: String,
  published: Boolean,
}, { timestamps: true });

const Tutorial = mongoose.model('Tutorial', tutorialSchema);

const db = {};
db.mongoose = mongoose;
db.Tutorial = Tutorial;

module.exports = db;
