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





const Recorridos = () => {
  const { proyectos, alerta } = useProyectos()
  const { msg } = alerta
  const [error, setError] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
 

 

//   useEffect(() => {
//     fetch('http://localhost:1337/api/imagenes?populate=basilica', { headers, method: 'GET' })
//       .then(checkStatus)
//       .then(parseJSON)
//       .then(({ data }) => setRestaurants(data))
//       .catch((error) => setError(error))
      
//   }, [])

//   if (error) {
//     // Print errors if any
//     return <div>An error occured: {error.message}</div>;
//   }

//   const datos= restaurants[0].attributes.basilica.data
//  console.log(datos[0].attributes.id)
  return (

    <>
    <div>
       <div> <header id="main-header"><Header /></header></div>
   
       <div class="grid grid-cols-2  mt-28">
  
  <div class="bg-cover bg-center bg-[url('/assets/gale3.jpg')] h-96 ml-4 mb-4 mr-4">
    <div className='inline-block align-middle text-amber-600 mt-36'>
    <Link
                    to="/recorridobasilica"
                    className='font-bold uppercase text-center text-3xl text-white mt-20 ml-36 mt-20'> 
                    <p>Basilica de Nuestra Señora de Chinquinquira</p>
    </Link>
      </div>
  </div>
  <div class="bg-cover bg-center bg-[url('/assets/gale2.jpg')] h-96 mr-4">
    <div className='inline-block align-middle text-amber-600 mt-36'>
    <Link
                    to="/recorridoiglesia"
                    className='font-bold text-center uppercase text-4xl text-white ml-72'>
                      <p className='ml-32'>Iglesia Santa Barabara</p> 
                   
    </Link>
      
    </div>
    </div>
    <div class="bg-cover bg-center bg-[url('/assets/gale3.jpg')] h-96 ml-4 mb-4 mr-4">
    <div className='inline-block align-middle text-amber-600 mt-36'>
    <Link
                    to="/recorridobasilica"
                    className='font-bold uppercase text-center text-3xl text-white mt-20 ml-36 mt-20'> 
                    <p>Basilica de Nuestra Señora de Chinquinquira</p>
    </Link>
      </div>
  </div>
  <div class="bg-cover bg-center bg-[url('/assets/gale4.jpg')] h-96 mb-40 mr-4" >
    <div className='inline-block align-middle text-amber-600 mt-36'>
    <Link
                    to="/recorridomuseo"
                    className='font-bold uppercase text-4xl text-white ml-72'> 
                   
                    <p className='ml-56'> Museo Urdaneta</p>
    </Link>
      
      </div>
      </div>
</div>
 





    
  {/* <iframe src="https://mellow-creponne-8ffd9c.netlify.app" width={1000} height={500} ></iframe> */}
 {/* {datos[0].attributes.name}
      <ul>
        {datos.map(({ id }) => <li key={id}>{id}</li>)}
      </ul> */}
  
 
<footer> <Footer /></footer></div>
    
    </>
  )
}

export default Recorridos