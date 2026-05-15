const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    description: String,

    brand: String,

    category: String,

    price: {
        type: Number,
        required: true
    },

    stock: {
        type: Number,
        default: 0
    },

    images: [String],

    rating: {
        type: Number,
        default: 0
    }

}, {
    timestamps: true
})

module.exports = mongoose.model('Product', productSchema)