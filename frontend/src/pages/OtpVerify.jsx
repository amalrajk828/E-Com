function OtpVerify() {

    return (
        <div className='min-h-screen flex items-center justify-center bg-slate-950 text-white'>

            <div className='bg-slate-900 p-10 rounded-2xl w-[400px]'>

                <h1 className='text-3xl font-bold mb-6'>
                    OTP Verification
                </h1>

                <input
                    type='text'
                    placeholder='Enter OTP'
                    className='w-full p-4 bg-slate-800 rounded-xl'
                />

            </div>

        </div>
    )
}

export default OtpVerify