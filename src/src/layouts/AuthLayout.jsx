import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
const AuthLayout = () => {
  return (
    <><header id="main-header"><Header /></header>
        <main className='container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center'>
            <div className='md:w-2/3 lg:w-2/5 '>
                <Outlet />
                <footer> <Footer /></footer>
            </div>
           
        </main>
        
    </>
  )
}

export default AuthLayout