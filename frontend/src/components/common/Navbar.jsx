import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import './Navbar.css'

function Navbar() {

    const navigate = useNavigate()
    const [search, setSearch] = useState('')

    const cartItems = useSelector(state => state.cart.items)
    const wishlistItems = useSelector(state => state.wishlist.items)

    const searchHandler = (e) => {
        e.preventDefault()
        if (!search.trim()) return
        navigate(`/products?search=${search}`)
    }

    const logoutHandler = () => {
        localStorage.removeItem('token')
        navigate('/')
    }

    return (
        <nav className="navbar">

            {/* LOGO */}
            <Link to="/products" className="logo">
                SmartBuy
            </Link>

            {/* SEARCH */}
            <form className="search-form" onSubmit={searchHandler}>
                <input
                    type="text"
                    placeholder="Search gadgets..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="search-input"
                />

                <button type="submit" className="search-btn">
                    Search
                </button>
            </form>

            {/* NAVIGATION */}
            <div className="nav-links">

                <Link to="/products">
                    Products
                </Link>

                <Link to="/wishlist" className="wishlist-link">
                    Wishlist
                    <span className="wishlist-badge">
                        {wishlistItems.length}
                    </span>
                </Link>

                <Link to="/cart" className="cart-link">
                    Cart
                    <span className="cart-badge">
                        {cartItems.length}
                    </span>
                </Link>

                {/* LOGOUT */}
                <span
                    onClick={logoutHandler}
                    className="logout-link"
                    style={{cursor:'pointer'}}
                >
                    Logout
                </span>

            </div>

        </nav>
    )
}

export default Navbar