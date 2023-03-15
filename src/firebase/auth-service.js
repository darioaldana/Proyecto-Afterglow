// TODOS LOS METODOS DE AUTENTICACION

import {
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAdditionalUserInfo,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { Result } from "postcss";
import { auth, db, googleProvider, facebookProvider } from "./config";
import { createUserProfile } from "./users-service";

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);

    const { isNewUser } = getAdditionalUserInfo(result);

    if (isNewUser) {
      console.log(result);
      await createUserProfile(result.user.uid, {
        email: result.user.email,
        name: result.user.displayName,
        uid: result.user.uid,
        age: 0,
        photoURL: result.user.photoURL,
        roll: "",
        deegre: "",
        cv: "",
      });
      try {
        await updateProfile(result.user, {
          name: result.user.displayName,
          photoURL: result.user.photoURL,
        });
        await userC(result)
      } catch (error) {
        console.log(error);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const registerWithEmailAndPassword = async (
  email,
  password,
  uid,
  extraData
) => {
  const result = await createUserWithEmailAndPassword(auth, email, password);

  await userC(result)

  return createUserProfile(result.user.uid, {
    email,
    uid: result.user.uid,
    ...extraData,
  });
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
      await createUserProfile(result.user.uid, {
        email: result.user.email,
        name: result.user.displayName,
        uid: result.user.uid,
        age: 0,
        photoURL: result.user.photoURL,
        roll: "",
      });
      try {
        await updateProfile(result.user, {
          name: result.user.displayName,
          photoURL: result.user.photoURL,
        });
        await userC(result)
      } catch (error) {
        console.log(error);
      }
    }
  } catch (error) {
    console.log(error);
  }
};
export const userC = async (result) => {
  await setDoc(doc(db, "userChats", result.user.uid), {});
};
