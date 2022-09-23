import Header from "../components/Header.js";
export default function CadastroFarmacia() {
  return (
    <div class="mb-3">
      <Header />
      <div className="container">
        <div class="mb-3">
          <form>
            <label for="inputRazaoSocial" class="formLabel">
              Razão social
            </label>
            <input
              type="text"
              class="form-control"
              id="inputRazaoSocial"
              placeholder="Razão Social"
              required
            />
            <label for="inputCNPJ" class="formLabel">
              CNPJ
            </label>
            <input
              type="text"
              class="form-control"
              id="inputCNPJ"
              placeholder="CNPJ"
              minLength={14}
              maxLength={14}
              required
            />
            <label for="inputNomeFantasia" class="formLabel">
              Nome Fantasia
            </label>
            <input
              type="text"
              class="form-control"
              id="inputNomeFantasia"
              placeholder="Nome Fantasia"
              required
            />
            <label for="inputEmail" class="formLabel">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="inputEmail"
              placeholder="Email"
              required
            />
            <div class="row">
              <div class="col">
                <label for="inputTelefone" class="formLabel">
                  Telefone
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputTelefone"
                  placeholder="Telefone (opcional)"
                  required
                />
              </div>
              <div class="col">
                <label for="inputCelular" class="formLabel">
                  Celular
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputCelular"
                  placeholder="Celular"
                  required
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
