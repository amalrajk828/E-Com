import api from './api'

// USERS
export const getUsers = () =>
    api.get('/admin/users')

export const deleteUser = (id) =>
    api.delete(`/admin/users/${id}`)

// PRODUCTS
export const getProducts = () =>
    api.get('/admin/products')

export const deleteProduct = (id) =>
    api.delete(`/admin/products/${id}`)