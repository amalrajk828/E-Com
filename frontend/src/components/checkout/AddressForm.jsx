function AddressForm() {

    return (
        <div className='grid gap-4'>

            <input
                type='text'
                placeholder='Full Name'
                className='p-4 bg-slate-800 rounded-xl'
            />

            <input
                type='text'
                placeholder='Address'
                className='p-4 bg-slate-800 rounded-xl'
            />

            <input
                type='text'
                placeholder='City'
                className='p-4 bg-slate-800 rounded-xl'
            />

        </div>
    )
}

export default AddressForm