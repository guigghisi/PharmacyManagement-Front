import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NaoEncontrado from "../pages/NaoEncontrado";
import CadastroFarmacia from "../pages/CadastroFarmacia";
import CadastroMedicamento from "../pages/CadastroMedicamento";
import Mapa from "../pages/Mapa";
import Medicamentos from "../pages/Medicamentos";
import { RotaPrivada } from "./RotaPrivada";
export const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" replace element={<Home />} />
        <Route path="/home" replace element={<Navigate replace to="/" />} />
        <Route path="/login" replace element={<Login />} />
        <Route path="*" element={<NaoEncontrado />} />"
        <Route element={<RotaPrivada />}>
          <Route path="/CadastroFarmacia" element={<CadastroFarmacia />} />
          <Route path="CadastroMedicamento" element={<CadastroMedicamento />} />
          <Route path="/mapa" element={<Mapa />} />
          <Route path="/Medicamentos" element={<Medicamentos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
