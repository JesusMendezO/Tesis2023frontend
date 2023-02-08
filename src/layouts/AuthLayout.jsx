import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
const AuthLayout = () => {
  return (
    <><header id="main-header"><Header /></header>
        <main className='container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center'>
            <div className='md:w-2/3 lg:w-2/5 mb-20'>
                <Outlet />
                
               
            </div>
            <footer className='mt-10'> <Footer /></footer>
        </main>
        
    </>
  )
}

export default AuthLayout