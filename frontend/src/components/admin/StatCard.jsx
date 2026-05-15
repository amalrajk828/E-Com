function StatCard({ title, value }) {

    return (
        <div className='bg-slate-900 p-6 rounded-2xl'>

            <h2 className='text-slate-400'>
                {title}
            </h2>

            <p className='text-3xl font-bold mt-2'>
                {value}
            </p>

        </div>
    )
}

export default StatCard