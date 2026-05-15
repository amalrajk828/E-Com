import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'

function Home() {

    return (
        <div className='bg-slate-950 text-white min-h-screen'>

            <Navbar />

            <section className='min-h-[85vh] flex items-center justify-center bg-gradient-to-r from-slate-950 to-blue-950'>

                <div className='text-center'>

                    <h1 className='text-6xl font-bold mb-6'>
                        Premium Electronics Store
                    </h1>

                    <p className='text-slate-400 text-xl mb-8'>
                        Smartphones, Laptops, Smartwatches & More
                    </p>

                    <button className='bg-blue-600 px-8 py-4 rounded-2xl text-lg hover:bg-blue-700 transition'>
                        Shop Now
                    </button>

                </div>

            </section>

            <Footer />

        </div>
    )
}

export default Home