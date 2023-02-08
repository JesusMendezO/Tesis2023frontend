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
    
    <div class="bg-cover bg-center bg-[url('/assets/Museo/1.jpg')] h-96 ">
      <div className='inline-block align-center uppercase text-6xl text-white mt-32 ml-96'>
      <div class="grid justify-items-center ">
  <div className='ml-62'><p className=' ml-62 text-center'>Museo Urdaneta</p></div>

</div>
      
     
        </div>
      


    </div>
    <div className='mt-10'>
  <p className='text-white mr-10 ml-10'>El museo fue construido sobre las bases de la casa natal del General Rafael Urdaneta, localizado en el sector conocido como cerro El Zamuro. Inicialmente la casa fue demolida para dar paso a la construcción de una escuela que llevaba el nombre del general. En 1930 fue derribada para levantar un edificio en el que funcionaría un dispensario antituberculoso. Este centro asistencial prestó servicio hasta 1936, año en que el presidente del estado Zulia, para ese momento Luis Roncayolo, decretó la creación del Museo Histórico Rafael Urdaneta. En 1945, en el marco del primer centenario de la muerte del General Rafael Urdaneta, se ordenaron algunos trabajos de remodelación en la edificación, como la fachada principal que fue rediseñada a semejanza de la iglesia de la Magdalena de París, Francia, templo donde se velaron los restos del prócer. Esta fachada es la que se conserva hasta ahora.
En la fachada prevalecen características arquitectónicas de estilo neoclásico; con columnas de orden toscano. El estilo neoclásico de la edificación queda de manifiesto en la utilización simétrica de ornamentos y vanos en la fachada, frontones triangulares en atrio y dinteles de puertas y ventanas. Para acceder a la galería se debe atravesar un ángulo escalonado que finaliza donde se erigen cuatro columna.
La parte interna del museo se distribuye en salas de exhibición, con muestras de objetos que pertenecieron al general Rafael Urdaneta y su familia; salas administrativas y una sala en la sección posterior, en la planta alta, destinada a usos múltiples. Tiene un espacio natural abierto que vincula dos tipos de arquitectura, la tradicional y un área remodelada ubicada en el segundo nivel. Toda la edificación está dotada de iluminación y ventilación artificial. Actualmente se encuentra en buen estado de conservación.
Esta edificación fue declarada Patrimonio Histórico Cultural del estado Zulia en 1996, mediante decreto Nº 199 de la Gobernación de estado Zulia.
</p>
</div>


    
    <div className='grid grid-cols-1 content-end mt-10'>
        <div className='ml-72'>
        <Link
                    to="/galeriaimg"
                    className='font-bold uppercase text-sky-600 '
                >
                  <p className='text-8xl uppercase text-white font-["Rumble_Brave"]'> Galeria Multimedia</p><br></br> 
                 </Link>
            </div>
    
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

<div className='mt-40 mb-40 grid place-content-center'>
<p className='text-8xl uppercase text-white font-["Rumble_Brave"] mt-10'> Recorrido Multimedia<br></br>
<p className='text-2xl uppercase text-white text-center font-["Rumble_Brave"]'>Viaja desde casa</p> </p>
    <div className='mt-10'>
    <Link
                    to="/recorridomuseo"
                    className='font-bold uppercase text-sky-600 '
                    
                ><div className=' grid place-content-center'>
                    <button>
                  <p  className='text-8xl uppercase text-white text-center font-["Rumble_Brave"]'> Aqui</p>
                  </button>
                </div>
                </Link>
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