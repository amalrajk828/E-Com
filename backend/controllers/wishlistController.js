const Wishlist = require('../models/Wishlist')

const getWishlist = async (req, res) => {

    const wishlist = await Wishlist.findOne({
        user: req.user._id
    }).populate('products')

    res.json(wishlist)
}

module.exports = {
    getWishlist
}