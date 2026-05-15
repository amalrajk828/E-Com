const express = require('express')

const {
    createRazorpayOrder
} = require('../controllers/paymentController')

const router = express.Router()

router.post('/razorpay', createRazorpayOrder)

module.exports = router