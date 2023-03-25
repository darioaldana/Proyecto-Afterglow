// TODOS LOS METODOS DE AUTENTICACION

import { FirebaseError } from "firebase/app";
import {
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAdditionalUserInfo,
} from "firebase/auth";
import { db, auth, googleProvider, facebookProvider } from "./config";
import { createUserProfile } from "./users-service";
import { doc, setDoc } from "firebase/firestore";

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const { isNewUser } = getAdditionalUserInfo(result);
    console.log(isNewUser);
    if (isNewUser) {
      var regis;
      return (regis = [
        result.user.email,
        result.user.displayName,
        result.user.uid,
        result.user.photoURL,
      ]);
    } else {
      console.log("This user is already in our DataBase");
      return "registered";
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const register_pt2 = async (email, uid, extraData) => {
  try {
    userC(uid)
    return createUserProfile(uid, {
      email,
      ...extraData,
    });
  } catch (error) {
    console.error(error);
  }
};

export const registerWithEmailAndPassword = async (
  name,
  email,
  password,
  photoURL
) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    console.log(result);
    var regis;
    return (regis = [email, name, result.user.uid, photoURL]);
  } catch (error) {
    if (error instanceof FirebaseError) {
      return "registered";
    } else {
      console.log(error.name);
      return null;
    }
  }
};

export const loginWithEmailAndPassword = async (
  email,
  password,
  onSuccess,
  onFail
) => {
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
      var regis;
      return (regis = [
        result.user.email,
        result.user.displayName,
        result.user.uid,
        result.user.photoURL,
      ]);
    } else {
      console.log("This user is already in our DataBase");
      return "registered";
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const userC = async (uid) => {
  try{ 
  await setDoc(doc(db, "userChats", uid), {});
  } catch (error){
    console.log(error)
  }
};