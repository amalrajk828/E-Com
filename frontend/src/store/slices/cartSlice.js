import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: JSON.parse(
        localStorage.getItem('cartItems')
    ) || []
}

const cartSlice = createSlice({

    name: 'cart',

    initialState,

    reducers: {

        addToCart: (state, action) => {

            const item = action.payload

            const existingItem = state.items.find(
                product => product._id === item._id
            )

            if (existingItem) {

                existingItem.quantity += 1

            } else {

                state.items.push({
                    ...item,
                    quantity: 1
                })
            }

            localStorage.setItem(
                'cartItems',
                JSON.stringify(state.items)
            )
        },

        removeFromCart: (state, action) => {

            state.items = state.items.filter(
                item => item._id !== action.payload
            )

            localStorage.setItem(
                'cartItems',
                JSON.stringify(state.items)
            )
        },

        increaseQuantity: (state, action) => {

            const item = state.items.find(
                item => item._id === action.payload
            )

            if (item) {
                item.quantity += 1
            }

            localStorage.setItem(
                'cartItems',
                JSON.stringify(state.items)
            )
        },

        decreaseQuantity: (state, action) => {

            const item = state.items.find(
                item => item._id === action.payload
            )

            if (item && item.quantity > 1) {
                item.quantity -= 1
            }

            localStorage.setItem(
                'cartItems',
                JSON.stringify(state.items)
            )
        }

    }
})

export const {

    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity

} = cartSlice.actions

export default cartSlice.reducer