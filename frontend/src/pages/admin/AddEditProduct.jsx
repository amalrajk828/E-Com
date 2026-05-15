import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AdminNavbar from '../../components/admin/AdminNavbar'
import api from '../../services/api'
import './AddEditProduct.css'

function AddEditProduct() {

    const navigate = useNavigate()
    const { id } = useParams()   // 👈 important
    const isEdit = Boolean(id)

    const [form, setForm] = useState({
        title: '',
        description: '',
        brand: '',
        category: '',
        price: '',
        stock: '',
        images: ['']
    })

    // ---------------- FETCH PRODUCT (EDIT MODE) ----------------
    useEffect(() => {
        if (isEdit) {
            fetchProduct()
        }
    }, [id])

    const fetchProduct = async () => {
        try {
            const res = await api.get(`/products/${id}`)
            const p = res.data

            setForm({
                title: p.title || '',
                description: p.description || '',
                brand: p.brand || '',
                category: p.category || '',
                price: p.price || '',
                stock: p.stock || '',
                images: p.images?.length ? p.images : ['']
            })

        } catch (err) {
            console.log(err)
        }
    }

    // ---------------- HANDLERS ----------------
    const changeHandler = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const imageHandler = (e) => {
        setForm({ ...form, images: [e.target.value] })
    }

    // ---------------- SUBMIT (CREATE OR UPDATE) ----------------
    const submitHandler = async (e) => {
        e.preventDefault()

        try {
            if (isEdit) {
                await api.put(`/products/${id}`, form)   // 👈 UPDATE
            } else {
                await api.post('/products', form)         // 👈 CREATE
            }

            navigate('/admin/products')

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <AdminNavbar />

            <div className="admin-layout">

                <div className="admin-content">

                    <h1 className="page-title">
                        {isEdit ? 'Edit Product' : 'Add Product'}
                    </h1>

                    <form className="product-form" onSubmit={submitHandler}>

                        <div className="form-grid">

                            <div className="form-group">
                                <label>Product Title</label>
                                <input
                                    name="title"
                                    value={form.title}
                                    onChange={changeHandler}
                                />
                            </div>

                            <div className="form-group">
                                <label>Brand</label>
                                <input
                                    name="brand"
                                    value={form.brand}
                                    onChange={changeHandler}
                                />
                            </div>

                            <div className="form-group">
                                <label>Category</label>
                                <input
                                    name="category"
                                    value={form.category}
                                    onChange={changeHandler}
                                />
                            </div>

                            <div className="form-group">
                                <label>Price</label>
                                <input
                                    type="number"
                                    name="price"
                                    value={form.price}
                                    onChange={changeHandler}
                                />
                            </div>

                            <div className="form-group">
                                <label>Stock</label>
                                <input
                                    type="number"
                                    name="stock"
                                    value={form.stock}
                                    onChange={changeHandler}
                                />
                            </div>

                            <div className="form-group">
                                <label>Image URL</label>
                                <input
                                    value={form.images[0]}
                                    onChange={imageHandler}
                                />
                            </div>

                        </div>

                        {form.images[0] && (
                            <div className="preview-box">
                                <img
                                    src={form.images[0]}
                                    alt="preview"
                                    onError={(e) => {
                                        e.target.src =
                                            'https://via.placeholder.com/300?text=Invalid+Image'
                                    }}
                                />
                            </div>
                        )}

                        <div className="form-group full">
                            <label>Description</label>
                            <textarea
                                name="description"
                                value={form.description}
                                onChange={changeHandler}
                            />
                        </div>

                        <button className="submit-btn">
                            {isEdit ? 'Update Product' : 'Save Product'}
                        </button>

                    </form>

                </div>
            </div>
        </>
    )
}

export default AddEditProduct