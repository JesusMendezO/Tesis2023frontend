import { useEffect } from 'react'
import useProyectos from "../hooks/useProyectos"
import PreviewProyecto from "../components/PreviewProyecto"
import Alerta from "../components/Alerta"
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
const PrincilMuseo = () => {
  const { proyectos, alerta } = useProyectos()
  const { msg } = alerta

  return (

    <>
    <div>
       <div> <header id="main-header"><Header /></header></div>
      <div className='bg-amber-700'>
      

  
        <div class="grid grid-cols-1  mt-20">
    
    <div class="bg-cover bg-center bg-[url('/assets/Museo/3.jpg')] h-96 ">
      <div className='inline-block align-middle uppercase text-4xl text-white mt-32 ml-60'>
      <p className='ml-2'>Museo Urdaneta</p>
     
        </div>


    </div><div className='grid grid-cols-1 content-end'>
        <div className='ml-72'><img class="w-3/4 h-48 ml-72" src="/assets/multimedia.jpg" /></div>
    
    </div>
    
    <div>
    <div class="flex ml-20 mr-20">
  <div class="bg-cover bg-center bg-[url('/assets/Museo/2.jpg')] h-48 w-60">
 
  </div>
  <div class="bg-cover bg-center bg-[url('/assets/Museo/4.jpg')] h-48 w-60">
  
  </div>
  <div class="bg-cover bg-center bg-[url('/assets/Museo/5.jpg')] h-48 w-60">

  </div>
  <div class="bg-cover bg-center bg-[url('/assets/Museo/6.jpg')] h-48 w-60">

</div>
<div class="bg-cover bg-center bg-[url('/assets/Museo/7.jpg')] h-48 w-60">

</div>
</div>
<img class="w-3/4 h-96 ml-64" src="/assets/recorridoV.jpg" />
<div className='mt-40 mb-40 grid place-content-center'>
    <div className=''>
    <Link
                    to="/recorridomuseo"
                    className='font-bold uppercase text-sky-600 '
                ><img class="w-48 h-48" src="/assets/aqui.jpg" /></Link>
    </div>
 
  </div>
    </div>
    
    
  </div>
         
  
  
    
      </div>
       
  
<footer> <Footer /></footer></div>
    
    </>
  )
}

export default PrincilMuseo