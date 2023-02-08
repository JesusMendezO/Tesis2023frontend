import { useEffect } from 'react'
import useProyectos from "../hooks/useProyectos"
import PreviewProyecto from "../components/PreviewProyecto"
import Alerta from "../components/Alerta"
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
const NoticiasTeatro = () => {
  const { proyectos, alerta } = useProyectos()
  const { msg } = alerta

  return (

    <>
    <div>
       <div> <header id="main-header"><Header /></header></div>
      
       <div class="grid   mt-20">
       <Link
                    to="/noticias"
                    className='font-bold uppercase text-white ml-32'> 
                  <img class="w-full h-28" src="/assets/noticia franja.jpg" />
    </Link>
       
</div>
    {/* <div className="">
    <img class="h-96 w-full" src="/assets/Noticia.jpg" />
      </div> */}

      <div class="grid grid-cols-2  mt-20 mb-20">
  
  <div class="bg-cover bg-center bg-[url('/assets/noticia2.jpg')] h-96 w-3/4 ml-28">
    <div className='inline-block align-middle text-amber-600 mt-80'>
   
      </div>
  </div>
  <div className=''> <h3 className='font-bold uppercase text-4xl text-amber-600'>Recorrido dentro del Teatro Baralt</h3> 
        <p className='text-sky-600'>Conoce las intalaciones de este emblematico lugar
         Dia:12/01/2023 Hora:10:00am  
         </p> 
         <p className='mt-5'>
         Este jueves 23 de Enero el Teatro Baralt estará abriendo sus puertas al público brindando un recorrido completo por sus icónicas instalaciones con motivo educativo y turístico pues muchos ciudadanos aun no conocen esta edificación y su historia la cual es parte de la idiosincrasia Zuliana. Mediante sus redes sociales estarán brindando cualquier información y censando las personas interesadas en este recorrido.
         </p>
         
         </div>
  
  
</div>
       

  <div className='mt-10 h-4'></div>
  
<footer className='mt-32'> <Footer /></footer></div>
    
    </>
  )
}

export default NoticiasTeatro