import React from "react";
import styles from "./DoctorCard.module.css";
import { Link} from "react-router-dom";
import { DOCTORDETAIL_PAGE} from '../../constants/urls'
function DoctorCard({ doctor }){
    return(
  
        <div className={styles.container}>
            <div>
                <img 
                src={doctor.photoUrl} 
                alt={doctor.name} 
                className = {styles.image}/>
            </div>
            <div className={styles.rightSide}>
                <div className={styles.minicontainer}>
                <Link to={DOCTORDETAIL_PAGE(doctor.id) } className={styles.name}>{doctor.name}</Link>
                    <h3 className={styles.subtitle}>Edad:           </h3>
                    <h3 className={styles.subtitleInfo}>{doctor.age}</h3>
                </div>
                <div className={styles.minicontainer}>
                    <h3 className={styles.subtitle}>Precio:</h3>
                    <h3 className={styles.subtitleInfo}>{doctor.price}</h3>
                </div>
                <div className={styles.minicontainer}>
                    <h3 className={styles.subtitle}>Especialidades: </h3>
                    
                    <h4 className={styles.subtitleInfo}>{doctor.degree}</h4>
                    
                </div>
            </div>
        </div>
    )
}

export default DoctorCard