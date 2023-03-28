import {
    collection,
    doc,
    getDocs,
    limit,
    query,
    setDoc,
    where,
  } from "firebase/firestore";
  import { db } from "./config";
  
  export async function createUserProfile(userId, data) {
    return setDoc(doc(db, "users", userId), data);
  }
  
  export async function getUserProfile(email) {
    const userQuery = query(collection(db, "users"), where("email", "==", email), limit(1));
  
    const results = await getDocs(userQuery);
    let Doc = null
    results.forEach((doc) => {
      Doc=doc.data()
    })

    return Doc
  }