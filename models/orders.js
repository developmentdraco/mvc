const mongoose = require( 'mongoose' );
const Schema   = mongoose.Schema;

const OrdersScheme = new Schema({
    
    productName: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    Totalprice: {
        type: Number,
        required: true
    },
    maki: {
        type: Schema.Types.ObjectId,
        ref: 'makis'
    }

}, { timestamps: true });

module.exports = mongoose.model( 'orders', OrdersScheme );