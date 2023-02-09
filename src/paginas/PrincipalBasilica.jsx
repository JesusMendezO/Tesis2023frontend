import { useEffect } from 'react'
import useProyectos from "../hooks/useProyectos"
import PreviewProyecto from "../components/PreviewProyecto"
import Alerta from "../components/Alerta"
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
const PrincilBasilica = () => {
  const { proyectos, alerta } = useProyectos()
  const { msg } = alerta

  return (

    <>
    <div>
       <div> <header id="main-header"><Header /></header></div>
      <div className='bg-amber-700'>
      

  
        <div class="grid grid-cols-1  mt-20">
    
    <div class="bg-cover bg-center bg-[url('/assets/basilica/1.jpg')] h-96 ">
      <div className='inline-block align-middle uppercase text-6xl text-white mt-32 '>
      <p className='text-center'>Basilica de Nuestra Señora de Chiquinquira</p>
     
        </div>
      


    </div>
    <div className='mt-10'>
  <p className='text-white mr-10 ml-10'>La Basílica de Nuestra Señora de Chiquinquirá es el templo católico más concurrido del estado Zulia en Venezuela, ubicada en el centro de la ciudad de Maracaibo. Una construcción dedicada a la Virgen de Chiquinquirá, patrona del estado Zulia. La basílica cuenta con 3 naves y 2 torres, un altar mayor, un presbiterio y numerosos nichos dedicados a diversos santos. Es una obra arquitectónica representativa de la ciudad de Maracaibo y del estado Zulia, es mencionada en canciones de Gaita zuliana además de estar presente en postales, cuadros, y otras manifestaciones. Cerca del 18 de noviembre de cada año, la basílica es el centro de la Feria de la Chinita, un evento socio cultural importante de la región, durante el cual además de las actividades religiosas como la procesión y la bajada de la virgen, se celebran eventos como el amanecer gaitero frente a la basílica, las corridas de toros en la plaza de toros el monumental de Maracaibo, el encendido de las luces navideñas de las avenidas Bella Vista y la Limpia, el juego de las Águilas del Zulia en el estadio Luis Aparicio, el Festival de la Orquídea por Super Sábado Sensacional.
La historia de esta edificación religiosa se remonta al año 1668 cuando apenas era una choza destinada a recibir a los fieles católicos; para 1686 se había transformado en ermita y fue llamada San Juan de Dios. Posteriormente fue sustituida por una pequeña iglesia que mantuvo el mismo nombre. En 1808 se dio paso a la iglesia conformada por una sola torre, y en 1864 se adicionan el frontis y la torre norte y se cambia su nombre por iglesia San Juan de Dios y Chiquinquirá. A partir de 1917, e incentivado por lograr la coronación canónica de la imagen de Nuestra Señora de Chiquinquirá, que desde 1756 estaba albergada en el templo, el párroco comenzó a pedir ante el vaticano la coronación de la virgen que se había manifestado en un retablo. Se decidió, en 1920, dar la jerarquía de basílica menor al templo. La construcción que se conoce actualmente se culminó en 1935. La imagen de Nuestra Señora de Chiquinquirá o La Chinita, como le dicen todos los zulianos, fue coronada en 1942. En cuanto a los trabajos en mármol y los vitrales que caracterizan la construcción, en su mayoría se realizaron a mediados de 1900.
Es una Basílica menor conformada por dos filas de cuatro columnas, un frontis en la fachada principal y dos torres con grandes campanarios de cuatro campanas mecánicas. También resalta el Reloj Del Olvido, que funciona por pesas en la torre norte. Tiene ocho cúpulas en la cubierta y dos más como remate de ambas torres. El acceso principal se da a través de tres puertas y dos accesos en los laterales norte y sur. El edificio es de planta rectangular con una nave central y dos laterales separadas por dos filas de columnas; posee un altar mayor donde se ubica el retablo de Nuestra Señora de Chiquinquirá; y altares menores en los laterales, la sacristía se encuentra en la parte posterior de éstos. Detrás de la sacristía está la casa parroquial. En los altares menores izquierdo y derecho se encuentran los frescos de San Juan de Dios y La Resurrección respectivamente, junto a otros frescos, decoraciones de paredes, techos y frontis, elaborados por Pablo Castellani entre 1930 y 1935. Resaltan ocho ventanales con vitrales traídos de Italia, de autor desconocido. En la planta baja de la torre norte se encuentra el recinto de los Milagros, y en la planta baja de la torre sur un recinto Bautismal. Hay también seis nichos ornamentados en las paredes laterales, que albergan imágenes religiosas. La iglesia alberga una valiosa colección de imágenes religiosas y objetos litúrgicos
Por su antigüedad y valor patrimonial fue declarada Monumento Histórico Nacional según Gaceta Oficial Nº 26320 del 2 de agosto de 1960.</p>
</div>

<div class="grid justify-items-center mt-10">
  <div><Link
                    to="/galeriaimg"
                    className='font-bold uppercase text-sky-600 '
                >
                  <p className='text-8xl uppercase text-white font-["Rumble_Brave"]'> Galeria Multimedia</p><br></br> 
                 </Link></div>

</div>
    
    
    
    <div>
    <div class="flex ml-20 mr-20">
  <div class="bg-cover bg-center bg-[url('/assets/basilica/2.jpg')] h-48 w-60">
 
  </div>
  <div class="bg-cover bg-center bg-[url('/assets/basilica/4.jpg')] h-48 w-60">
  
  </div>
  <div class="bg-cover bg-center bg-[url('/assets/basilica/5.jpg')] h-48 w-60">

  </div>
  <div class="bg-cover bg-center bg-[url('/assets/basilica/6.jpg')] h-48 w-60">

</div>
<div class="bg-cover bg-center bg-[url('/assets/basilica/7.jpg')] h-48 w-60">

</div>
</div>

<div className='mt-40 mb-40 grid place-content-center'>
<p className='text-8xl uppercase text-white font-["Rumble_Brave"] mt-10'> Recorrido Multimedia<br></br>
<p className='text-2xl uppercase text-white text-center font-["Rumble_Brave"]'>Viaja desde casa</p> </p>
    <div className='mt-10'>
    <Link
                    to="/recorridobasilica"
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

export default PrincilBasilica