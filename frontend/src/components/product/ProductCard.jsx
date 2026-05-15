import { useDispatch } from 'react-redux'

import { addToCart } from '../../store/slices/cartSlice'

function ProductCard({ product }) {

    const dispatch = useDispatch()

    return (
        <div className='bg-slate-900 rounded-2xl overflow-hidden hover:scale-105 transition duration-300 shadow-lg'>

            <img
                src={product.images?.[0]}
                alt={product.title}
                className='h-64 w-full object-cover'
            />

            <div className='p-5'>

                <h2 className='text-xl font-semibold mb-2'>
                    {product.title}
                </h2>

                <p className='text-slate-400 text-sm mb-3'>
                    {product.brand}
                </p>

                <div className='flex justify-between items-center'>

                    <span className='text-blue-500 text-2xl font-bold'>
                        ₹ {product.price}
                    </span>

                    <button
                        onClick={() => dispatch(addToCart(product))}
                        className='bg-blue-600 px-4 py-2 rounded-xl'
                    >
                        Add
                    </button>

                </div>

            </div>

        </div>
    )
}

export default ProductCard