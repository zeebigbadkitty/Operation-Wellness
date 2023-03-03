const { Schema, model } = require('mongoose');


const drugSchema = new Schema({
    productndc:{
        type: String,
        trim: true
    },
    proprietaryname:{
        type: String,
        required: true,
    },
    nonproprietaryname:{
        type: String,
    },
    active_numerator_strength:{
        type: String,
    },
  
    active_ingred_unit:{
        type: String,
    },
  
    pharm_classes:{
        type: String,
    },

});


const Drug = model('Drug', drugSchema);

module.exports = Drug;
