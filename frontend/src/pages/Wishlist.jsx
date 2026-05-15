import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import MainLayout from '../components/common/MainLayout'
import { removeFromWishlist } from '../store/slices/wishlistSlice'

import './Wishlist.css'

function Wishlist() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const wishlistItems = useSelector(state => state.wishlist.items)

    const handleRemove = (id) => {
        dispatch(removeFromWishlist(id))
    }

    return (
        <MainLayout>
            <div className="wishlist-page">

                <div className="wishlist-header">
                    <h1>My Wishlist</h1>
                    <p>{wishlistItems.length} items saved</p>
                </div>

                {wishlistItems.length === 0 ? (
                    <div className="wishlist-empty">
                        <h2>No items found</h2>
                        <p>Add products you like to view them here later.</p>
                    </div>
                ) : (
                    <div className="wishlist-grid">
                        {wishlistItems.map(item => (
                            <div key={item._id} className="wishlist-card">

                                <div className="image-wrapper">
                                    <img
                                        src={item.images?.[0]}
                                        alt={item.title}
                                    />
                                </div>

                                <div className="wishlist-content">
                                    <h3>{item.title}</h3>

                                    <p className="price">
                                        ₹ {item.price?.toLocaleString()}
                                    </p>

                                    <div className="wishlist-actions">

                                        <button
                                            className="btn view-btn"
                                            onClick={() =>
                                                navigate(`/product/${item._id}`)
                                            }
                                        >
                                            View
                                        </button>

                                        <button
                                            className="btn remove-btn"
                                            onClick={() =>
                                                handleRemove(item._id)
                                            }
                                        >
                                            Remove
                                        </button>

                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                )}

            </div>
        </MainLayout>
    )
}

export default Wishlist