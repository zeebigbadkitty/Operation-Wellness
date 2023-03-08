const bcrypt = require('bcrypt');
const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    allowNull: false,
    minlength: 5,
  },
  user_admin: {
    type: Boolean,
    defaultValue: false,
  },
  savedDrugs: [{
    type: Schema.Types.ObjectId,
    ref: 'Drug'
  }],
  
});

userSchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password);
}

const User = mongoose.model('User', userSchema);

module.exports = User;
