import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { slide as Menu } from 'react-burger-menu';
import './sideber.css';
const Sidebar = () => {

  const { auth } = useAuth()

  return (
    <Menu>
      <div className="menu-item " >
      <Link
                    to="/principalbasilica"
                    className='  font-bold uppercase text-white'> 
                    <div className='flex flex-col md:flex-row items-center gap-4' ><img class="w-10 h-10" src="/assets/iconos/1.png" /> <p className='menu-item'>Basilica</p></div>
                   
    </Link>
      
      </div>
      <div className="menu-item font-bold uppercase text-white" href="/">
      
      <div className='flex flex-col md:flex-row items-center gap-4' ><img class="w-10 h-10" src="/assets/iconos/2.png" /><p className='menu-item'>Teatro Baralt</p></div> 
      </div>
      <div className="menu-item font-bold uppercase text-white " href="/">
      
      <div className='flex flex-col md:flex-row items-center gap-4' ><img class="w-10 h-10" src="/assets/iconos/3.png" /><p className='menu-item'>Iglesia Santa Barbara</p></div> 
      </div>
      <div className="menu-item " href="/">
      <Link
                    to="/principalMuseo"
                    className=' menu-item font-bold uppercase text-white'>
                      <div className='flex flex-col md:flex-row items-center gap-4' ><img class="w-10 h-10" src="/assets/iconos/4.png" /> <p className='menu-item'>Museo Urdaneta</p></div> 
                  
    </Link>
      
      </div>
    </Menu>
  )
}

export default Sidebar