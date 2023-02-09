import { Link } from 'react-router-dom'
import useProyectos from '../hooks/useProyectos'
import useAuth from '../hooks/useAuth'
import Busqueda from './Busqueda'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { slide as Menu } from 'react-burger-menu'
import Sidebar from './Sidebar';
const Header = () => {

    const { handleBuscador, cerrarSesionProyectos } = useProyectos()
    const { cerrarSesionAuth } = useAuth()
    const { auth, cargando } = useAuth();
    const handleCerrarSesion = () => {
        cerrarSesionAuth()
        cerrarSesionProyectos()
        localStorage.removeItem('token')
    }
    


  return (
    <header className="fixed  top-0 px-4 py-5 z-20  w-full bg-white border-b">
       
        <div className="md:flex md:justify-between" id='page-wrap'>
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            <h2 className="text-4xl text-sky-600 font-black text-center mb-5 md:mb-0">
            <div className="w-36 h-20 items-center -mt-10" ><img src="/assets/Logo.png" /></div>  
            </h2>
          
            <div className='flex flex-col md:flex-row items-center gap-4'>
                
               
                  <Link
                    to="/inicio"
                    className='font-bold uppercase text-sky-600'
                >Inicio</Link>
 <Link
                    to="/SobreNosotros"
                    className='font-bold uppercase text-sky-600'
                >Sobbre Nosotros</Link>
                <Link
                    to="/noticias"
                    className='font-bold uppercase text-sky-600'
                >Novedades</Link>
                <Link
                    to="/recorridos"
                    className='font-bold uppercase text-sky-600'
                >Recorridos</Link>
                 <Link
                    to="/galerias"
                    className='font-bold uppercase text-sky-600'
                >Galeria</Link>
                 
                 <Link
                    to="/contacto"
                    className='font-bold uppercase text-sky-600'
                >Contacto</Link>
                
<div>
       {auth._id ?  <button
                    type="button"
                    className='text-white text-sm bg-sky-600 p-3 rounded-md uppercase font-bold'
                    onClick={handleCerrarSesion}
                >Cerrar Sesión</button>: <Link
                to="/login"
                className='font-bold uppercase text-sky-600'
            >Iniciar Sesion</Link>}
    </div>
                <Busqueda />
            </div>
        </div>
    </header>
  )
}

export default Header