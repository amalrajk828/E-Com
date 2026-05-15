function PaymentSelector() {

    return (
        <div className='grid gap-4'>

            <button className='bg-slate-800 p-4 rounded-xl'>
                Razorpay
            </button>

            <button className='bg-slate-800 p-4 rounded-xl'>
                Stripe
            </button>

            <button className='bg-slate-800 p-4 rounded-xl'>
                PayPal
            </button>

        </div>
    )
}

export default PaymentSelector