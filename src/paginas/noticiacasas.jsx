import { useEffect } from 'react'
import useProyectos from "../hooks/useProyectos"
import PreviewProyecto from "../components/PreviewProyecto"
import Alerta from "../components/Alerta"
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
const NoticiasCasas = () => {
  const { proyectos, alerta } = useProyectos()
  const { msg } = alerta

  return (

    <>
    <div>
       <div> <header id="main-header"><Header /></header></div>
      
       <div class="grid  mt-20">
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
  
  <div class="bg-cover bg-center bg-[url('/assets/noticia1.jpg')] h-96 w-3/4 ml-28">
    <div className='inline-block align-middle text-amber-600 mt-80'>
   
      </div>
  </div>
  <div> <h3 className='font-bold uppercase text-4xl text-amber-600'>Exposicion de planos Arquitectonicos de casas del Saladillo</h3> 
        <p className='text-sky-600'>Conce la estrutura Arquitectonica de estas iconocias Casas
                    Dia:12/01/2023 Hora: 10:00 am   
         </p> 
         <p className='mt-5'>
         El lunes 13 de Febrero se estarán mostrando los planos arquitectónicos antiguos de las casas del Saladillo, las cuales son parte fundamental de la idiosincrasia de la ciudad de Maracaibo. Esta actividad se realizara por parte del Centro Rafael Urdaneta en sus instalaciones, en la calle Carabobo.
         </p>
         
         </div>
  
  
</div>
       

  
<div className='mt-10 h-4'></div>
<footer className='mt-32'> <Footer /></footer></div>
    
    </>
  )
}

export default NoticiasCasas