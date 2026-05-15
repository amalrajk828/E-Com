import { useSelector, useDispatch } from 'react-redux'

import {
    removeFromCart,
    increaseQuantity,
    decreaseQuantity
} from '../store/slices/cartSlice'

import Navbar from '../components/common/Navbar'
import './Cart.css'

function Cart() {

    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.items)

    const total = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    )

    return (
        <div className='cart-page'>
            <Navbar />

            <div className='cart-container'>

                <h1 className='cart-title'>Shopping Cart</h1>

                <div className='cart-layout'>

                    {/* LEFT - ITEMS */}
                    <div className='cart-items'>

                        {cartItems.length === 0 ? (
                            <div className='empty-cart'>
                                Your cart is empty
                            </div>
                        ) : (

                            cartItems.map(item => (

                                <div key={item._id} className='cart-card'>

                                    {/* IMAGE */}
                                    <div className='cart-img-box'>
                                        <img
                                            src={item.images?.[0]}
                                            alt={item.title}
                                            className='cart-img'
                                        />
                                    </div>

                                    {/* DETAILS */}
                                    <div className='cart-details'>
                                        <h2>{item.title}</h2>
                                        <p>{item.brand}</p>
                                        <div className='price'>
                                            ₹ {item.price.toLocaleString()}
                                        </div>
                                    </div>

                                    {/* ACTIONS */}
                                    <div className='cart-actions'>

                                        <button
                                            className='remove-btn'
                                            onClick={() => dispatch(removeFromCart(item._id))}
                                        >
                                            Remove
                                        </button>

                                        <div className='qty-box'>
                                            <button onClick={() => dispatch(decreaseQuantity(item._id))}>-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => dispatch(increaseQuantity(item._id))}>+</button>
                                        </div>

                                    </div>

                                </div>

                            ))

                        )}

                    </div>

                    {/* RIGHT - SUMMARY */}
                    <div className='cart-summary'>

                        <h2>Order Summary</h2>

                        <div className='summary-row'>
                            <span>Items</span>
                            <span>{cartItems.length}</span>
                        </div>

                        <div className='summary-row total'>
                            <span>Total</span>
                            <span>₹ {total.toLocaleString()}</span>
                        </div>

                        <button className='checkout-btn'>
                            Proceed to Checkout
                        </button>

                        <p className='note'>Secure payment via Stripe</p>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Cart