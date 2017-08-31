const mongoose = require('mongoose');
// const bcrypt = require('bcrypt-nodejs-as-promised');
const bcrypt = require('bcrypt-as-promised');
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

userSchema.pre('save', function(next) {
  if (!this.isModified('password')) { return next(); }

  bcrypt.hash(this.password, 10)
    .then(hashedPassword => {
      this.password = hashedPassword;
      next();
    })
    .catch(next);
  // bcrypt.genSalt(10, (err, salt) => {
  //   if (err) {
  //     return next(err);
  //   }
  //   bcrypt.hash(this.password, null, null, (error, hashedPassword) => {
  //     if (error) {
  //       console.log(`error: wat? ${error}`);
  //       return next(error);
  //     }
  //     console.log(this.password);
  //     this.password = hashedPassword;
  //     console.log('next', this.password);
  //     next();
  //   });
  // });
});

// });

userSchema.statics.checkPassword = function(testPassword, hashedPassword) {
  console.log(`testPassword: ${testPassword}, hashedPassword: ${hashedPassword}`);
  // bcrypt.compare(testPassword, hashedPassword, (error, myResult) => {
  //   if (error) {
  //     //**** MORG **** need to re-do for callbacks & not promises?
  //     return error;
  //   }
  //   console.log(`checkPassword: ${myResult}`);
  //   return myResult;
  // });
  return bcrypt.compare(testPassword, hashedPassword);
};

module.exports = mongoose.model('User', userSchema);
