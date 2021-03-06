const mongoose = require('mongoose');
const { Schema } = mongoose;

const goalSchema = new Schema( {
  title: {
    type: String,
    required: true,
    trim: true
  },

  description: {
    type: String,
    required: true,
    trim: true
  },

  users: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }

  ],

  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },

  done: {
    type: Boolean
  }

}, {
  timestamps: true
});


module.exports = mongoose.model('Goal', goalSchema);
