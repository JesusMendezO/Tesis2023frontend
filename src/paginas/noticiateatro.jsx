import { useEffect,useState } from 'react'
import useProyectos from "../hooks/useProyectos"
import PreviewProyecto from "../components/PreviewProyecto"
import Alerta from "../components/Alerta"
import Footer from '../components/Footer'
import Header from '../components/Header'
import axios from 'axios';
import { Link } from 'react-router-dom'
// Parses the JSON returned by a network request
const parseJSON = (resp) => (resp.json ? resp.json() : resp);

// Checks if a network request came back fine, and throws an error if not
const checkStatus = (resp) => {
  if (resp.status >= 200 && resp.status < 300) {
    return resp;
  }

  return parseJSON(resp).then(resp => {
    throw resp;
  });
};

const headers = { 'Content-Type': 'application/json' };
const NoticiasTeatro = () => {
  const { proyectos, alerta } = useProyectos()
  const { msg } = alerta
  const [error, setError] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  // let data= axios.get('http://localhost:1337/api/noticias/3').then(response => {
  //   response.data.data.attributes.contenidos;
    
  // });; 

 

   useEffect(() => {
     fetch('https://tesisstrapi.onrender.com/api/noticias/3', { headers, method: 'GET' })
       .then(checkStatus)
       .then(parseJSON)
       .then(({ data }) => setRestaurants(data.attributes.contenidos))
      .catch((error) => setError(error))
   }, [])

//   if (error) {
//     // Print errors if any
//     return <div>An error occured: {error.message}</div>;
//   }

  


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

      <div class="grid grid-cols-2  mt-20 mb-20">
  
  <div class="bg-cover bg-center bg-[url('/assets/noticia2.jpg')] h-96 w-3/4 ml-28">
    <div className='inline-block align-middle text-amber-600 mt-80'>
   
      </div>
  </div>
  <div className=''> <h3 className='font-bold uppercase text-4xl text-amber-600'>Recorrido dentro del Teatro Baralt</h3> 
        <p className='text-sky-600'>
          {restaurants}
          Conoce las intalaciones de este emblematico lugar
         Dia:12/01/2023 Hora:10:00am  
         </p> 
         <p className='mt-5'>
         Este jueves 23 de Enero el Teatro Baralt estará abriendo sus puertas al público brindando un recorrido completo por sus icónicas instalaciones con motivo educativo y turístico pues muchos ciudadanos aun no conocen esta edificación y su historia la cual es parte de la idiosincrasia Zuliana. Mediante sus redes sociales estarán brindando cualquier información y censando las personas interesadas en este recorrido.
         </p>
         
         </div>
  
  
</div>
       

  <div className='mt-10 h-4'></div>
  
<footer className='mt-32'> <Footer /></footer></div>
    
    </>
  )
}

export default NoticiasTeatro