function CartSummary({ items }) {

    const total = items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    )

    return (
        <div className='bg-slate-900 p-6 rounded-2xl'>

            <h2 className='text-2xl font-bold mb-5'>
                Summary
            </h2>

            <p className='text-xl'>
                Total: ₹ {total}
            </p>

        </div>
    )
}

export default CartSummary