import React from "react";
import styles from "./DoctorCard.module.css";

function DoctorCard({ doctor }){
    return(
  
        <div className={styles.container}>
            <div>
                <img 
                src={doctor.image} 
                alt={doctor.name} 
                className = {styles.image}/>
            </div>
            <div className={styles.rightSide}>
                <div className={styles.minicontainer}>
                <h2 className={styles.name}>{doctor.name}</h2>
                    <h3 className={styles.subtitle}>Edad:           </h3>
                    <h3 className={styles.subtitleInfo}>{doctor.age}</h3>
                </div>
                <div className={styles.minicontainer}>
                    <h3 className={styles.subtitle}>Precio:</h3>
                    <h3 className={styles.subtitleInfo}>{doctor.price}</h3>
                </div>
                <div className={styles.minicontainer}>
                    <h3 className={styles.subtitle}>Especialidades: </h3>
                    {doctor.specialties.map((specialty)=>
                    <h4 className={styles.subtitleInfo}>{specialty}</h4>
                    )}
                </div>
            </div>
        </div>
    )
}

export default DoctorCard