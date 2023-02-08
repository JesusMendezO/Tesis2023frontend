import { useEffect } from 'react'
import useProyectos from "../hooks/useProyectos"
import PreviewProyecto from "../components/PreviewProyecto"
import Alerta from "../components/Alerta"
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from 'react-router-dom'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const Inicio = () => {
  const { proyectos, alerta } = useProyectos()
  const { msg } = alerta

  return (
    <>
     <header id="main-header"><Header /></header>
     <hr className='height:100vh width:.5vw '></hr>   
                 
       
        <div className='mt-20 h9-6 '>
        <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
       
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-96 z-0"
      >
        <SwiperSlide><img class="w-full h-96" src="/assets/Banner1.jpg" /></SwiperSlide>
        <SwiperSlide><img class="w-full h-96" src="/assets/Banner2.jpg" /></SwiperSlide>
        <SwiperSlide><img class="w-full h-96" src="/assets/Banner3.jpg" /></SwiperSlide>

      </Swiper>
        </div>
        <div className='mt-10'> <Link
                    to="/noticias"
                    className=''
                ><img class="w-35 h-24" src="/assets/noticia.jpg" /></Link> 
        <Swiper
        
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
       
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper -left-64 w-3/5 h-96 mt-10"
      >
        <SwiperSlide><img class="w-full h-68" src="/assets/noticia1.jpg" /></SwiperSlide>
        <SwiperSlide><img class="w-full h-68" src="/assets/notici2.jpg" /></SwiperSlide>
        <SwiperSlide><img class="w-full h-68" src="/assets/noticia3.jpg" /></SwiperSlide>

      </Swiper>
        
        
        </div>
        <div class="grid grid-cols-2 gap-4 mt-20">
  <div class="grid grid-cols-2 gap-4">
  
  <div class="ml-4"><img class="w-full h-68" src="/assets/Galeria3.png" /></div>
  <div class=""><img class="w-full h-68 mt-4" src="/assets/Galeria1.png" /></div>
  <div class="ml-4 h-60 mb-32"><img class=" h-68 w-full -mt-36 " src="/assets/Galeria2.png" /></div>
  <div class=""><img class="w-full h-80" src="/assets/Galeria4.png" /></div>
  

  </div>


  <div class="..."><Link
                    to="/galerias"
                    className=''
                ><img class="w-96 h-80 mt-80 ml-32" src="/assets/titulogaleria.jpg" /></Link> </div>
  
</div>
<div class="grid place-items-center"><img class="w-96 h-48 mt-10 " src="/assets/titulocosas.jpg" /></div>
<div class="grid grid-cols-2 gap-4 mb-20">
  <div class="grid place-items-center mb-10 ">
  <iframe className='h-80 w-96' src='https://www.youtube.com/embed/H7YPPTReK6c'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
/>
  </div >
  <div className='grid place-items-center mb-10 '>
  <iframe className='h-80 w-96' src='https://www.youtube.com/embed/H7YPPTReK6c'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
/>
  </div>
</div>
        <footer className='mt-4'> <Footer /></footer>
    </>
  )
}

export default Inicio