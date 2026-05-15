import { Link, useLocation, useNavigate } from 'react-router-dom'
import './AdminNavbar.css'

function AdminNavbar() {

    const location = useLocation()
    const navigate = useNavigate()

    const menus = [
        { name: 'Products', path: '/admin/products' },
        { name: 'Users', path: '/admin/users' }
    ]

    const logoutHandler = () => {
        localStorage.removeItem('token')
        navigate('/')
    }

    return (
        <nav className="admin-navbar">

            <div className="admin-logo">
                Admin Panel
            </div>

            <div className="admin-menu">

                {menus.map(menu => (
                    <Link
                        key={menu.path}
                        to={menu.path}
                        className={
                            location.pathname === menu.path
                                ? 'active-link'
                                : ''
                        }
                    >
                        {menu.name}
                    </Link>
                ))}

                {/* SAME STYLE AS LINKS */}
                <span
                    onClick={logoutHandler}
                    className="menu-link logout-link"
                    style={{cursor:'pointer'}}
                >
                    Logout
                </span>

            </div>

        </nav>
    )
}

export default AdminNavbar