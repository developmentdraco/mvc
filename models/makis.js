const mongoose = require( 'mongoose' );
const Schema   = mongoose.Schema;

const MakiScheme = new Schema({
    
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ingredients: {
        type: Array,
        requred: true
    },
    price: {
        type: Number,
        required: true
    }

}, { timestamps: true });

module.exports = mongoose.model( 'makis', MakiScheme );