import { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import api from '../services/api'
import './ProductDetail.css'
import { useDispatch } from 'react-redux'
import {
    addToCart
} from '../store/slices/cartSlice'



function ProductDetail() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const { data } = await api.get(`/products/${id}`)
                setProduct(data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchProduct()
    }, [id])

    if (!product) {
        return <div className="pd-loading">Loading...</div>
    }
    const addCart = (product) => {

        dispatch(
            addToCart(product)
        )
        navigate('/products')
    }
    return (
        <div className="pd-page">
            <div className="pd-container">

                {/* IMAGE */}
                <div className="pd-imageWrap">
                    <div className="pd-imageCard">
                        <img
                            className="pd-image"
                            src={product.images?.[0]}
                            alt={product.title}
                        />
                    </div>
                </div>

                {/* DETAILS */}
                <div className="pd-details">

                    <span className="pd-category">
                        {product.category}
                    </span>

                    <h1 className="pd-title">
                        {product.title}
                    </h1>

                    <p className="pd-desc">
                        {product.description}
                    </p>

                    <div className="pd-price">
                        ₹ {product.price?.toLocaleString()}
                    </div>

                    <div className="pd-meta">
                        <div className="pd-rating">⭐ {product.rating}</div>
                        <div className="pd-stock">Stock: {product.stock}</div>
                    </div>

                    <button
                        onClick={() => addCart(product)}
                        className='pd-cartBtn bg-blue-600 px-8 py-4 rounded-2xl mt-10 hover:bg-blue-700 transition'
                    >

                        Add To Cart

                    </button>
                    

                </div>

            </div>
        </div>
    )
}
//className=""
export default ProductDetail