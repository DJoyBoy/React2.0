import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/context";

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  function logout() {
    setIsAuth(false);
    localStorage.removeItem("auth");
  }

  return (
    <div className="navbar">
      <button onClick={logout}>Вийти</button>
      <div className="navbar__links">
        <Link to="/about">Про сайт</Link>
        <Link to="/posts">Заяви</Link>
      </div>
    </div>
  );
};

export default Navbar;
