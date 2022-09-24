import Header from "../components/Header.js";
import { useState } from "react";

export default function CadastroFarmacia() {
  const [formulario, setFormulario] = useState({});
  const [resultado, setResultado] = useState(true);
  const [cordenada, setCordenada] = useState(true);
  const [cepPrenchido, setCepPrenchido] = useState(true);
  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      fetch("http://localhost:3001/farmacias", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formulario),
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
        <form onSubmit={handleSubmit}>
          <div class="row">
            <div class="col">
              <label for="inputRazaoSocial" class="formLabel">
                Razão social
              </label>
              <input
                value={formulario.razao}
                onChange={(e) => {
                  setFormulario((prev) => ({ ...prev, razao: e.target.value }));
                }}
                type="text"
                class="form-control"
                id="inputRazaoSocial"
                placeholder="Razão Social"
                required
              />
            </div>
            <div class="col">
              <label for="inputNomeFantasia" class="formLabel">
                Nome Fantasia
              </label>
              <input
                value={formulario.nome}
                onChange={(e) => {
                  setFormulario((prev) => ({ ...prev, nome: e.target.value }));
                }}
                type="text"
                class="form-control"
                id="inputNomeFantasia"
                placeholder="Nome Fantasia"
                required
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <label for="inputEmail" class="formLabel">
                Email
              </label>
              <input
                value={formulario.email}
                onChange={(e) => {
                  setFormulario((prev) => ({ ...prev, email: e.target.value }));
                }}
                type="email"
                class="form-control"
                id="inputEmail"
                placeholder="Email"
                required
              />
            </div>
            <div class="col-md-3">
              <label for="inputCNPJ" class="formLabel">
                CNPJ
              </label>
              <input
                value={formulario.cnpj}
                onChange={(e) => {
                  setFormulario((prev) => ({ ...prev, cnpj: e.target.value }));
                }}
                type="text"
                class="form-control"
                id="inputCNPJ"
                placeholder="CNPJ"
                minLength={14}
                maxLength={14}
                required
              />
            </div>

            <div class="col">
              <label for="inputTelefone" class="formLabel">
                Telefone
              </label>
              <input
                value={formulario.telefone}
                onChange={(e) => {
                  setFormulario((prev) => ({
                    ...prev,
                    telefone: e.target.value,
                  }));
                }}
                type="text"
                class="form-control"
                id="inputTelefone"
                placeholder="Telefone (opcional)"
              />
            </div>
            <div class="col">
              <label for="inputCelular" class="formLabel">
                Celular
              </label>
              <input
                value={formulario.celular}
                onChange={(e) => {
                  setFormulario((prev) => ({
                    ...prev,
                    celular: e.target.value,
                  }));
                }}
                type="text"
                class="form-control"
                id="inputCelular"
                placeholder="(00) 00000-0000"
                minLength={11}
                required
              />
            </div>
          </div>

          <hr />
          <div class="row">
            <div class="col-md-3">
              <label for="inputCEP" class="formLabel">
                CEP
              </label>
              <input
                value={formulario.cep}
                onChange={(e) => {
                  setFormulario((prev) => ({ ...prev, cep: e.target.value }));
                  if (e.target.value.length === 8) {
                    setCepPrenchido(false);
                    fetch(`https://viacep.com.br/ws/${e.target.value}/json/`)
                      .then((response) => response.json())
                      .then((data) => {
                        console.log(data);
                        if (data.logradouro === "") {
                          setResultado(false);
                        }
                        setFormulario((prev) => ({
                          ...prev,
                          endereco: data.logradouro,
                        }));
                        setFormulario((prev) => ({
                          ...prev,
                          bairro: data.bairro,
                        }));
                        setFormulario((prev) => ({
                          ...prev,
                          cidade: data.localidade,
                        }));
                        setFormulario((prev) => ({ ...prev, estado: data.uf }));
                      });
                  }
                }}
                type="text"
                class="form-control"
                id="inputCEP"
                placeholder="CEP"
                minLength={8}
                maxLength={8}
                required
              />
            </div>
            <div class="col-md-3">
              <label for="inputBairro" class="formLabel">
                Bairro
              </label>
              <input
                value={formulario.bairro}
                onChange={(e) => {
                  setFormulario((prev) => ({
                    ...prev,
                    bairro: e.target.value,
                  }));
                }}
                type="text"
                class="form-control"
                id="inputBairro"
                placeholder="Bairro"
                disabled={resultado}
                required
              />
            </div>
            <div class="col-md-3">
              <label for="inputCidade" class="formLabel">
                Cidade
              </label>
              <input
                value={formulario.cidade}
                onChange={(e) => {
                  setFormulario((prev) => ({
                    ...prev,
                    cidade: e.target.value,
                  }));
                }}
                type="text"
                class="form-control"
                id="inputCidade"
                placeholder="Cidade"
                disabled
                required
              />
            </div>
            <div class="col-md-3">
              <label for="inputEstado" class="formLabel">
                Estado
              </label>
              <input
                value={formulario.estado}
                onChange={(e) => {
                  setFormulario((prev) => ({
                    ...prev,
                    estado: e.target.value,
                  }));
                }}
                placeholder="Estado"
                id="inputEstado"
                class="form-control"
                disabled
                required
              />
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <label for="inputEndereco" class="formLabel">
                Endereço
              </label>
              <input
                value={formulario.endereco}
                onChange={(e) => {
                  setFormulario((prev) => ({
                    ...prev,
                    endereco: e.target.value,
                  }));
                }}
                type="text"
                class="form-control"
                id="inputEndereco"
                placeholder="Endereço"
                disabled={resultado}
                required
              />
            </div>
            <div class="col-md-1">
              <label for="inputNumeroEndereco" class="formLabel">
                Numero
              </label>

              <input
                value={formulario.numero}
                onChange={(e) => {
                  setFormulario((prev) => ({
                    ...prev,
                    numero: e.target.value,
                  }));
                }}
                type="text"
                class="form-control"
                id="inputNumeroEndereco"
                placeholder="Num."
                required
              />
            </div>
            <div class="col-md-5">
              <label for="inputComplemento" class="formLabel">
                Complemento
              </label>
              <input
                value={formulario.complemento}
                onChange={(e) => {
                  setFormulario((prev) => ({
                    ...prev,
                    complemento: e.target.value,
                  }));
                }}
                type="text"
                class="form-control"
                id="inputComplemento"
                placeholder="Complemento (opcional)"
              />
            </div>
          </div>
          <br />
          <div class="row ">
            <div class="col-md-4">
             
              <input
                value={formulario.latitude}
                type="text"
                class="form-control"
                placeholder="Latitude"
                disabled
              />
            </div>
            <div class="col-md-4">

              <input
                value={formulario.longitude}
                type="text"
                class="form-control"
                placeholder="Longitude"
                disabled
              />
            </div>
            <div class="col">
              <button
                class="btn btn-primary"
                disabled={cepPrenchido}
                onClick={(e) => {
                  try {
                    e.preventDefault();
                    fetch(
                      `https://nominatim.openstreetmap.org/search?road=${formulario.endereco}&city=${formulario.cidade}&state=${formulario.estado}&country=brazil&format=json&addressdetails=1&limit=1&polygon_svg=1`
                    )
                      .then((response) => response.json())
                      .then((data) => {
                        setFormulario((prev) => ({
                          ...prev,
                          latitude: data[0].lat,
                          longitude: data[0].lon,
                        }));
                        setCordenada(false);
                      });
                  } catch {
                    alert("Endereço não encontrado");
                  }
                }}
              >
                Gerar Localização
              </button>
            </div>
            <div class="col">
              <button
                type="submit"
                class="btn btn-primary"
                disabled={cordenada}
              >
                Cadastrar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
