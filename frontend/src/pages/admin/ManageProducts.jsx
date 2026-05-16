import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AdminNavbar from '../../components/admin/AdminNavbar'
import api from '../../services/api'
import './ManageProducts.css'

function ManageProducts() {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const { data } = await api.get('/products')
        setProducts(data)
      } catch (error) {
        console.log(error)
      }
    }
    loadProducts()
  }, [])

  const deleteProduct = async (id) => {
    try {
      await api.delete(`/products/${id}`)
      const { data } = await api.get('/products')
      setProducts(data)
    } catch (error) {
      console.log(error)
    }
  }

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  )

  const inStock  = products.filter(p => p.stock > 5).length
  const lowStock = products.filter(p => p.stock > 0 && p.stock <= 5).length
  const outStock = products.filter(p => p.stock === 0).length

  const stockMeta = (stock) => {
    if (stock > 5)  return { cls: 'in',  icon: 'ti-circle-check', label: `${stock} in stock` }
    if (stock > 0)  return { cls: 'low', icon: 'ti-alert-circle',  label: `${stock} left` }
    return              { cls: 'out', icon: 'ti-circle-x',     label: 'Out of stock' }
  }

  return (
    <div>
      <AdminNavbar />

      <div className="admin-container">

        {/* ── HEADER ── */}
        <div className="admin-header">
          <div className="header-left">
            <h1>Products</h1>
            <p>Manage your inventory and listings</p>
          </div>
          <Link to="/admin/products/add" className="add-btn">
            <i className="ti ti-plus" aria-hidden="true" /> Add product
          </Link>
        </div>

        {/* ── STATS ── */}
        <div className="stats-grid">
          <div className="stat-card"><span className="stat-label">Total</span><span className="stat-val">{products.length}</span></div>
          <div className="stat-card"><span className="stat-label">In stock</span><span className="stat-val">{inStock}</span></div>
          <div className="stat-card"><span className="stat-label">Low stock</span><span className="stat-val">{lowStock}</span></div>
          <div className="stat-card"><span className="stat-label">Out of stock</span><span className="stat-val">{outStock}</span></div>
        </div>

        {/* ── SEARCH ── */}
        <div className="search-row">
          <div className="search-box">
            <i className="ti ti-search" aria-hidden="true" />
            <input
              type="text"
              placeholder="Search products…"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* ── LIST ── */}
        <div className="product-table">
          {filtered.map(product => {
            const { cls, icon, label } = stockMeta(product.stock)
            return (
              <div key={product._id} className="product-row">

                <div className="img-box">
                  <img src={product.images?.[0]} alt="" />
                </div>

                <div className="info">
                  <h3>{product.title}</h3>
                  <div className="info-meta">
                    <span className="price">₹ {product.price.toLocaleString('en-IN')}</span>
                    {product.category && <span className="category">{product.category}</span>}
                  </div>
                </div>

                <div className="stock-col">
                  <span className={`stock-pill ${cls}`}>
                    <i className={`ti ${icon}`} aria-hidden="true" />
                    {label}
                  </span>
                </div>

                <div className="actions">
                  <Link to={`/admin/products/edit/${product._id}`} className="btn-edit">
                    <i className="ti ti-pencil" aria-hidden="true" /> Edit
                  </Link>
                  <button onClick={() => deleteProduct(product._id)} className="btn-del">
                    <i className="ti ti-trash" aria-hidden="true" /> Delete
                  </button>
                </div>

              </div>
            )
          })}

          {filtered.length === 0 && (
            <div className="empty-state">
              <i className="ti ti-package-off" aria-hidden="true" />
              <p>No products found</p>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default ManageProducts