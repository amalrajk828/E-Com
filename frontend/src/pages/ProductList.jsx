import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MainLayout from '../components/common/MainLayout'
import { useLocation } from 'react-router-dom'
import api from '../services/api'
import ProductGrid from '../components/product/ProductGrid'

import {
    setProducts,
    setLoading
} from '../store/slices/productSlice'

import './ProductList.css'

function ProductList() {
    const location = useLocation()

        const search = new URLSearchParams(location.search).get('search') || ''
    const dispatch = useDispatch()

    const {
        products,
        loading
    } = useSelector(
        state => state.products
    )

    useEffect(() => {
    const fetchProducts = async () => {
        try {
            dispatch(setLoading(true))

            const { data } = await api.get(
                `/products?search=${search}`
            )

            dispatch(setProducts(data))

        } catch (error) {
            console.log(error)
        } finally {
            dispatch(setLoading(false))
        }
    }

    fetchProducts()

}, [dispatch, search])   

    if (loading) {

        return (
            
            <div className="loading-page">

                <div className="loader"></div>

                <p>
                    Loading Products...
                </p>

            </div>
        )
    }

    return (
        <MainLayout>
            <div className="product-page">

                {/* HERO SECTION */}

                <div className="hero-section">

                    <div className="overlay"></div>

                    <div className="hero-content">

                        <h1>
                            Discover Premium Products
                        </h1>

                        <p>
                            Explore the latest gadgets,
                            smartphones, laptops,
                            gaming accessories and more.
                        </p>

                    </div>

                </div>

                {/* PRODUCT SECTION */}

                <div className="product-container">

                    <div className="heading-box">

                        <h2 style={{color:'black'}}>
                            Featured Products
                        </h2>

                        <p>
                            Find the best tech products
                            at amazing prices
                        </p>

                    </div>

                    <ProductGrid
                        products={products}
                    />

                </div>

            </div>
        </MainLayout>
    )
}

export default ProductList