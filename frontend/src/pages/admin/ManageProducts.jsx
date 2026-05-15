import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AdminNavbar from '../../components/admin/AdminNavbar'
import api from '../../services/api'
import './ManageProducts.css'

function ManageProducts() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        try {
            const { data } = await api.get('/products')
            setProducts(data)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteProduct = async (id) => {
        try {
            await api.delete(`/products/${id}`)
            fetchProducts()
        } catch (error) {
            console.log(error)
        }
    }

    return (

        <div>

            <AdminNavbar />

            <div className="admin-container">

                <div className="admin-header">

                    <h1>Products</h1>

                    <Link
                        to="/admin/products/add"
                        className="add-btn"
                    >
                        + Add Product
                    </Link>

                </div>

                <div className="product-table">

                    {products.map(product => (

                        <div key={product._id} className="product-row">

                            <div className="img-box">
                                <img
                                    src={product.images?.[0]}
                                    alt=""
                                />
                            </div>

                            <div className="info">
                                <h3>{product.title}</h3>
                                <p>₹ {product.price}</p>
                            </div>

                            <div className="stock">
                                <span className={product.stock > 0 ? "in" : "out"}>
                                    {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
                                </span>
                            </div>

                            <div className="actions">

                                <Link
                                    to={`/admin/products/edit/${product._id}`}
                                    className="edit"
                                >
                                    Edit
                                </Link>

                                <button
                                    onClick={() => deleteProduct(product._id)}
                                    className="delete"
                                >
                                    Delete
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    )
}

export default ManageProducts