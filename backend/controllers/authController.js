const bcrypt = require('bcryptjs')

const User = require('../models/User')

const generateToken = require('../utils/generateToken')


// Register
const register = async (req, res) => {

    try {

        const { name, email, password } = req.body

        const userExists = await User.findOne({ email })

        if (userExists) {
            return res.status(400).json({
                message: 'User already exists'
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })

        const token = generateToken(user._id)

        res.status(201).json({
            success: true,
            user,
            token
        })
        return res.status(201).json({
            success: true,
            user,
            token
        })
    } catch (error) {

        res.status(500).json({
            message: error.message
        })
    }
}


// Login
const login = async (req, res) => {

    try {

        const { email, password } = req.body

        const user = await User.findOne({ email })

        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            })
        }

        const isMatch = await bcrypt.compare(
            password,
            user.password
        )

        if (!isMatch) {
            return res.status(400).json({
                message: 'Invalid Credentials'
            })
        }

        const token = generateToken(user._id)

        res.json({
            success: true,
            user,
            token
        })

    } catch (error) {

        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    register,
    login
}