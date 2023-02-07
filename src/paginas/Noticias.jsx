import { useEffect } from 'react'
import useProyectos from "../hooks/useProyectos"
import PreviewProyecto from "../components/PreviewProyecto"
import Alerta from "../components/Alerta"
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
const Noticias = () => {
  const { proyectos, alerta } = useProyectos()
  const { msg } = alerta

  return (

    <>
    <div>
       <div> <header id="main-header"><Header /></header></div>
      
       <div class="grid  mt-20">
  
<img class="w-full h-28" src="/assets/noticia franja.jpg" />

</div>
    {/* <div className="">
    <img class="h-96 w-full" src="/assets/Noticia.jpg" />
      </div> */}

      <div class="grid grid-cols-1  mt-20">
  
  <div class="bg-cover bg-center bg-[url('/assets/noticia2.jpg')] h-96 w-3/4 ml-28">
    <div className='inline-block align-middle text-amber-600 mt-80'>
    <Link
                    to="/noticiasteatro"
                    className='font-bold uppercase text-white '> 
                    <p className='ml-2'>Recorrido dentro del Teatro Baralt
                    Conoce las intalaciones de este emblematico lugar
                    Dia:12/01/2023 Hora:10:00am                  +Info</p>
                    
    </Link>
      </div>
  </div>
  <div class="bg-cover bg-center bg-[url('/assets/noticia3.jpeg')] h-96 w-3/4 mt-10 ml-28">
    <div className='inline-block align-middle text-amber-600 mt-72'>
    <Link
                    to="/noticiastranvia"
                    className='font-bold uppercase text-white '> 
                    <p className='ml-2'>
                    Tranvia de Maracaibo te invita:
                  Recorrido por el Casco Central
                  Recorre los lugares mas importantes de nuestra ciudad con compañia de un guia que te 
                  enseñara sobre todos ellos
                  Dia:04/02/2023 Hora: 10:00 am Salida: Vereda del lago                  +Info
                    </p>
                  
    </Link>
      
    </div>
    </div>
  <div class="bg-cover bg-center bg-[url('assets/noticia1.jpg')] h-96 w-3/4 mt-10 ml-28">
    <div className='mt-72'>
    <Link
                    to="/noticiascasas"
                    className='font-bold uppercase inline-block align-baseline  text-white'>
                      <p className='ml-2'>
                      Exposicion de planos Arquitectonicos de casas del Saladillo
                    Conce la estrutura Arquitectonica de estas iconocias Casas
                    Dia:12/01/2023 Hora: 10:00 am                         +Info</p> 
                    
    </Link>
      
    </div>
    </div>
  
</div>
       


  <div className='mt-40'>
  <Link
                    to="/galeriaimg"
                    className='font-bold uppercase text-sky-600'
                >basilica</Link>
  </div>
  
<footer> <Footer /></footer></div>
    
    </>
  )
}

export default Noticias