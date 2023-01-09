import { useEffect } from 'react'
import useProyectos from "../hooks/useProyectos"
import PreviewProyecto from "../components/PreviewProyecto"
import Alerta from "../components/Alerta"
import Header from '../components/Header'
const Inicio = () => {
  const { proyectos, alerta } = useProyectos()
  const { msg } = alerta

  return (
    <>
     <header id="main-header"><Header /></header>
     <hr className='height:100vh width:.5vw '></hr>   
                 
        <h1 className="text-4xl font-black">Proyectos</h1>

       
       
    </>
  )
}

export default Inicio