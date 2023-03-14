// TODOS LOS METODOS DE AUTENTICACION

import {
    signInWithPopup,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    getAdditionalUserInfo,
  } from "firebase/auth";
  import { auth, googleProvider, facebookProvider } from "./config";;
  import { createUserProfile } from "./users-service";
  
  export const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
  
      const { isNewUser } = getAdditionalUserInfo(result);
  
      if (isNewUser) {
        await createUserProfile(result.user.uid, {
          email: result.user.email,
          name: result.user.displayName,
          age: 0,
          roll: "",
          deegre: "",
          cv: "",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  export const registerWithEmailAndPassword = async (
    email,
    password,
    extraData,
  ) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);

    return createUserProfile(result.user.uid, {
      email,
      ...extraData,
    });
  };
  
  export const loginWithEmailAndPassword = async (email, password, onSuccess, onFail,) => { 
    return signInWithEmailAndPassword(auth, email, password);
    // try {
    //   const result = await signInWithEmailAndPassword(auth, email, password);
    //   console.log("LOGIN", result);
    //   if (onSuccess){
    //     onSuccess();
    //   }
    // } catch (error) {
    //   console.error(error);
    //   if(onFail){
    //     onFail(error);
    //   }
    // }
  };


  export const signInWithFacebook = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
  
      const { isNewUser } = getAdditionalUserInfo(result);
  
      if (isNewUser) {
        await createUserProfile(result.user.uid, {
          email: result.user.email,
          name: result.user.displayName,
          age: 0,
          roll: "",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };