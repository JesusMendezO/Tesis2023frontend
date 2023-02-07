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
                    className='font-bold uppercase text-white'> 
                   <img class="w-10 h-10" src="/assets/iconos/1.png" />
    </Link>
      
      </div>
      <div className="menu-item " href="/">
      <img class="w-10 h-10" src="/assets/iconos/2.png" />
      </div>
      <div className="menu-item " href="/">
      <img class="w-10 h-10" src="/assets/iconos/3.png" />
      </div>
      <div className="menu-item " href="/">
      <Link
                    to="/principalMuseo"
                    className='font-bold uppercase text-white'> 
                  <img class="w-10 h-10" src="/assets/iconos/4.png" />
    </Link>
      
      </div>
    </Menu>
  )
}

export default Sidebar