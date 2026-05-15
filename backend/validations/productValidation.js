const { body } = require('express-validator')

const productValidation = [
    body('title').notEmpty(),
    body('price').isNumeric()
]

module.exports = {
    productValidation
}