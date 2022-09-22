import { Outlet, Navigate } from "react-router-dom";
import { useAutenticado } from "../context/auth";
export const RotaPrivada = () => {
  const { useAuth } = useAutenticado();
  return useAuth ? <Outlet /> : <Navigate to="/login" replace />;
};
