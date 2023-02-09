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





const RecorridoTeatro = () => {
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
    <div> <header id="main-header"><Header /></header></div>
       <div className='bg-amber-600'>
         <div className='h-20'></div> 
       <div className='h-full'>
       <h1 className='text-white uppercase text-4xl text-center text-4xl font-["Rumble_Brave"] mt-4'>Teatro Baralat</h1>
       </div>
       
    
          
       <div class="grid justify-items-center mt-20">
  <div><iframe className='' src="https://thunderous-hamster-a039be.netlify.app" width={1000} height={400} allowfullscreen="true"></iframe> </div>

</div>
  

 





    
  
 {/* {datos[0].attributes.name}
      <ul>
        {datos.map(({ id }) => <li key={id}>{id}</li>)}
      </ul> */}
  <div className='h-96'></div>
  </div>
<footer> <Footer /></footer>
    
    </>
  )
}

export default RecorridoTeatro