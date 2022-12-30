import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouder from "./components/AppRouder";
import { AuthContext } from "./components/context/context";
import Navbar from "./components/UI/Navbar/Navbar";
import "./style/App.css";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoadung] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
    setIsLoadung(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
      <BrowserRouter>
        <Navbar />
        <AppRouder />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
