import { useEffect } from 'react'
import useProyectos from "../hooks/useProyectos"
import PreviewProyecto from "../components/PreviewProyecto"
import Alerta from "../components/Alerta"
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
const NoticiasTeatro = () => {
  const { proyectos, alerta } = useProyectos()
  const { msg } = alerta

  return (

    <>
    <div>
       <div> <header id="main-header"><Header /></header></div>
      
       <div class="grid   mt-20">
  
       <img class="w-full h-28" src="/assets/noticia franja.jpg" />
</div>
    {/* <div className="">
    <img class="h-96 w-full" src="/assets/Noticia.jpg" />
      </div> */}

      <div class="grid grid-cols-2  mt-20">
  
  <div class="bg-cover bg-center bg-[url('/assets/noticia2.jpg')] h-96 w-3/4 ml-28">
    <div className='inline-block align-middle text-amber-600 mt-80'>
   
      </div>
  </div>
  <div> <h3 className='font-bold uppercase text-4xl text-amber-600'>Recorrido dentro del Teatro Baralt</h3> 
        <p className='text-sky-600'>Conoce las intalaciones de este emblematico lugar
         Dia:12/01/2023 Hora:10:00am  
         </p> 
         <p className='mt-5'>
         Etiam maximus blandit purus ut lacinia. Vivamus condimentum pretium tortor vitae pellentesque. Aliquam tempus molestie pellentesque. Pellentesque felis nunc, efficitur ut malesuada id, dapibus id metus. Suspendisse suscipit pellentesque enim, tincidunt molestie orci commodo non. Cras purus lacus, faucibus nec nisi et, hendrerit euismod massa. Nam pretium, velit eu pretium consequat, neque mi condimentum nibh, vitae maximus ex neque et lectus. Sed rutrum tincidunt justo varius congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Sed hendrerit sapien id urna bibendum, non fringilla quam facilisis. Cras tincidunt odio dui, quis commodo augue luctus condimentum. Mauris ut nulla quis felis semper sodales. Phasellus commodo placerat metus, et suscipit augue elementum et. Phasellus eleifend odio in purus posuere porta.

Nulla id quam at risus tincidunt porttitor id in lorem. Aliquam non pretium risus, nec consectetur magna. Suspendisse rhoncus ornare pulvinar. Praesent mauris libero, tempor vel interdum ac, ultricies vel lacus. Nulla facilisi. Nullam eget odio est. Phasellus porttitor tristique fermentum.

Nullam iaculis urna id luctus molestie. Aliquam erat volutpat. Integer id lorem id ante aliquam dictum a non nibh. Curabitur fringilla ante vitae justo pretium, nec scelerisque nisi egestas. Duis eget mi odio. Sed sagittis metus eget ipsum luctus commodo. Nunc ac massa dignissim, tincidunt nisl nec, facilisis nulla. Ut ullamcorper erat ac quam rutrum, lobortis tristique est posuere. In aliquam mattis ipsum, sit amet aliquet nisl fringilla id.
         </p>
         
         </div>
  
  
</div>
       

  
  
<footer> <Footer /></footer></div>
    
    </>
  )
}

export default NoticiasTeatro