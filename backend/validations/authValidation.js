const { body } = require('express-validator')

const registerValidation = [
    body('name').notEmpty(),
    body('email').isEmail(),
    body('password').isLength({ min: 6 })
]

module.exports = {
    registerValidation
}