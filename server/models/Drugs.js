const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const drugSchema = new Schema({
    productndc:{
        type: String,
        unique: true,
        trim: true
    },
    producttypename:{
        type: String,
        required: true,
    },
    nonproprietaryname:{
        type: String,
    },
    dosageformname:{
        type: String,
    },
  
    routename:{
        type: String,
    },
  
    active_numerator_strength:{
        type: String,
        required: true,
    },
  
    active_ingred_unit:{
        type: String,
    },
  
    ndc_exclude_flag:{
        type: String,
    },
  
    listing_record_certified_through:{
        type: String,
    },
});


const Drugs = model('Drugs', drugSchema);

module.exports = Drugs;
