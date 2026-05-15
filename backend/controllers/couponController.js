const Coupon = require('../models/Coupon')

const createCoupon = async (req, res) => {

    const coupon = await Coupon.create(req.body)

    res.status(201).json(coupon)
}

module.exports = {
    createCoupon
}