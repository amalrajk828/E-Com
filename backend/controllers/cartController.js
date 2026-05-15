const Cart = require('../models/Cart')

const getCart = async (req, res) => {

    const cart = await Cart.findOne({
        user: req.user._id
    }).populate('items.product')

    res.json(cart)
}

module.exports = {
    getCart
}