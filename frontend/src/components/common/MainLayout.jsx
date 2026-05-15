import Navbar from './Navbar'

function MainLayout({ children }) {

    return (
        <div className='bg-slate-950 min-h-screen text-white'>

            <Navbar />

            <main>
                {children}
            </main>

        </div>
    )
}

export default MainLayout