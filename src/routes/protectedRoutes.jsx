import React from "react";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { StateContext } from "../context/context";

function ProtectedRoutes() {
  const { userState } = useContext(StateContext);
  return userState.token ? <Outlet /> : <Navigate to={"login"} />;
}

export default ProtectedRoutes;
