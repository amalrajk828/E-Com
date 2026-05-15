const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    products: [],

    totalAmount: Number,

    paymentMethod: String,

    paymentStatus: {
        type: String,
        default: 'Pending'
    },

    orderStatus: {
        type: String,
        default: 'Processing'
    }

}, {
    timestamps: true
})

module.exports = mongoose.model('Order', orderSchema)