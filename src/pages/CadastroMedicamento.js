import Header from "../components/Header.js";
import { useState } from "react";
export default function CadastroMedicamento() {
  const [medicamento, setMedicamento] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      fetch("http://localhost:3001/medicamentos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(medicamento),
      });
      alert("Cadastro realizado com sucesso!");
    } catch {
      alert("Erro ao cadastrar!");
    }
  };
  return (
    <div class="mb-3">
      <Header />
      <div className="container">
        <form class="row g-3" onSubmit={handleSubmit}>
          <div class="col-md-6">
            <label for="inputNomeMed" class="formLabel">
              Nome do medicamento
            </label>
            <input
              value={medicamento.nomeMed}
              onChange={(e) => {
                setMedicamento((prev) => ({
                  ...prev,
                  nomeMed: e.target.value,
                }));
              }}
              type="text"
              class="form-control"
              id="inputNomeMed"
              placeholder="Nome do medicamento"
              required
            />
          </div>
          <div class="col-md-4">
            <label for="inputNomeLab" class="formLabel">
              Nome do laboratório
            </label>
            <input
              value={medicamento.nomeLab}
              onChange={(e) => {
                setMedicamento((prev) => ({
                  ...prev,
                  nomeLab: e.target.value,
                }));
              }}
              type="text"
              class="form-control"
              id="inputNomeLab"
              placeholder="Nome do laboratório"
              required
            />
          </div>
          <div class="col-2">
            <label for="inputDosagem" class="formLabel">
              Dosegem
            </label>
            <input
              value={medicamento.dosagem}
              onChange={(e) => {
                setMedicamento((prev) => ({
                  ...prev,
                  dosagem: e.target.value,
                }));
              }}
              type="text"
              class="form-control"
              id="inputDosagem"
              placeholder="Dosagem"
              required
            />
          </div>
          <div class="col-7">
            <label for="inputDescricao" class="formLabel">
              Descrição
            </label>
            <textarea
              value={medicamento.descricao}
              onChange={(e) => {
                setMedicamento((prev) => ({
                  ...prev,
                  descricao: e.target.value,
                }));
              }}
              class="form-control"
              id="inputDescricao"
              rows="4"
            ></textarea>
          </div>
          <div class="col-md-2">
            <label for="inputPreco" class="form-label">
              Preço unitário
            </label>
            <input
              value={medicamento.preco}
              onChange={(e) => {
                setMedicamento((prev) => ({ ...prev, preco: e.target.value }));
              }}
              type="text"
              class="form-control"
              id="inputPreco"
              placeholder="Preço"
              required
            />
            <div class="col-12">
              <button type="submit" class="btn btn-primary">
                Cadastrar
              </button>
            </div>
          </div>
          <div class="col-md-3">
            <label for="inputState" class="form-label">
              Tipo
            </label>
            <select
              id="inputState"
              class="form-select"
              required
              onChange={(e) => {
                setMedicamento((prev) => ({ ...prev, tipo: e.target.value }));
              }}
            >
              <option selected value="">
                Selecione...
              </option>
              <option value="controlado">Medicamento controlado</option>
              <option value="comum">Medicamento comum</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
}
