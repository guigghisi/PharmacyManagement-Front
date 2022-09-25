import { Link } from "react-router-dom";
import Header from "../components/Header.js";
export default function NaoEncontrado() {
  return (
    <div class="mb-3">
      <Header />
      <div class="container text-center">
        <h1>404 - Página não encontrada</h1>
        <img src="https://http.cat/404" alt="404 - Página não encontrada" />
        <p>
          <Link to="/">Voltar para a página inicial</Link>
        </p>
      </div>
    </div>
  );
}
