const Review = require('../models/Review')

const addReview = async (req, res) => {

    const review = await Review.create(req.body)

    res.status(201).json(review)
}

module.exports = {
    addReview
}