const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const drugSchema = new Schema({
  
});

// compare the incoming password with the hashed password
profileSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Drugs = model('Drugs', drugSchema);

module.exports = Drugs;
