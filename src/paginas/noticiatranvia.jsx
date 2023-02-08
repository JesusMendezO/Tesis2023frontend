import { useEffect } from 'react'
import useProyectos from "../hooks/useProyectos"
import PreviewProyecto from "../components/PreviewProyecto"
import Alerta from "../components/Alerta"
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
const NoticiasTranvia = () => {
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

      <div class="grid grid-cols-2  mt-20">
  
  <div class="bg-cover bg-center bg-[url('/assets/noticia3.jpeg')] h-96 w-3/4 ml-28">
    <div className='inline-block align-middle text-amber-600 mt-80'>
   
      </div>
  </div>
  <div> <h3 className='font-bold uppercase text-4xl text-amber-600'>Recorrido por el Casco Central</h3> 
        <p className='text-sky-600'>Recorre los lugares mas importantes de nuestra ciudad con compañia de un guia que te 
                  enseñara sobre todos ellos
                  Dia:04/02/2023 Hora: 10:00 am Salida: Vereda del lago  
         </p> 
         <p className='mt-5'>
         Disfruta de un paseo por el casco central narrado por un guía y conoce todos los lugares históricos que conforman la ciudad. Tranvia de Maracaibo te invita a realizar un recorrido educativo para todo público que busca educar e informar sobre los lugares más importantes del casco histórico de la ciudad. El recorrido saldrá desde la estación del Tranvia ubicado en la vereda del Lago.
         </p>
         
         </div>
  
  
</div>
       

<div className='mt-10 h-4'></div>
  
<footer className='mt-32'> <Footer /></footer></div>
    
    </>
  )
}

export default NoticiasTranvia