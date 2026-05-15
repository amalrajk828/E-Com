import AddressForm from '../components/checkout/AddressForm'
import PaymentSelector from '../components/checkout/PaymentSelector'

function Checkout() {

    return (
        <div className='p-10 bg-slate-950 min-h-screen text-white grid md:grid-cols-2 gap-10'>

            <AddressForm />

            <PaymentSelector />

        </div>
    )
}

export default Checkout