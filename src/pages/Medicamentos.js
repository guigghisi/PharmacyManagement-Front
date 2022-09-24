import { useEffect, useState } from "react";
import Header from "../components/Header.js";
import Card from "../components/Card.js";
export default function Medicamentos() {
  const [medicamentos, setMedicamentos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/medicamentos")
      .then((response) => response.json())
      .then((data) => setMedicamentos(data));
  }, []);
  return (
    <div>
      <Header />
      <div class="container ">
        <div class="row d-flex justify-content-around">
          {medicamentos.map((medicamento) => (
            <Card {...medicamento} />
          ))}
        </div>
      </div>
    </div>
  );
}
