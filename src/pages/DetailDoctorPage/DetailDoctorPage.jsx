import React from 'react';
import MariaPerez from "../../assets/M3.jpg"
import BgDoctor from "../../assets/BGDOCTOR.jpg"
import { Link} from "react-router-dom";
import {CATALOG_PAGE} from "../../constants/urls";
import { useState, useEffect } from 'react';
const doctores = {
      nombre: "Maria Perez",
      age: "35",
      price: "25",
      specialties: ["Depresion", "Ansiedad"],
      overview:"Te ayudo a combatircualquier porblema que tengas contactame",
      image: MariaPerez
    }
    
    

export default function DetailDoctorPage() {
  return (
    <div className=" p-10 bg-opacity-50  md:w-screen md:h-screen" style={{
        background: {BgDoctor},
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition:"center",
        }}>
        <div className="h-full w-full  flex items-center justify-center bg-teal-100 bg-opacity-60">
          <div className="block bg-transparent mx-auto mt-10 max-w-2xl sm:px-0.5 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <img
                src={doctores.image}
                alt={doctores.nombre} 
                className="w-auto h-auto object-fill object-top mt-0  md:w-auto md:h-auto"
                />
            <div className="block bg-transparent md:block lg:block justify-start ">
                <div className="bg-transparent mt-0 pl-5 lg:row-span-3 lg:mt-0">
                  <h1 className="bg-transparent text-2xl font-bold tracking-tight text-black sm:text-5xl">{doctores.nombre}</h1>
                </div>
                <div className="bg-transparent ml-4 block md:flex flex-col md:flex-row justify-start md:justify-between items-center mt-0 lg:flex-row lg:justify-start lg:row-span-3 lg:mt-4">
                   <span className="bg-transparent inline-block flex-row md:inline-flex text-sm md:text-xl tracking-tight text-black whitespace-nowrap mb-2 sm:mb-0 uppercase">{doctores.age} años</span> 
                </div> 
                <div className="bg-transparent block mt-0 md:mt-7">
                    <h2 className="bg-transparent ml-4 text-md md:text-lg font-medium text-black mb-0">PRECIO</h2>
                    <p className="bg-transparent ml-4 text-sm md:text-lg font-medium text-black">{doctores.price} $</p>  
                </div>   
                <div className="bg-transparent relative mt-0 md:mt-0 py-4 pl-4 italic">
                  <h2 className="bg-transparent text-md md:text-lg font-medium text-black">ESPECIALIDADES</h2>
                  <p className="bg-transparent text-sm md:text-md font-medium text-black"> {doctores.specialties.join(', ')} </p>
                </div > 
                <div className="bg-transparent md:bg-transparent lg:bg-transparent  mt-0 md:mr-10  pl-4 italic">
                  <h2 className="bg-transparent text-md md:text-lg font-medium text-black">OVERVIEW</h2>
                  <p className='bg-transparent text-sm md:text-md whitespace-normal text-black'>{doctores.overview}</p>
                </div>
                
                <div className="bg-transparent flex justify-center items-center mt-5 mb-3 md:justify-center">
                    <button className="bg-teal-400 hover:bg-gray-600 text-black font-bold py-2 px-1 rounded">
                        Agendar Cita
                    </button> 
                </div>
                <div className="bg-transparent flex justify-center items-center mt-5 mb-3 md:justify-center">
                    <button className="bg-teal-400 hover:bg-gray-600 text-black font-bold py-2 px-1 rounded">
                        <Link to={CATALOG_PAGE} className="bg-transparent">Regresar</Link>
                    </button> 
                </div>           
           
          </div>
          </div>
        </div>
      </div>
  )
}
