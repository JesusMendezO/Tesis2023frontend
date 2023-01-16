import { useEffect } from 'react'
import useProyectos from "../hooks/useProyectos"
import PreviewProyecto from "../components/PreviewProyecto"
import Alerta from "../components/Alerta"
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
const Galeria = () => {
  const { proyectos, alerta } = useProyectos()
  const { msg } = alerta

  return (

    <>
    <div>
       <div> <header id="main-header"><Header /></header></div>

       <div class="grid grid-cols-2  mt-20">
  
  <div class="w-96 ml-28 "><img class="w-35 h-28" src="/assets/Galeria.jpg" /></div>
  <div class="bg-sky-600 h-2 mt-8 -ml-60 mr-20  inline-block align-middle"></div>
</div>
    <div className="">
    <img class="h-96 w-full" src="/assets/galeriapor.jpg" />
      </div>

      <div class="grid grid-cols-2  mt-20">
  
  <div class="bg-cover bg-center bg-[url('/assets/gale3.jpg')] h-96">
    <div className='inline-block align-middle text-amber-600'>
    <Link
                    to="/galeriaimg"
                    className='font-bold uppercase text-sky-600'> 
                    Basilica de Nuestra Señora de Chinquinquira
    </Link>
      </div>
  </div>
  <div class="bg-cover bg-center bg-[url('/assets/gale2.jpg')] h-96">
    <div className='inline-block align-middle text-amber-600'>
    <Link
                    to="/inicio"
                    className='font-bold uppercase text-sky-600'> 
                   Iglesia Santa Lucia
    </Link>
      
    </div>
    </div>
  <div class="bg-cover bg-center bg-[url('assets/gale1.jpg')] h-96">
    <div className='inline-block align-middle text-amber-600'>
    <Link
                    to="/inicio"
                    className='font-bold uppercase text-sky-600'> 
                    Teatro Baralt
    </Link>
      
    </div>
    </div>
  <div class="bg-cover bg-center bg-[url('/assets/gale4.jpg')] h-96">
    <div className='inline-block align-middle text-amber-600'>
    <Link
                    to="/inicio"
                    className='font-bold uppercase text-sky-600'> 
                    Museo Urdaneta
    </Link>
      
      </div>
      </div>
</div>
       

  <h1 class="text-xl text-left transform rotate-180 text-amber-500 mt-2">Galeria</h1>
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

export default Galeria