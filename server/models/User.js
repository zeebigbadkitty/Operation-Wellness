const bcrypt = require('bcrypt');
const { Schema, model } = require('mongoose');
const drugSchema = require('./Drug'); 
const mongoose = require('mongoose');

const savedDrugSchema = new mongoose.Schema({
  drug: { type: mongoose.Schema.Types.ObjectId, ref: 'Drug', required: true },
  quantity: { type: Number, required: true },
});


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
    default: false,
  },
  savedDrugs: [{
    drug: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Drug',
      required: false
    },
    productndc: {
      type: String,
    },
    proprietaryname: {
      type: String,
      required: true
    },
    active_numerator_strength: {
      type: String,
       required: true
    },
    active_ingred_unit: {
      type: String,
       required: true
    },    
   quantity: {
      type: Number,
    },
  }],
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
