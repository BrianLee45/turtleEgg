const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs-as-promised');
const validator = require('validator');
const { Schema } = mongoose;

const userSchema = new Schema( {
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },

  email: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator(strEmail) {
        return validator.isEmail(strEmail);
      }
    },
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  goals: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Goal'
    }
  ]
}, {
  timestamps: true
});

// userSchema.pre('save', function(next) {
//   if (!this.isModified('password')) { return next(); }
//
//   bcrypt.hash(this.password, 10)
//     .then(hashedPassword => {
//       this.password = hashedPassword;
//       next();
//     })
//     .catch(next);
// });

// userSchema.statics.validatePassword = function(testPassword, hashedPassword) {
//   return bcrypt.compare(testPassword, hashedPassword);
// };

module.exports = mongoose.model('User', userSchema);
