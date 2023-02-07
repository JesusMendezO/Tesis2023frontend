import { useEffect } from 'react'
import useProyectos from "../hooks/useProyectos"
import PreviewProyecto from "../components/PreviewProyecto"
import Alerta from "../components/Alerta"
import Footer from '../components/Footer'
import Header from '../components/Header'

const SobreNosotros = () => {
  const { proyectos, alerta } = useProyectos()
  const { msg } = alerta

  return (

    <>
    <div>
       <div> <header id="main-header"><Header /></header></div>
        <div className="grid grid-rows-3 mt-20 h-max">
  <div className='w-full h-36'>
  <div class="grid grid-cols-2">
  <div class="bg-sky-500 h-96">

      <div className='vertical-rl  ml-4'>
  
  </div></div>
  <div class=""><img class="object-cover h-96 w-full"src="/assets/plazoletabasilicaversionfinal.jpg" /></div>
  </div>
  
  
  </div>
  <div className='w-full h-36'>
      <div class="grid grid-cols-3">
          <div><img class="h-96 w-52"src="/assets/plaza.jpg" /></div>
          <div class="bg-amber-500 h-96 -ml-56"></div>
          <div class="bg-orange-600 h-96 w-auto -ml-32"></div>
          </div>
      </div>
  <div className='w-full bg-sky-700 h-96'><div class=""><img class="float-right h-92 w-56 mt-4 mr-8 mb-4"src="/assets/estatua.jpg" /></div></div>
</div>
<footer> <Footer /></footer></div>
    
    </>
  )
}

export default SobreNosotros