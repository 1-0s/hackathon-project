import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../pages/api/firebase";

export const AuthContext = React.createContext({
  user: {},
  isLoggedIn: false,
});

const AuthContextProvider = (props) => {
  const auth = getAuth(app);
  const [user, setUser] = useState();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      unsub();
    };
  }, [auth]);

  const userIsLoggedIn = !!user;

  const contextValue = {
    user: user,
    isLoggedIn: userIsLoggedIn,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
