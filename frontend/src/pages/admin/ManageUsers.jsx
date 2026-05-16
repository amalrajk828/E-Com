import { useEffect, useState } from 'react'
import api from '../../services/api'
import AdminNavbar from '../../components/admin/AdminNavbar'
import './ManageUsers.css'

const AVATAR_COLORS = ['av-blue', 'av-teal', 'av-amber', 'av-coral', 'av-purple']

function initials(name = '') {
  return name.trim().split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase()
}

function avatarColor(id = '') {
  const sum = [...id].reduce((acc, c) => acc + c.charCodeAt(0), 0)
  return AVATAR_COLORS[sum % AVATAR_COLORS.length]
}

function ManageUsers() {
  const [users, setUsers]   = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const { data } = await api.get('/admin/users')
        setUsers(data)
      } catch (err) { console.log(err) }
    }
    load()
  }, [])

  const deleteUser = async (id) => {
    try {
      await api.delete(`/admin/users/${id}`)
      const { data } = await api.get('/admin/users')
      setUsers(data)
    } catch (err) { console.log(err) }
  }

  const nonAdmins = users.filter(u => u.role !== 'admin')
  const filtered  = nonAdmins.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  )

  const joinedToday = users.filter(u => {
    const d = new Date(u.createdAt)
    const t = new Date()
    return d.toDateString() === t.toDateString()
  }).length

  return (
    <>
      <AdminNavbar />

      <div className="users-page">

        {/* ── HEADER ── */}
        <div className="users-header">
          <div className="hdr-left">
            <h1>Users</h1>
            <p>View and manage all registered accounts</p>
          </div>
        </div>

        {/* ── STATS ── */}
        <div className="users-stats">
          <div className="stat-card"><span className="stat-label">Total</span><span className="stat-val">{nonAdmins.length}</span></div>
          <div className="stat-card"><span className="stat-label">Filtered</span><span className="stat-val">{filtered.length}</span></div>
          <div className="stat-card"><span className="stat-label">New today</span><span className="stat-val">{joinedToday}</span></div>
        </div>

        {/* ── SEARCH ── */}
        <div className="search-row">
          <div className="search-box">
            <i className="ti ti-search" aria-hidden="true" />
            <input
              type="text"
              placeholder="Search by name or email…"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* ── TABLE ── */}
        <div className="users-card">
          {filtered.length === 0 ? (
            <div className="empty-state">
              <i className="ti ti-users-off" aria-hidden="true" />
              <p>No users found</p>
            </div>
          ) : (
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Joined</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map(user => (
                    <tr key={user._id}>
                      <td>
                        <div className="name-cell">
                          <div className={`avatar ${avatarColor(user._id)}`}>
                            {initials(user.name)}
                          </div>
                          <span className="name-text">{user.name}</span>
                        </div>
                      </td>
                      <td className="email-cell">{user.email}</td>
                      <td>
                        <span className={`role-pill role-${user.role}`}>
                          <i className="ti ti-user" aria-hidden="true" />
                          {user.role}
                        </span>
                      </td>
                      <td className="date-cell">
                        {new Date(user.createdAt).toLocaleDateString('en-IN', {
                          day: 'numeric', month: 'short', year: 'numeric'
                        })}
                      </td>
                      <td>
                        <button
                          className="delete-btn"
                          onClick={() => deleteUser(user._id)}
                        >
                          <i className="ti ti-trash" aria-hidden="true" /> Delete
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