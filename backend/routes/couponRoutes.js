const express = require('express')

const {
    createCoupon
} = require('../controllers/couponController')

const router = express.Router()

router.post('/', createCoupon)

module.exports = router