import React from 'react';
import { Link} from "react-router-dom";
import { useParams } from 'react-router-dom';
import {CATALOG_PAGE, APPOINTMENTS_PAGE} from "../../constants/urls";
import { useState, useEffect } from 'react';
import { getDoc, doc} from 'firebase/firestore';
import {db} from "../../firebase/config"
import AppointmentsPage from '../AppointmentsPage/AppointmentsPage';


export default function DetailDoctorPage() {
  const {doctorId} = useParams();
  const [doctor, setDoctor] = useState({})
  const getDoctor = async()=>{
    const doctorRef = doc(db, "users", doctorId);
    const info = await getDoc(doctorRef);
    setDoctor({ ...info.data(), id: info.id})
    }  
    console.log(doctorId)
  
  useEffect(()=>{getDoctor()},[])
  const {
    age,
    degree,
    name,
    price,
    photoURL,
    slogan,
  }= doctor || {};
  
  return (
    <div className=" p-10 bg-opacity-50 w-screen h-screen md:w-screen md:h-screen" style={{
        background: 'url("/BGDOCTOR.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition:"center",
        }}>
        <div className="h-full w-full  flex items-center justify-center bg-teal-100 bg-opacity-60">
          <div className="block bg-transparent mx-auto mt-10 max-w-2xl sm:px-0.5 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <img
                src={photoURL} 
                alt={name} 
                className="w-auto h-auto object-fill object-top mt-0  md:w-auto md:h-auto"
                />
            <div className="block bg-transparent md:block lg:block justify-start ">
                <div className="bg-transparent mt-0 pl-5 lg:row-span-3 lg:mt-0">
                  <h1 className="bg-transparent text-2xl font-bold tracking-tight text-black sm:text-5xl">{name}</h1>
                </div>
                <div className="bg-transparent block mt-0 md:mt-7">
                  <h2 className="bg-transparent ml-4 text-md md:text-lg font-medium text-black mb-0">EDAD</h2>
                  <p className="bg-transparent ml-4 text-sm md:text-lg font-medium text-black">{age} AÑOS</p>  
                </div> 
                <div className="bg-transparent block mt-0 md:mt-7">
                  <h2 className="bg-transparent ml-4 text-md md:text-lg font-medium text-black mb-0">PRECIO</h2>
                  <p className="bg-transparent ml-4 text-sm md:text-lg font-medium text-black">{price} $</p>  
                </div>   
                <div className="bg-transparent relative mt-0 md:mt-0 py-4 pl-4 italic">
                  <h2 className="bg-transparent text-md md:text-lg font-medium text-black">ESPECIALIDADES</h2>
                  <p className="bg-transparent text-sm md:text-md font-medium text-black"> {degree} </p>
                </div > 
                <div className="bg-transparent md:bg-transparent lg:bg-transparent  mt-0 md:mr-10  pl-4 italic">
                  <h2 className="bg-transparent text-md md:text-lg font-medium text-black">SLOGAN</h2>
                  <p className='bg-transparent text-sm md:text-md whitespace-normal text-black'>{slogan}</p>
                </div>
                
                <div className="bg-transparent flex justify-center items-center mt-5 mb-3 md:justify-center">
                    <button className="bg-teal-400 hover:bg-gray-600 text-black font-bold py-2 px-1 rounded">
                      <Link to={APPOINTMENTS_PAGE} state={{name, price, photoURL}} className="bg-transparent">Agendar Cita</Link>
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
