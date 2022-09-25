import { useEffect, useState } from "react";
import Header from "../components/Header.js";
import Card from "../components/Card.js";

export default function Medicamentos() {
  const [medicamentos, setMedicamentos] = useState([]);
  const [nomeMed, setNomeMed] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/medicamentos")
      .then((response) => response.json())
      .then((data) =>
        setMedicamentos(
          data.filter((medicamento) => {
            if (
              medicamento.nomeMed
                .toLowerCase()
                .includes(nomeMed.toLowerCase()) ||
              medicamento.nomeLab.toLowerCase().includes(nomeMed.toLowerCase())
            )
              return medicamento;

            return null;
          })
        )
      );
  }, [nomeMed]);
  return (
    <div>
      <Header />

      <div class="container ">
        <nav
          class="navbar "
          style={{
            backgroundColor: "transparent",
            paddingLeft: "4%",
            paddingRight: "4%",
          }}
        >
          <div class="container-fluid">
            <span class="navbar-brand">Medicamentos</span>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Pesquisar"
                onChange={(e) => setNomeMed(e.target.value)}
              />
            </form>
          </div>
        </nav>
        <div class="row d-flex justify-content-around">
          {medicamentos.map((medicamento) => (
            <Card {...medicamento} />
          ))}
        </div>
      </div>
    </div>
  );
}
