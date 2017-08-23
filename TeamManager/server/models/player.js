const mongoose = require('mongoose');
const { Schema } = mongoose;

const playerSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  position: {
    type: String,
    required: true,
    trim: true
  }
}, {timestamps: true});

module.exports = mongoose.model('Player', playerSchema);
