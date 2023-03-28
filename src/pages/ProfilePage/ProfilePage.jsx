import React from "react";
import styles from "./ProfilePage.module.css";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

function ProfilePacient() {
  const { currentUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: currentUser.name,
    email: currentUser.email,
    uid: currentUser.uid,
    age: currentUser.age,
    photoURL: currentUser.photoURL,
    job: currentUser.job,
    degree: currentUser.degree,
    cv: currentUser.cv,
    price: currentUser.price,
    slogan: currentUser.slogan,
  });

  const updateProfileDoc = async () => {
    try {
      const dataRef = doc(db, "users", formData.uid);
      await updateDoc(dataRef, {
        name: formData.name,
        email: formData.email,
        uid: formData.uid,
        age: formData.age,
        photoURL: formData.photoURL,
        job: formData.job,
        degree: formData.degree,
        cv: formData.cv,
        price: formData.price,
        slogan: formData.slogan,
      });

      alert("Actualización de datos exitosa");
      location.reload();
    } catch (error) {
      alert(
        "No podemos actualizar su perfil en estos momentos, intente más tarde"
      );
    }
  };
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (
      JSON.stringify(formData.name) !== "" &&
      JSON.stringify(formData.email) !== "" &&
      JSON.stringify(formData.age) !== "" &&
      currentUser.job == "Pacient"
    ) {
      updateProfileDoc();
    } else if (
      JSON.stringify(formData.name) !== "" &&
      JSON.stringify(formData.email) !== "" &&
      JSON.stringify(formData.age) !== "" &&
      JSON.stringify(formData.degree) !== "" &&
      JSON.stringify(formData.price) !== "" &&
      JSON.stringify(formData.slogan) !== "" &&
      currentUser.job == "Doctor"
    ) {
      updateProfileDoc();
    } else {
      alert("No puede dejar campos vacíos!!");
    }
  };

  if (currentUser.job == "Pacient") {
    return (
      <div className="h-screen flex items-center justify-center flex-col">
        <div className="Datos h-32"></div>
        <div className="Datos h-screen w-full flex items-center justify-center">
          <div className="flex-1 h-full items-center justify-center">
            <img
              className="rounded-full object-cover h-96 w-96 bg-turquesa-1 m-auto mt-8 border-2 border-solid border-black"
              src={`${currentUser.photoURL}`}
              alt="Imagen de perfil"
            ></img>
          </div>
          <div className="flex-1 h-full">
            <form className="form">
              <h1 className="text-4xl font-bold mt-5">UPDATE PROFILE</h1>
              <div className={styles.rectangleData} id="name">
                <button placeholder="Nombre: " />
                <label className="m-2 font-bold">Usuario: </label>
                <input
                  className="m-2 input p-1 input"
                  name="name"
                  type="text"
                  onChange={handleOnChange}
                  value={formData.name}
                  required
                ></input>
              </div>
              <div className={styles.rectangleData} id="age">
                <button placeholder="Edad: " />
                <label className="m-2 font-bold">Edad: </label>
                <input
                  className="m-2 input p-1 input"
                  name="age"
                  type="number"
                  onChange={handleOnChange}
                  value={formData.age}
                  required
                ></input>
              </div>
              <div className={styles.rectangleData} id="e-mail">
                <button placeholder="Correo electronico: " />
                <label className="m-2 font-bold">Correo electrónico: </label>
                <input
                  className="m-2 input p-1 input"
                  name="email"
                  type="email"
                  onChange={handleOnChange}
                  value={formData.email}
                  readOnly
                ></input>
              </div>
              <button
                className="bg-blue-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={onSubmit}
              >
                Guardar cambios
              </button>
            </form>
          </div>
          <div className="flex-1 h-full">
            <form className="form">
              <h1 className="text-4xl font-bold mt-5">CURRENT PROFILE</h1>
              <div className={styles.rectangleData} id="name">
                <button placeholder="Nombre: " />
                <label className="m-2 font-bold">Usuario: </label>
                <input
                  className="m-2 input p-1 input"
                  type="text"
                  onChange={handleOnChange}
                  value={currentUser.name}
                  disabled
                ></input>
              </div>
              <div className={styles.rectangleData} id="age">
                <button placeholder="Edad: " />
                <label className="m-2 font-bold">Edad: </label>
                <input
                  className="m-2 input p-1 input"
                  type="number"
                  onChange={handleOnChange}
                  value={currentUser.age}
                  disabled
                ></input>
              </div>
              <div className={styles.rectangleData} id="e-mail">
                <button placeholder="Correo electronico: " />
                <label className="m-2 font-bold">Correo electrónico: </label>
                <input
                  className="m-2 input p-1 input"
                  type="email"
                  onChange={handleOnChange}
                  value={currentUser.email}
                  disabled
                ></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="h-screen flex items-center justify-center flex-col">
        <div className="Datos h-32"></div>
        <div className="Datos h-screen w-full flex items-center justify-center">
          <div className="flex-1 h-full items-center justify-center">
            <img
              className="rounded-full object-cover h-96 w-96 bg-turquesa-1 m-auto mt-8 border-2 border-solid border-black"
              src={`${currentUser.photoURL}`}
              alt="Imagen de perfil"
            ></img>
          </div>
          <div className="flex-1 h-full">
            <form className="form">
              <h1 className="text-4xl font-bold mt-5">UPDATE PROFILE</h1>
              <div className={styles.rectangleData} id="name">
                <button placeholder="Nombre: " />
                <label className="m-2 font-bold">Usuario: </label>
                <input
                  className="m-2 input p-1 input"
                  name="name"
                  type="text"
                  onChange={handleOnChange}
                  value={formData.name}
                  required
                ></input>
              </div>
              <div className={styles.rectangleData} id="age">
                <button placeholder="Edad: " />
                <label className="m-2 font-bold">Edad: </label>
                <input
                  className="m-2 input p-1 input"
                  name="age"
                  type="number"
                  onChange={handleOnChange}
                  value={formData.age}
                  required
                ></input>
              </div>
              <div className={styles.rectangleData} id="e-mail">
                <button placeholder="Correo electronico: " />
                <label className="m-2 font-bold">Correo electrónico: </label>
                <input
                  className="m-2 input p-1 input"
                  name="email"
                  type="email"
                  onChange={handleOnChange}
                  value={formData.email}
                  readOnly
                ></input>
              </div>
              <div className={styles.rectangleData} id="degree">
                <button placeholder="Especialidad: " />
                <label className="m-2 font-bold">Usuario: </label>
                <input
                  className="m-2 input p-1 input"
                  name="degree"
                  type="text"
                  onChange={handleOnChange}
                  value={formData.degree}
                  required
                ></input>
              </div>
              <div className={styles.rectangleData} id="price">
                <button placeholder="Precio de consulta: " />
                <label className="m-2 font-bold">Edad: </label>
                <input
                  className="m-2 input p-1 input"
                  name="price"
                  type="number"
                  onChange={handleOnChange}
                  value={formData.price}
                  required
                ></input>
              </div>
              <div className={styles.rectangleData} id="slogan">
                <button placeholder="Correo electronico: " />
                <label className="m-2 font-bold">Correo electrónico: </label>
                <input
                  className="m-2 input p-1 input"
                  name="slogan"
                  type="text"
                  onChange={handleOnChange}
                  value={formData.slogan}
                  required
                ></input>
              </div>
              <button
                className="bg-blue-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={onSubmit}
              >
                Guardar cambios
              </button>
            </form>
          </div>
          <div className="flex-1 h-full">
            <form className="form">
              <h1 className="text-4xl font-bold mt-5">CURRENT PROFILE</h1>
              <div className={styles.rectangleData} id="name">
                <button placeholder="Nombre: " />
                <label className="m-2 font-bold">Usuario: </label>
                <input
                  className="m-2 input p-1 input"
                  type="text"
                  value={currentUser.name}
                  disabled
                ></input>
              </div>
              <div className={styles.rectangleData} id="age">
                <button placeholder="Edad: " />
                <label className="m-2 font-bold">Edad: </label>
                <input
                  className="m-2 input p-1 input"
                  type="number"
                  value={currentUser.age}
                  disabled
                ></input>
              </div>
              <div className={styles.rectangleData} id="e-mail">
                <button placeholder="Correo electronico: " />
                <label className="m-2 font-bold">Correo electrónico: </label>
                <input
                  className="m-2 input p-1 input"
                  type="email"
                  value={currentUser.email}
                  disabled
                ></input>
              </div>
              <div className={styles.rectangleData} id="degree">
                <button placeholder="Especialidad: " />
                <label className="m-2 font-bold">Usuario: </label>
                <input
                  className="m-2 input p-1 input"
                  type="text"
                  value={currentUser.degree}
                  disabled
                ></input>
              </div>
              <div className={styles.rectangleData} id="price">
                <button placeholder="Precio de consulta: " />
                <label className="m-2 font-bold">Edad: </label>
                <input
                  className="m-2 input p-1 input"
                  type="number"
                  value={currentUser.price}
                  disabled
                ></input>
              </div>
              <div className={styles.rectangleData} id="slogan">
                <button placeholder="Correo electronico: " />
                <label className="m-2 font-bold">Correo electrónico: </label>
                <input
                  className="m-2 input p-1 input"
                  type="text"
                  value={currentUser.slogan}
                  disabled
                ></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePacient;
