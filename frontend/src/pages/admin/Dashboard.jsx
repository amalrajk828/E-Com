import { useEffect, useState }
from 'react'

import AdminNavbar from '../../components/admin/AdminNavbar'

import StatCard
from '../../components/admin/StatCard'

import api
from '../../services/api'

function Dashboard() {

    const [stats,
        setStats] =
        useState({})

    useEffect(() => {

        fetchDashboard()

    }, [])

    const fetchDashboard =
        async () => {

        try {

            const {
                data
            } =
                await api.get(
                    '/admin/dashboard'
                )

            setStats(data)

        } catch (error) {

            console.log(error)
        }
    }

    return (

        <div className="flex">

            <AdminNavbar />

            <div className="ml-[260px] p-10 w-full bg-slate-100 min-h-screen">

                <h1 className="text-5xl font-bold mb-10">
                    Dashboard
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <StatCard
                        title="Users"
                        value={stats.users}
                    />

                    <StatCard
                        title="Products"
                        value={stats.products}
                    />

                    <StatCard
                        title="Orders"
                        value={stats.orders}
                    />

                </div>

            </div>

        </div>
    )
}

export default Dashboard