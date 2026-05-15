const express =
    require('express')

const router =
    express.Router()

const {
    getUsers,
    deleteUser,
    getProducts,
    deleteProduct
} = require(
    '../controllers/adminController'
)

const authMiddleware =
    require(
        '../middleware/authMiddleware'
    )

const adminMiddleware =
    require(
        '../middleware/adminMiddleware'
    )

router.use(
    authMiddleware,
    adminMiddleware
)

router.get(
    '/users',
    getUsers
)

router.delete(
    '/users/:id',
    deleteUser
)

router.get(
    '/products',
    getProducts
)

router.delete(
    '/products/:id',
    deleteProduct
)

module.exports =
    router