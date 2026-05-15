const User =
    require('../models/User')

const Product =
    require('../models/Product')


// GET USERS
const getUsers =
    async (req, res) => {

        try {

            const users =
                await User.find()

            res.json(users)

        } catch (error) {

            res.status(500).json({
                message:
                    error.message
            })
        }
    }


// DELETE USER
const deleteUser =
    async (req, res) => {

        try {

            await User.findByIdAndDelete(
                req.params.id
            )

            res.json({
                message:
                    'User deleted'
            })

        } catch (error) {

            res.status(500).json({
                message:
                    error.message
            })
        }
    }


// GET PRODUCTS
const getProducts =
    async (req, res) => {

        try {

            const products =
                await Product.find()

            res.json(products)

        } catch (error) {

            res.status(500).json({
                message:
                    error.message
            })
        }
    }


// DELETE PRODUCT
const deleteProduct =
    async (req, res) => {

        try {

            await Product.findByIdAndDelete(
                req.params.id
            )

            res.json({
                message:
                    'Product deleted'
            })

        } catch (error) {

            res.status(500).json({
                message:
                    error.message
            })
        }
    }

module.exports = {

    getUsers,
    deleteUser,
    getProducts,
    deleteProduct
}