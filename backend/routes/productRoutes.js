const express = require('express')

const router = express.Router()

const {

    getProducts,
    getSingleProduct,
    createProduct,
    updateProduct,
    deleteProduct

} = require('../controllers/productController')

const authMiddleware = require(
    '../middleware/authMiddleware'
)

const adminMiddleware = require(
    '../middleware/adminMiddleware'
)


/* ---------- PUBLIC ROUTES ---------- */

router.get(
    '/',
    getProducts
)

router.get(
    '/:id',
    getSingleProduct
)


/* ---------- ADMIN ROUTES ---------- */

router.post(
    '/',
    authMiddleware,
    adminMiddleware,
    createProduct
)

router.put(
    '/:id',
    authMiddleware,
    adminMiddleware,
    updateProduct
)

router.delete(
    '/:id',
    authMiddleware,
    adminMiddleware,
    deleteProduct
)

module.exports = router