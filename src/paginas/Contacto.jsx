import { useEffect } from 'react'
import useProyectos from "../hooks/useProyectos"
import PreviewProyecto from "../components/PreviewProyecto"
import Alerta from "../components/Alerta"
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
const Contacto = () => {
  const { proyectos, alerta } = useProyectos()
  const { msg } = alerta

  return (

    <>
    <div>
       <div> <header id="main-header"><Header /></header></div>
      
       <div class="flex justify-center mt-20">
  
  

    
  <div className='mt-32'> <h3 className='font-bold uppercase text-2xl text-sky-600'>Para informacion  y proyectos llamanos o envia un correo electronico</h3> 
        <p className='text-amber-600 text-xl'>maraguia@gmail.com  
         </p> 
         <p className='text-amber-600 text-xl'>
        0261-8484080
         </p>
         
         </div>
  
  
</div>
       

  
  
<footer> <Footer /></footer></div>
    
    </>
  )
}

export default Contacto