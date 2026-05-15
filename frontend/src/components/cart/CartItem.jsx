function CartItem({ item }) {

    return (
        <div className='flex justify-between items-center bg-slate-900 p-5 rounded-2xl'>

            <div className='flex items-center gap-5'>

                <img
                    src={item.images?.[0]}
                    alt=''
                    className='h-24 w-24 rounded-xl object-cover'
                />

                <div>
                    <h2>{item.title}</h2>

                    <p>₹ {item.price}</p>
                </div>

            </div>

            <p>
                Qty: {item.quantity}
            </p>

        </div>
    )
}

export default CartItem