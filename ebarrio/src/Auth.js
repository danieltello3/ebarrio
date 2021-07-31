import React, { useEffect, useState, createContext } from "react";
import { CircularProgress } from "@material-ui/core";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   const [currentUser, setCurrentUser] = useState(false);
   //    const [pending, setPending] = useState(false);

   //    useEffect(() => {
   //       //   firebase.auth().onAuthStateChanged((user) => {
   //       //      setCurrentUser(user);
   //       //      setPending(false);
   //       //   });
   //    }, []);

   //    if (pending) {
   //       return <CircularProgress color="secondary" />;
   //    }
   return (
      <AuthContext.Provider value={{ currentUser }}>
         {children}
      </AuthContext.Provider>
   );
};
