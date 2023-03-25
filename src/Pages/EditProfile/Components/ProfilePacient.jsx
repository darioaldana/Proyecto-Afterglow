import React from 'react'
import styles from './ProfileDoctor.module.css'
import { useState } from 'react'

function ProfilePacient() {
    const [datos,setDatos] = useState(0)
    return (
        <div>
            <div>
                <h1 className={styles.title}>TU PERFIL, PACIENTE</h1>
                <rect className={styles.rectangleMain}></rect>
            </div>
            <div className="Datos">
                <img className={styles.profileImage} src="{perfil}" alt="Imagen de perfil"></img> 
                <div className="datosEscritos">
                    <form>
                        <div className={styles.rectangleData} id='name'>
                            <button placeholder='Nombre: '/> 
                            <label className="m-2 font-bold">Nombre: </label>
                            <input className="m-2 input p-1" type="text"></input>
                        </div>
                        <div className={styles.rectangleData} id='lastname'>
                            <button placeholder='Apellido: '/> 
                            <label className="m-2 font-bold">Apellido: </label>
                            <input className="m-2 input p-1" type="text"></input>
                        </div>
                        <div className={styles.rectangleData} id='age'>
                            <button placeholder='Edad: '/>
                            <label className="m-2 font-bold">Edad: </label>
                            <input className="m-2 input p-1" type="number"></input>
                        </div>
                        <div className={styles.rectangleData} id='e-mail'>
                            <button placeholder='Correo electronico: '/>
                            <label className="m-2 font-bold">Correo electrónico: </label>
                            <input className="m-2 input p-1" type="email"></input>
                        </div>
                        <div className={styles.rectangleData} id='phoneNumber'>
                            <button placeholder='Numero telefonico: '/>
                            <label className="m-2 font-bold">Número telefónico: </label>
                            <input className="m-2 input p-1" type="number"></input>
                        </div>
                        <button
                            className="bg-blue-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4"
                            type="submit"
                            >
                            Guardar cambios
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}



export default ProfilePacient