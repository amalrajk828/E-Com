import { createSlice } from '@reduxjs/toolkit'

const getWishlistFromStorage = () => {
    try {
        return JSON.parse(localStorage.getItem('wishlistItems')) || []
    } catch {
        return []
    }
}

const setWishlistToStorage = (items) => {
    localStorage.setItem('wishlistItems', JSON.stringify(items))
}

const initialState = {
    items: getWishlistFromStorage()
}

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {

        addToWishlist: (state, action) => {
            const item = action.payload

            const exists = state.items.find(
                p => p._id === item._id
            )

            if (!exists) {
                state.items.push(item)
                setWishlistToStorage(state.items)
            }
        },

        removeFromWishlist: (state, action) => {
            state.items = state.items.filter(
                item => item._id !== action.payload
            )

            setWishlistToStorage(state.items)
        },

        clearWishlist: (state) => {
            state.items = []
            setWishlistToStorage([])
        }
    }
})

export const {
    addToWishlist,
    removeFromWishlist,
    clearWishlist
} = wishlistSlice.actions

export default wishlistSlice.reducer