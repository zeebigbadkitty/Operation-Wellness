const { Schema, model } = require('mongoose');

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
    minlength: 5,
  },
  savedDrugs: [{
    type: Schema.Types.ObjectId,
    ref: 'Drugs'
  }],
  
});

const User = model('User', userSchema);

module.exports = User;
