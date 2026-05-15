import { useEffect, useState } from 'react'
import api from '../../services/api'
import AdminNavbar from '../../components/admin/AdminNavbar'
import './ManageUsers.css'

function ManageUsers() {

    const [users, setUsers] = useState([])

    // ---------------- LOAD USERS ----------------
    useEffect(() => {

        const loadUsers = async () => {
            try {
                const res = await api.get('/admin/users')
                setUsers(res.data)
            } catch (err) {
                console.log(err)
            }
        }

        loadUsers()

    }, [])

    // ---------------- DELETE USER ----------------
    const deleteUser = async (id) => {
        try {
            await api.delete(`/admin/users/${id}`)

            // refresh list safely
            const res = await api.get('/admin/users')
            setUsers(res.data)

        } catch (err) {
            console.log(err)
        }
    }

    // ---------------- FILTER ADMINS ----------------
    const filteredUsers = users.filter(user => user.role !== 'admin')

    return (
        <>
            <AdminNavbar />

            <div className="users-page">

                <div className="users-header">
                    <h1>Manage Users</h1>
                    <p>View and manage all registered users</p>
                </div>

                <div className="users-card">

                    {filteredUsers.length === 0 ? (
                        <div className="empty-state">
                            No users found
                        </div>
                    ) : (

                        <div className="table-wrapper">

                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {filteredUsers.map(user => (
                                        <tr key={user._id}>
                                            <td className="name-cell">{user.name}</td>
                                            <td className="email-cell">{user.email}</td>

                                            <td>
                                                <span className={`role ${user.role}`}>
                                                    {user.role}
                                                </span>
                                            </td>

                                            <td>
                                                <button
                                                    onClick={() => deleteUser(user._id)}
                                                    className="delete-btn"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>

                        </div>
                    )}

                </div>

            </div>
        </>
    )
}

export default ManageUsers