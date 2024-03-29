import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./RegisterPage.module.css";
import {
  registerWithEmailAndPassword,
  signInWithFacebook,
  signInWithGoogle,
} from "../../firebase/auth-service";
import { LOGIN_URL, REGISTER_URL2, USER_PAGE } from "../../constants/urls";

function RegisterPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photoURL: "https://firebasestorage.googleapis.com/v0/b/afterglow-c7ada.appspot.com/o/Perfil_generico.png?alt=media&token=8be56578-f784-4935-b95b-62a3d3759748",
  });

  const handleSignWithGoogle = async () => {
    try {
      var regis = await signInWithGoogle();
      console.log(regis);
      if (regis !== null && regis !== undefined) {
        if (regis == "registered") {
          alert("Usuario existente, ingresando...")
          navigate(USER_PAGE);
        } else {
          navigate(REGISTER_URL2, { state: regis });
        }
      } else {
        alert("Oops, Google no pudo procesar tu pedido");
      }
    } catch (error) {
      alert("Oops, Google no pudo procesar tu pedido");
      console.log(error);
    }
  };
  const handleSignWithFacebook = async () => {
    try {
      var regis = await signInWithFacebook();
      console.log(regis);
      if (regis !== null && regis !== undefined) {
        if (regis == "registered") {
          navigate(USER_PAGE);
        } else {
          navigate(REGISTER_URL2, { state: regis });
        }
      } else {
        alert("Oops, Facebook no pudo procesar tu pedido");
      }
    } catch (error) {
      alert("Oops, Facebook no pudo procesar tu pedido");
      console.log(error);
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
    try {
      event.preventDefault();
      const { name, email, password, photoURL } = formData;
      var regis = await registerWithEmailAndPassword(
        name,
        email,
        password,
        photoURL
      );
      console.log(regis);
      if (regis !== null && regis !== undefined) {
        if (regis == "registered") {
          alert("Usuario ya existente, por favor vaya a Login");
        } else {
          navigate(REGISTER_URL2, { state: regis });
        }
      } else {
        alert("Oops, hubo un problema, intente más tarde");
      }
    } catch (error) {
      console.log(error);
      console.log("Este usuario se encuentra en nuestra base de datos!");
      alert("Este email ya se encuentra en nuestra base de datos, Login!!");
    }
  };
  return (
    <>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={onSubmit}>
          <h1 className={styles.title}>SIGN UP!</h1>
          <p className={styles.welcomeTxt}>
            Bienvenidos! Unanse esta experiencia.
          </p>
          {/* USERNAME FIELD */}
          <div>
            <div className={styles.inputContainer}>
              <h3 htmlFor="name">Nombre de Usuario</h3>
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
              <h3 htmlFor="email">Email</h3>
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
              <h3 htmlFor="password">Contraseña</h3>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="********"
                onChange={handleOnChange}
                required
              />
            </div>
          </div>

          <button type="submit" className={styles.submitBtn}>
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
            ¿Already sing up? <span className={styles.redirectLink}>Login</span>
          </Link>
        </form>
      </div>
    </>
  );
}

export default RegisterPage;
