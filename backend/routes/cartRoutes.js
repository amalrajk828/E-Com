const express = require('express')

const protect = require('../middleware/authMiddleware')

const {
    getCart
} = require('../controllers/cartController')

const router = express.Router()

router.get('/', protect, getCart)

module.exports = router