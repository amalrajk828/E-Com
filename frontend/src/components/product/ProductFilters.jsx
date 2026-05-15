function ProductFilters() {

    return (
        <div className='bg-slate-900 p-5 rounded-2xl'>

            <h2 className='text-2xl font-bold mb-5'>
                Filters
            </h2>

            <select className='w-full p-3 bg-slate-800 rounded-xl mb-4'>
                <option>All Categories</option>
                <option>Smartphones</option>
                <option>Laptops</option>
            </select>

            <select className='w-full p-3 bg-slate-800 rounded-xl'>
                <option>Sort By</option>
                <option>Price Low to High</option>
                <option>Price High to Low</option>
            </select>

        </div>
    )
}

export default ProductFilters