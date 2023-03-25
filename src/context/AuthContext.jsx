import { onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect, useState, createContext } from "react";
import { auth } from "../firebase/config";
import { getUserProfile } from "../firebase/users-service";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoadingUser, setIsLoadingUser] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, async (firebaseUser) => {
      setIsLoadingUser(true);
      if (firebaseUser && !user) {
        const userProfile = await getUserProfile(firebaseUser.email);

        setUser(userProfile);
      } else {
        setUser(null);
      }

      setIsLoadingUser(false);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isLoadingUser,
        setIsLoadingUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}