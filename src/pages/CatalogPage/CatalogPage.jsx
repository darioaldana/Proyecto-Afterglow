import MariaPerez from "../../assets/m1.jpg";
import GabrielPerez from "../../assets/h2.jpg";
import GabrielaLopez from "../../assets/m3.jpg";
import JuanCristobalMartinez from "../../assets/h4.jpg";
import MartinaGonzalez from "../../assets/m5.jpg";
import "./CatalogPage.css";
import DoctorCard from "../../components/DoctorCard/DoctorCard";
// import Navbar from "../../components/NavBar/Navbar"

function Catalog() {
  const doctores = [
    {
      name: "Maria Perez",
      age: "35",
      price: "25$",
      specialties: ["Depresion", "Ansiedad"],
      image: MariaPerez,
    },
    {
      name: "Gabriel Perez",
      age: "39",
      price: "30$",
      specialties: ["Trastornos Alimenticios", "Trastornos de la personalidad"],
      image: GabrielPerez,
    },
    {
      name: "Gabriela Lopez",
      age: "29",
      price: "40$",
      specialties: ["Deportes", "Trabajo en equipo"],
      image: GabrielaLopez,
    },
    {
      name: "Juan Martinez",
      age: "37",
      price: "35$",
      specialties: ["Psicoanalisis"],
      image: JuanCristobalMartinez,
    },
    {
      name: "Martina Gonzalez",
      age: "38",
      price: "20$",
      specialties: ["Coaching", "Depresion"],
      image: MartinaGonzalez,
    },
  ];

  console.log(doctores);

  return (
    <div>
      <div className="doctores">
        {doctores.map((doctor) => (
          <>
            <DoctorCard doctor={doctor} />
          </>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
