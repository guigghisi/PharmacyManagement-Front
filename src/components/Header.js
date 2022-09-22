import { useAutenticado } from "../context/auth.js";
import { useNavigate } from "react-router-dom";

export default function Header() {

  const { useAuth } = useAutenticado();
  if (useAuth) {
    return (
      <nav class="navbar navbar-dark " style={{ backgroundColor: "#06281E" }}>
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img
              src="https://pbs.twimg.com/media/C4puoESW8AE98a4.jpg"
              alt="Logo"
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
            PharmacyManagement
          </a>

          <button class="btn btn-primary">Cadastrar Farmácia</button>
          <button class="btn btn-primary">Cadastrar Medicamentos</button>
          <button class="btn btn-primary">Medicamentos</button>
          <button class="btn btn-primary">Mapa</button>
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
          <a class="navbar-brand" href="/">
            <img
              src="https://pbs.twimg.com/media/C4puoESW8AE98a4.jpg"
              alt="Logo"
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
            PharmacyManagement
          </a>
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => {
              window.location.href = "/login";
            }}
          >
            Login
          </button>
        </div>
      </nav>
    );
  }
}
