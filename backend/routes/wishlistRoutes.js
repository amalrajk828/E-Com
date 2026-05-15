const express = require('express')

const protect = require('../middleware/authMiddleware')

const {
    getWishlist
} = require('../controllers/wishlistController')

const router = express.Router()

router.get('/', protect, getWishlist)

module.exports = router