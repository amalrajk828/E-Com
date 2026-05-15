function DataTable({ columns, data }) {

    return (
        <table className='w-full bg-slate-900 rounded-2xl overflow-hidden'>

            <thead>

                <tr>

                    {
                        columns.map(column => (
                            <th
                                key={column}
                                className='p-4 text-left'
                            >
                                {column}
                            </th>
                        ))
                    }

                </tr>

            </thead>

            <tbody>

                {
                    data.map((row, index) => (

                        <tr
                            key={index}
                            className='border-t border-slate-800'
                        >

                            {
                                Object.values(row).map((value, i) => (
                                    <td
                                        key={i}
                                        className='p-4'
                                    >
                                        {value}
                                    </td>
                                ))
                            }

                        </tr>

                    ))
                }

            </tbody>

        </table>
    )
}

export default DataTable