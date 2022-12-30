import React, { useContext } from "react";
import { AuthContext } from "../context/context";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  function login(event) {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  }

  return (
    <div>
      <h1>Авторизуйтися в системі</h1>
      <form onSubmit={login}>
        <input type="text" placeholder="Ведіть логін" />
        <input type="password" placeholder="Ведіть пароль" />
        <button>Війти</button>
      </form>
      <h1 style={{ color: "red" }}>нажміть на "війти" щоб зайти в систему</h1>
    </div>
  );
};

export default Login;
