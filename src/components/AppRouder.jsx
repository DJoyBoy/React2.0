import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./router/Rout";
import Login from "./pages/Loading";

import { AuthContext } from "./context/context";
import Loader from "./UI/loader/Loader";

const AppRouder = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }
  return isAuth ? (
    <Routes>
      {privateRoutes.map((rout) => (
        <Route
          element={rout.element}
          path={rout.path}
          exact={rout.exact}
          key={rout.path}
        />
      ))}
      <Route path="*" element={<Navigate to="/about" />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((rout) => (
        <Route
          element={rout.element}
          path={rout.path}
          exact={rout.exact}
          key={rout.path}
        />
      ))}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRouder;
