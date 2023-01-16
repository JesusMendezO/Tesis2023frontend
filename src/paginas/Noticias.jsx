import { useEffect } from 'react'
import useProyectos from "../hooks/useProyectos"
import PreviewProyecto from "../components/PreviewProyecto"
import Alerta from "../components/Alerta"
import Footer from '../components/Footer'
import Header from '../components/Header'

const Noticias = () => {
  const { proyectos, alerta } = useProyectos()
  const { msg } = alerta

  return (

    <>
    <div>
       <div> <header id="main-header"><Header /></header></div>
      
  <h1 class="text-xl text-left transform rotate-180 text-amber-500 mt-2">Noticias</h1>
  
<footer> <Footer /></footer></div>
    
    </>
  )
}

export default Noticias