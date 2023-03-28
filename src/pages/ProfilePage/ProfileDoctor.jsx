import React from 'react'
import styles from './ProfileDoctor.module.css'
import { useState } from 'react'

function ProfileDoctor() {
    const [datos,setDatos] = useState(0)
    return (
        <div>
            <div>
                <h1 className={styles.title}>TU PERFIL, DOCTOR</h1>
                <rect className={styles.rectangleMain}></rect>
            </div>
            <div className="Datos">
                <img className={styles.profileImage} src="{perfil}" alt="Imagen de perfil"></img> 
                <div className="datosEscritos">
                    <form className='form'>
                        <div className={styles.rectangleData} id='name'>
                            <button placeholder='Nombre: '/> 
                            <label className="m-2 font-bold">Nombre: </label>
                            <input className="m-2 input p-1 input" type="text"></input>
                        </div>
                        <div className={styles.rectangleData} id='lastname'>
                            <button placeholder='Apellido: '/> 
                            <label className="m-2 font-bold">Apellido: </label>
                            <input className="m-2 input p-1 input" type="text"></input>
                        </div>
                        <div className={styles.rectangleData} id='age'>
                            <button placeholder='Edad: '/>
                            <label className="m-2 font-bold">Edad: </label>
                            <input className="m-2 input p-1 input" type="number"></input>
                        </div>
                        <div className={styles.rectangleData} id='e-mail'>
                            <button placeholder='Correo electronico: '/>
                            <label className="m-2 font-bold">Correo electrónico: </label>
                            <input className="m-2 input p-1 input" type="email"></input>
                        </div>
                        <div className={styles.rectangleData} id='phoneNumber'>
                            <button placeholder='Numero telefonico: '/>
                            <label className="m-2 font-bold">Número telefónico: </label>
                            <input className="m-2 input p-1 input" type="number"></input>
                        </div>
                        <div className={styles.rectangleData} id='price'>
                            <button placeholder='Precio: '/>
                            <label className="m-2 font-bold">Precio ($): </label>
                            <input className="m-2 input p-1 input" type="number"></input>
                        </div>
                        <div className={styles.rectangleData} id='specialities'>
                            <button placeholder='Especialidades: '/>
                            <label className="m-2 font-bold">Especialidades: </label>
                            <input className="m-2 input p-1 input" type="text"></input>
                        </div>
                        <button
                            className="bg-blue-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4"
                            type="submit"
                            >
                            Guardar Cambios
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}



export default ProfileDoctor