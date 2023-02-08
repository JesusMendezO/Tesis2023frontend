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
  
  </div> <p className='text-white  mt-4 ml-2 mr-2'>Somos una guía virtual interactiva que busca incentivar al público a conocer la idiosincrasia e historia de la ciudad de Maracaibo de manera virtual e interactiva. En esta guía podrás encontrar toda la información referente al acervo histórico y arquitectónico de la ciudad de Maracaibo, su cultura y costumbres. Podrás explorar todo el contenido multimedia que tenemos a la mano e información inédita, enterarte de los eventos y noticias culturales y viajar desde donde estes a la ciudad del sol amada con tan solo un click.</p></div>
  <div class=""><img class="object-cover h-96 w-full"src="/assets/plazoletabasilicaversionfinal.jpg" /></div>
  </div>
  
  
  </div>
  <div className='w-full h-36'>
      <div class="grid grid-cols-3">
          <div><img class="h-96 w-52 cover"src="/assets/plaza.jpg" /></div>
          <div class="bg-amber-500 h-96 -ml-56 text-white"><p className='text-white  mt-4 ml-2 mr-10'>Nuestra misión es rescatar el interés del público y de las nuevas generaciones por la historia, 
          la cultura y la arquitectura de la región marabina a través de las nuevas tecnologías que nos permiten 
          explorar más allá y promover la cultura y la idiosincrasia de Maracaibo.</p> </div>
          <div class="bg-orange-600 h-96 w-auto -ml-32 text-white"> <p className='text-white  mt-4 ml-2 mr-2'>Ser la herramienta predilecta por todas las instituciones y lugares que conforman el acervo histórico y arquitectónico de Maracaibo, ayudando a su expansión y conocimiento, promoviendo la cultura y el turismo.</p></div>
          </div>
      </div>
  <div className='w-full bg-sky-700 h-96 text-white '><div class="mb-10  "><img class="float-right h-92 w-56 mt-4 mr-8 mb-10"src="/assets/estatua.jpg" /></div >Maracaibo, la capital del estado Zulia al noroeste de Venezuela, celebra cada septiembre su fundación, desde 1529, específicamente el 8 de septiembre. Es una de las ciudades más populares del país, con un gentilicio único y destacado que hace imposible pasar por alto.
Entre los nombres que se le da a Maracaibo está La Tierra del Sol Amada, La Ciudad de los Relámpagos y La Ciudad del Sol Amado. Estos apodos vienen del decir común de los marabinos por el incandescente sol. Además, es también un nombre que recibe por el poema de Rafael María Baralt (Adiós a la Patria, 1843), destacando también el grandioso sol que cubre al Zulia.
El Zulia tienen muchos emblemas, además del sol, destacan la ciudad antigua con edificaciones coloniales, el brillante rayo del Catatumbo (presente en la bandera y en el escudo), el petróleo y gas, El Lago, las etnias nativas venezolanas como wayuus, el equipo de béisbol y toda la fanaticada en torno al tema, las gaitas, el patacón, la chinita, entre otros, ¡Es una zona llena de cultura y orgullo por lo propio! De hecho, el mismo nombre de Venezuela viene de este estado, cuando los colonos observaron los palafitos cercando las orillas del Lago de Maracaibo y decidieron llamarlo “la pequeña Venecia”.
</div>
</div>
<footer className='mt-20'> <Footer /></footer></div>
    
    </>
  )
}

export default SobreNosotros