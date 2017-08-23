const mongoose = require('mongoose');
const { Schema } = mongoose;

const gameSchema = new Schema({
  gameID: {
    type: Number,
    players: [
      {
        {
          type: Schema.Types.ObjectId,
          ref: 'Player'
        },
        status: {
          type: String
        }
      }
    ]
  }
}, {timestamps: true});

module.exports = mongoose.model('Game', gameSchema);
