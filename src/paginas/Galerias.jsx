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

       <div class="grid  mt-20">
  
  <img class="w-full h-28 mt-4" src="/assets/galeria Franja.jpg" />
</div>
    <div className="">
    <img class="h-96 w-full" src="/assets/galeriapor.jpg" />
      </div>

      <div class="grid grid-cols-2  mt-20">
  
  <div class="bg-cover bg-center bg-[url('/assets/gale3.jpg')] h-96 ml-4">
  <div class="grid justify-items-center">
  <div className='inline-block align-middle text-amber-600 mt-48'>
    <Link
                    to="/galeriaimg"
                    className='font-bold uppercase text-2xl text-white'> 
                    Basilica de Nuestra Señora de Chinquinquira
    </Link>
      </div>
  </div>

    
    
  </div>
  <div class="bg-cover bg-center bg-[url('/assets/gale2.jpg')] h-96 ml-4 mr-4">
  <div class="grid justify-items-center">
  <div className='inline-block align-middle text-amber-600 mt-48'>
    <Link
                    to="/galeriasanta"
                    className='font-bold uppercase  text-4xl text-white'> 
                   Iglesia Santa Barbara
    </Link>
      
    </div>
  </div>
    
    </div>
  <div class="bg-cover bg-center bg-[url('/assets/gale1.jpg')] h-96 ml-4 mt-4">
  <div class="grid justify-items-center">
  <div className='inline-block align-middle text-amber-600 mt-48'>
    <Link
                    to="/galeriateatro"
                    className='font-bold uppercase  text-4xl text-white'> 
                   Teatro Baralt
                   
    </Link>
      
    </div>
  </div>
    
    </div>
  <div class="bg-cover bg-center bg-[url('/assets/gale4.jpg')] h-96 mb-40 ml-4 mr-4 mt-4" >

  <div class="grid justify-items-center">
  <div className='inline-block align-middle text-amber-600 mt-48'>
    <Link
                    to="/galeriamuseo"
                    className='font-bold uppercase text-4xl text-white'> 
                    Museo Urdaneta
    </Link>
      
      </div>
  </div>
   
      </div>
</div>
       

 
<footer> <Footer /></footer></div>
    
    </>
  )
}

export default Galeria