import { useState } from 'react'
import {Link} from 'react-router-dom'
import Alerta from '../components/Alerta'
import clienteAxios from '../config/clienteAxios'

const Registrar = () => {
    const [ nombre, setNombre ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ repetirPassword, setRepetirPassword ] = useState('')
    const [ alerta, setAlerta ] = useState({})

    const handleSubmit = async e => {
        e.preventDefault();

        if([nombre, email, password, repetirPassword].includes('')) {
           setAlerta({
               msg: 'Todos los campos son obligatorios',
               error: true
           })
           return
        }

        if(password !== repetirPassword ) {
            setAlerta({
                msg: 'Los password no son iguales',
                error: true
            })
            return
        }

        if(password.length < 6 ) {
            setAlerta({
                msg: 'El Password es muy corto, agrega minimo 6 caracteres',
                error: true
            })
            return
        }

        setAlerta({})

        // Crear el usuario en la API
        try {
            const { data } = await clienteAxios.post(`/usuarios`, {nombre, email, password} )

            setAlerta({
                msg: data.msg,
                error: false
            })

            setNombre('')
            setEmail('')
            setPassword('')
            setRepetirPassword('')
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
        <div><img class="object-contain h-18 w-80 ml-24 -mt-4"  src="/assets/registro.jpg" /></div>

        { msg && <Alerta alerta={alerta} /> }
    
        <form 
            className="my-8 mt-2 bg-white shadow p-0 border border-sky-500"
            onSubmit={handleSubmit}
        ><div className='items-center'>
        <h1 className="text-sky-600 text-center font-black text-5xl capitalize">Hola!</h1>
       <h2 className="text-amber-500 text-center text-2xl" >Bienvenido</h2>
        </div>
            <div className="my-5 mt-2">
               
                <input
                    id="nombre"
                    type="text"
                    placeholder="Tu Nombre"
                    className="w-10/12 mt-3 p-3 border border-amber-500  bg-gray-50 ml-10"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
            </div>

            <div className="my-5 -mt-2">
              
                <input
                    id="email"
                    type="email"
                    placeholder="Correo"
                    className="w-10/12 mt-3 p-3 border border-amber-500  bg-gray-50 ml-10"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className="my-5 -mt-2">
               
                <input
                    id="password"
                    type="password"
                    placeholder="Contraseña Registro"
                    className="w-10/12 mt-3 p-3 border border-amber-500  bg-gray-50 ml-10"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>

            <div className="my-5 -mt-2">

                <input
                    id="password2"
                    type="password"
                    placeholder="Repetir tu Contraseña"
                    className="w-10/12 mt-3 p-3 border border-amber-500  bg-gray-50 ml-10"
                    value={repetirPassword}
                    onChange={e => setRepetirPassword(e.target.value)}
                />
            </div>

            <input 
                type="submit"
                value="Crear Cuenta"
                className="bg-amber-500 mb-5 w-36 py-3 text-white uppercase font-bold hover:cursor-pointer hover:bg-sky-800 transition-colors ml-40"
            />
            
        </form>

        <nav className="lg:flex lg:justify-between">
            <Link 
                className='block text-center my-5 text-sky-600 uppercase text-sm'
                to="/"
            >¿Ya tienes una cuenta? Inicia Sesión</Link>

            <Link 
                className='block text-center my-5 text-sky-600 uppercase text-sm'
                to="/olvide-password"
            >Olvide Mi Password</Link>
        </nav>
    
    </>
  )
}

export default Registrar