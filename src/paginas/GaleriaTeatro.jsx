import { useState } from 'react'
import useProyectos from "../hooks/useProyectos"
import PreviewProyecto from "../components/PreviewProyecto"
import Alerta from "../components/Alerta"
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
const GaleriaTeatro = () => {
  const { proyectos, alerta } = useProyectos()
  const { msg } = alerta
  const [showModal, setShowModal] = useState(false);
  return (

    <>
    <div >
       <div> <header id="main-header"><Header /></header></div>
    
  <h1 class="text-xl text-left transform rotate-180 text-amber-500 mt-2">Galeria</h1>
  <div  class="grid grid-cols-3 gap-4 place-items-stretch mt-32 mb-32">
  
  <div   onClick={() => setShowModal(true)} className="bg-cover bg-[url('/assets/teatro/1.jpg')] h-96 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  "></div>
  <div className="bg-cover bg-[url('/assets/teatro/2.jpg')]  h-96 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  "><img class=" object-fill w-52 h-68 object-contain "  /></div>
  <div className="bg-cover bg-[url('/assets/teatro/3.jpg')] h-96 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  "><img class=" object-fill w-52 h-68 object-contain "  /></div>
  <div className="bg-cover bg-[url('/assets/teatro/4.jpg')] h-96 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  "><img class=" object-fill w-52 h-68 object-contain "  /></div>
  <div className="bg-cover bg-[url('/assets/teatro/5.jpg')] h-96 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  "><img class=" object-fill w-52 h-68 object-contain "  /></div>
  <div className="bg-cover bg-[url('/assets/teatro/6.jpg')] h-96 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  "><img class=" object-fill w-52 h-68 object-contain "  /></div>
  <div className="bg-cover bg-[url('/assets/teatro/7.jpg')] h-96 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  "><img class=" object-fill w-52 h-68 object-contain "  /></div>
  <div className="bg-cover bg-[url('/assets/teatro/8.jpg')] h-96 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  "><img class=" object-fill w-52 h-68 object-contain "  /></div>
  <div className="bg-cover bg-[url('/assets/teatro/9.jpg')] h-96 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  "><img class=" object-fill w-52 h-68 object-contain "  /></div>

  
  
</div>
</div>
<button
        className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Fill Details
      </button>
      {showModal ? (
        <>
          <div onClick={() => setShowModal(false)} className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
       
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-96"
      >
        <SwiperSlide><img class="w-full h-96" src="/assets/Banner1.jpg" /></SwiperSlide>
        <SwiperSlide><img class="w-full h-96" src="/assets/Banner2.jpg" /></SwiperSlide>
        <SwiperSlide><img class="w-full h-96" src="/assets/Banner3.jpg" /></SwiperSlide>

      </Swiper>
          </div>
        </>
      ) : null}



<footer className='bottom-0'> <Footer /></footer>
    
    </>
  )
}

export default GaleriaTeatro