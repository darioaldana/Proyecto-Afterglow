import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./RegisterPage.module.css";
import {
  register_pt2,
} from "../../firebase/auth-service";
import { USER_PAGE } from "../../constants/urls";

function RegisterPage2() {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  const options = [
    { value: "", text: "--Choose an option--" },
    { value: "pacient", text: "Pacient" },
    { value: "doctor", text: "Doctor" },
  ];
  const [formData, setFormData] = useState({
    name: data[1],
    email: data[0],
    uid: data[2],
    age: 0,
    photoURL: data[3],
    job: options[0].value,
    degree: "",
    cv: "",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async (event) => {
    try {
      event.preventDefault();
      const { email, uid, ...extraData } = formData;
      if (Number.parseInt(formData.age) <= 0) {
        alert('Edad invalida!')
        return;
      }
      var archivoRuta = formData.cv
      const regex = /(.pdf)$/;
      if(formData.job=='Doctor'){
        if (!regex.test(archivoRuta)){
          alert('No se acepta este tipo de archivo, asegurate que el archivo seleccionado sea PDF!');
          return;
        }
      }
      await register_pt2(email, uid, extraData);
      console.log("Todo salio bien");
      alert("Register complete...Enjoy!");
      navigate(USER_PAGE);
      window.location.reload(false);
    } catch (error) {
      console.log(error);
      console.log("This email is already in our DataBase");
      alert("This email is already in our DataBase, Login!!");
    }
  };
  return (
    <>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={onSubmit}>
          <h1 className={styles.title}>Terminemos tu registro!!</h1>
          {/* Profesion field */}
          <div className={styles.inputContainer}>
            <h3 htmlFor="job">Roll</h3>
            <select name="job" id="job" onChange={handleOnChange} required>
              {options.map((option) => (
                <option key={option.value} name={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
          </div>

          {formData.job === "" ? (
            <h2>Select an option to deploy the form</h2>
          ) : (
            <>
              {formData.job === "Doctor" ? (
                // {/* USERNAME FIELD */}
                <div>
                  {/* AGE FIELD */}
                  <div className={styles.inputContainer}>
                    <h3 htmlFor="age">Age</h3>
                    <input
                      type="number"
                      name="age"
                      id="age"
                      placeholder="Ejmp. 24"
                      onChange={handleOnChange}
                      required
                    />
                  </div>
                  {/* master's degree */}
                  <div className={styles.inputContainer}>
                    <h3 htmlFor="age">Master's degree</h3>
                    <input
                      type="text"
                      name="degree"
                      id="degree"
                      placeholder="Ejmp. Anxiety"
                      onChange={handleOnChange}
                      required
                    />
                  </div>
                  {/* CV */}
                  <div className={styles.inputContainer}>
                    <h3 htmlFor="age">CV</h3>
                    <input
                      type="file"
                      name="cv"
                      id="cv"
                      onChange={handleOnChange}
                      required
                    />
                  </div>
                </div>
              ) : (
                <div>
                  {/* AGE FIELD */}
                  <div className={styles.inputContainer}>
                    <h3 htmlFor="age">Age</h3>
                    <input
                      type="number"
                      name="age"
                      id="age"
                      placeholder="Ejmp. 24"
                      onChange={handleOnChange}
                      required
                    />
                  </div>
                </div>
              )}
            </>
          )}

          <button type="submit" className={styles.submitBtn}>
            SING UP!
          </button>
        </form>
      </div>
    </>
  );
}

export default RegisterPage2;