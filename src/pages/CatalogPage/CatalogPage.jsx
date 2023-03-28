import MariaPerez from "../../assets/m1.jpg"
import GabrielPerez from "../../assets/h2.jpg"
import GabrielaLopez from "../../assets/m3.jpg"
import JuanCristobalMartinez from "../../assets/h4.jpg"
import MartinaGonzalez from "../../assets/m5.jpg"
import "./CatalogPage.css"
import DoctorCard from "../../components/DoctorCard/DoctorCard"
import Navbar from "../../components/NavBar/Navbar"
import {db} from "../../firebase/config"
import { collection, query, getDocs, where } from "firebase/firestore"
import { useEffect, useState } from "react"

function Catalog() {
  const [doctors, setDoctors] = useState([])
  const getDoctors = async()=>{
    let q = query(collection(db, "users") , where("job", "==", "Doctor")); 
    const snapshot = await getDocs(q);
    console.log(snapshot.docs)
    const data = snapshot.docs.map(doctor => ({
      ...doctor.data(),
      id:doctor.id
    }))
    setDoctors(data);
  }
  useEffect(()=>{getDoctors()},[])

  console.log(doctors);


  return (
    <div>

        <Navbar />

        <div className="doctores">
          {doctors.map((doctor)=> (
              <DoctorCard key={doctor.id} doctor = {doctor}/>
            ))
          }

        </div>
    </div>
  )
}

export default Catalog