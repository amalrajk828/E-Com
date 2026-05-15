const razorpay = require('../config/razorpay')

const createRazorpayOrder = async (req, res) => {

    const options = {
        amount: req.body.amount * 100,
        currency: 'INR'
    }

    const order = await razorpay.orders.create(options)

    res.json(order)
}

module.exports = {
    createRazorpayOrder
}   