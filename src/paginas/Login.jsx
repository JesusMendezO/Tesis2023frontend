import { useState } from 'react'
import { Link,  useNavigate } from 'react-router-dom'
import Alerta from '../components/Alerta'
import clienteAxios from '../config/clienteAxios'
import useAuth from '../hooks/useAuth';
import Header from '../components/Header'
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alerta, setAlerta] = useState({})

    const { setAuth } = useAuth();

    const navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault();

        if([email, password].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            });
            return
        }



        try {
            const { data } = await clienteAxios.post('/usuarios/login', { email, password})
            setAlerta({})
            localStorage.setItem('token', data.token)
            setAuth(data)
            navigate('/inicio')
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
        }

    }

    const { msg } = alerta

  return (
    <>
    
        <h1 className="h-20 w-96 ml-16" ><img src="/assets/inicioS.jpg" />
            
        </h1>

        {msg && <Alerta alerta={alerta } />}
    
        <form 
            className="my-8 bg-white shadow p-2 border border-sky-500 "
            onSubmit={handleSubmit}
        >
            <div className='items-center'>
            <h1 className="text-sky-600 text-center font-black text-5xl capitalize">Hola!</h1>
           <h2 className="text-amber-500 text-center text-2xl" >Bienvenido de Nuevo</h2>
            </div>
            <div className="my-5 ">
              
                <input
                    id="email"
                    type="email"
                    placeholder="Correo"
                    className="w-10/12 mt-3 p-3 border border-amber-500  bg-gray-50 ml-10"
                    value={email}
                    onChange={ e => setEmail(e.target.value)}
                />
            </div>
            <div className="my-5">
               
                <input
                    id="password"
                    type="password"
                    placeholder="Contraseña"
                    className="w-10/12 mt-3 p-3 border border-amber-500  bg-gray-50 ml-10"
                    value={password}
                    onChange={ e => setPassword(e.target.value)}
                />
            </div>
            <Link 
                className='block text-center my-5  uppercase text-sm ml-40 text-sky-600'
                to="/olvide-password"
            >Recuperar Contraseña</Link>
            <input 
                type="submit"
                value="Entrar"
                className="bg-amber-500 mb-5 w-24 py-3 text-white uppercase font-bold hover:cursor-pointer hover:bg-sky-800 transition-colors ml-40"
            />
            <Link 
                className='block text-center my-5 uppercase text-sm text-sky-600'
                to="/registrar"
            >¿No tienes una cuenta? Regístrate</Link>
        </form>

        
    
    </>
  )
}

export default Login