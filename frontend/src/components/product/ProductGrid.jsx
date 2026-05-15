import { useNavigate } from 'react-router-dom'

import {
    useDispatch,
    useSelector
} from 'react-redux'

import {
    addToWishlist,
    removeFromWishlist
} from '../../store/slices/wishlistSlice'

import './ProductGrid.css'

function ProductGrid({ products }) {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const wishlistItems = useSelector(
        state => state.wishlist.items
    )

    const toggleWishlist = (product) => {

        const exists = wishlistItems.find(
            item => item._id === product._id
        )

        if (exists) {

            dispatch(
                removeFromWishlist(product._id)
            )

        } else {

            dispatch(
                addToWishlist(product)
            )
        }
    }

    return (

        <div className="product-grid">

            {
                products?.map((product) => {

                    const isWishlisted = wishlistItems.find(
                        item => item._id === product._id
                    )

                    return (

                        <div
                            className="product-card"
                            key={product._id}
                        >

                            {/* HEART */}

                            <button
                                className={`wishlist-heart ${
                                    isWishlisted
                                        ? 'active-heart'
                                        : ''
                                }`}
                                onClick={() =>
                                    toggleWishlist(product)
                                }
                            >

                                {
                                    isWishlisted
                                        ? '❤️'
                                        : '🤍'
                                }

                            </button>

                            {/* IMAGE */}

                            <div className="product-image-container">

                                <img
                                    src={
                                        product.images?.[0] ||
                                        'https://via.placeholder.com/300'
                                    }
                                    alt={product.title}
                                    className="product-image"
                                />

                            </div>

                            {/* INFO */}

                            <div className="product-info">

                                <span className="product-category">
                                    {product.category}
                                </span>

                                <h3 className="product-title">
                                    {product.title}
                                </h3>

                                <p className="product-brand">

                                    Brand:

                                    <span>
                                        {product.brand}
                                    </span>

                                </p>

                                <p className="product-description">
                                    {product.description}
                                </p>

                                <div className="product-footer">

                                    <div>

                                        <h2 className="product-price">
                                            ₹ {product.price?.toLocaleString()}
                                        </h2>

                                        <p className="stock">
                                            Stock: {product.stock}
                                        </p>

                                    </div>

                                    <div className="rating-box">
                                        ⭐ {product.rating}
                                    </div>

                                </div>

                                <button
                                    className="view-btn"
                                    onClick={() =>
                                        navigate(
                                            `/product/${product._id}`
                                        )
                                    }
                                >
                                    View Details
                                </button>

                            </div>

                        </div>

                    )
                })
            }

        </div>
    )
}

export default ProductGrid