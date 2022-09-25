import { useAutenticado } from "../context/auth.js";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const { useAuth } = useAutenticado();
  const navigate = useNavigate();
  if (useAuth) {
    return (
      <nav class="navbar navbar-dark " style={{ backgroundColor: "#06281E" }}>
        <div class="container-fluid">
          <span class="navbar-brand">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBM3ofZaJ4RALO6WQSrrMaiW1ildnYAVfIn6e8ATrZy0NQ-bZpDed36y-vFIY8m5G8A28&usqp=CAU"
              alt="Logo"
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
            PharmacyManagement
          </span>

          <button
            class="btn btn-primary"
            onClick={() => {
              navigate("/CadastroFarmacia");
            }}
          >
            Cadastrar Farmácia
          </button>
          <button
            class="btn btn-primary"
            onClick={() => {
              navigate("/CadastroMedicamento");
            }}
          >
            Cadastrar Medicamentos
          </button>
          <button
            class="btn btn-primary"
            onClick={() => {
              navigate("/Medicamentos");
            }}
          >
            Medicamentos
          </button>
          <button
            class="btn btn-primary"
            onClick={() => {
              navigate("/Mapa");
            }}
          >
            Mapa
          </button>
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Logout
          </button>
        </div>
      </nav>
    );
  } else {
    return (
      <nav class="navbar navbar-dark " style={{ backgroundColor: "#06281E" }}>
        <div class="container-fluid">
          <span class="navbar-brand">
            <img
              src="https://pbs.twimg.com/media/C4puoESW8AE98a4.jpg"
              alt="Logo"
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
            PharmacyManagement
          </span>
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
        </div>
      </nav>
    );
  }
}
