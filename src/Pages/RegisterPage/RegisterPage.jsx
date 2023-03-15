import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./RegisterPage.module.css";
import {
  registerWithEmailAndPassword,
  signInWithFacebook,
  signInWithGoogle,
} from "../../firebase/auth-service";
import { LOGIN_URL, USER_PAGE } from "../../constants/urls";
function RegisterPage() {
    const navigate = useNavigate();
    const options = [
      {value: '', text: '--Choose an option--'},
      {value: "pacient", text: "Pacient"},
      {value: "doctor", text: "Doctor"},
    ];
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      uid: "",
      password: "",
      age: 0,
      photoURL: "gs://afterglow-c7ada.appspot.com/Perfil_generico.png",
      job: (options[0].value),
      degree: "",
      cv: "",
    });
  
    const handleSignWithGoogle = async () => {
      await signInWithGoogle();
      navigate(USER_PAGE);
    };
    const handleSignWithFacebook = async () => {
      await signInWithFacebook();
      navigate(USER_PAGE);
    };
  
    const handleOnChange = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const onSubmit = async (event) => {
    try{
        event.preventDefault();
        const { email, password, uid, ...extraData } = formData;
        await registerWithEmailAndPassword(email, password, uid, extraData);
        console.log("Todo salio bien")
        alert("Register complete...Enjoy!")
        navigate(USER_PAGE);
    }catch(error){
        console.log(error);
        console.log("This email is already in our DataBase")
        alert("This email is already in our DataBase, Login!!")
      }
    };
    console.log(options)
    return (
      <>
        <div className={styles.container}>
          <form className={styles.form} onSubmit={onSubmit}>
            <h1 className={styles.title}>SIGN UP!</h1>
            <p className={styles.welcomeTxt}>
              Welcome! Join us in this experience.
            </p>
            {/* Profesion field */}
            <div className={styles.inputContainer}>
              <h3 htmlFor="job">
                  Roll 
              </h3>
              <select
                name="job"
                id="job"
                onChange={handleOnChange}
                required
              >
                  {options.map(option => (
                    <option key={option.value} name={option.value}>
                      {option.text}
                    </option>
                  ))}
              </select>
            </div> 

        { formData.job === '' ?(
          <h2>Select an option to deploy the form</h2>
        ):(
          <>
              {formData.job === 'Doctor' ? (
               // {/* USERNAME FIELD */}
                 <div>
                     <div className={styles.inputContainer}>
                       <h3 htmlFor="name">
                           User Name
                       </h3>
                       <input
                         type="text"
                         name="name"
                         id="name"
                         placeholder="Ejmp. simonm2001"
                         onChange={handleOnChange}
                         required
                       />
                     </div>
              
                     {/* EMAIL FIELD */}
                     <div className={styles.inputContainer}>
                       <h3 htmlFor="email">
                           Email
                       </h3>
                       <input
                         type="email"
                         name="email"
                         id="email"
                         placeholder="Ejmp. simon@email.com"
                         onChange={handleOnChange}
                         required
                       />
                     </div>
              
                     {/* PASSWORD FIELD */}
                     <div className={styles.inputContainer}>
                       <h3 htmlFor="password">
                           Password
                       </h3>
                       <input
                         type="password"
                         name="password"
                         id="password"
                         placeholder="********"
                         onChange={handleOnChange}
                         required
                       />
                     </div>
              
                      {/* AGE FIELD */}
                     <div className={styles.inputContainer}>
                       <h3 htmlFor="age">
                           Age
                       </h3>
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
                       <h3 htmlFor="age">
                           Master's degree
                       </h3>
                       <input
                         type="text"
                         name="degree"
                         id="degree"
                         placeholder="Ejmp. Axiety"
                         onChange={handleOnChange}
                         required
                       />
                     </div>  
                     {/* CV */}
                     <div className={styles.inputContainer}>
                       <h3 htmlFor="age">
                           CV
                       </h3>
                       <input
                         type="file"
                         name="cv"
                         id="cv"
                         onChange={handleOnChange}
                         required
                       />
                     </div>           
              
                   </div>
               ):(
                 <div>
                   {/* USERNAME FIELD */}
                   <div className={styles.inputContainer}>
                     <h3 htmlFor="name">
                         User Name
                     </h3>
                     <input
                       type="text"
                       name="name"
                       id="name"
                       placeholder="Ejmp. simonm2001"
                       onChange={handleOnChange}
                       required
                     />
                   </div>
                   {/* EMAIL FIELD */}
                   <div className={styles.inputContainer}>
                     <h3 htmlFor="email">
                         Email
                     </h3>
                     <input
                       type="email"
                       name="email"
                       id="email"
                       placeholder="Ejmp. simon@email.com"
                       onChange={handleOnChange}
                       required
                     />
                   </div>
                   {/* PASSWORD FIELD */}
                   <div className={styles.inputContainer}>
                     <h3 htmlFor="password">
                         Password
                     </h3>
                     <input
                       type="password"
                       name="password"
                       id="password"
                       placeholder="********"
                       onChange={handleOnChange}
                       required
                     />
                   </div>
                    {/* AGE FIELD */}
                   <div className={styles.inputContainer}>
                     <h3 htmlFor="age">
                         Age
                     </h3>
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
  
            <button 
            type="submit" className={styles.submitBtn}>
                      SING UP!
            </button>

            <button
              type="button"
              className={styles.googleBtn}
              onClick={handleSignWithGoogle}
            >
              Register with Google
            </button>
            {/* TODO : regoster with facebook  */}
            <button
              type="button"
              className={styles.facebookBtn}
              onClick={handleSignWithFacebook}
            >
              Register with Facebook
            </button>          
  
            <Link to={LOGIN_URL} className={styles.loginRedirect}>
              ¿Already sing up?{" "}
              <span className={styles.redirectLink}>Login</span>
            </Link>
          </form>
        </div>
      </>
    );
}

export default RegisterPage

