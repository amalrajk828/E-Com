const Product = require('../models/Product')


/* ---------- GET PRODUCTS ---------- */

const getProducts = async (req, res) => {

    try {

        const search = req.query.search || ''

        const products = await Product.find({

            title: {
                $regex: search,
                $options: 'i'
            }

        })

        res.json(products)

    } catch (error) {

        res.status(500).json({
            message: error.message
        })
    }
}


/* ---------- GET SINGLE PRODUCT ---------- */

const getSingleProduct = async (req, res) => {

    try {

        const product = await Product.findById(
            req.params.id
        )

        if (!product) {

            return res.status(404).json({
                message: 'Product not found'
            })
        }

        res.json(product)

    } catch (error) {

        console.log(error)

        res.status(500).json({
            message: 'Server Error'
        })
    }
}


/* ---------- CREATE PRODUCT ---------- */

const createProduct = async (req, res) => {

    try {

        const product = await Product.create(
            req.body
        )

        res.status(201).json(product)

    } catch (error) {

        res.status(500).json({
            message: error.message
        })
    }
}


/* ---------- UPDATE PRODUCT ---------- */

const updateProduct = async (req, res) => {

    try {

        const product = await Product.findById(req.params.id)

        if (!product) {
            return res.status(404).json({
                message: 'Product not found'
            })
        }

        if (req.body.images && typeof req.body.images === 'string') {
            req.body.images = [req.body.images]
        }

        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        )

        res.json(updatedProduct)

    } catch (error) {

        res.status(500).json({
            message: error.message
        })
    }
}


/* ---------- DELETE PRODUCT ---------- */

const deleteProduct = async (req, res) => {

    try {

        await Product.findByIdAndDelete(
            req.params.id
        )

        res.json({
            message: 'Product deleted'
        })

    } catch (error) {

        res.status(500).json({
            message: error.message
        })
    }
}


module.exports = {

    getProducts,
    getSingleProduct,
    createProduct,
    updateProduct,
    deleteProduct
}