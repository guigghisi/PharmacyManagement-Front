import { Link } from "react-router-dom";

export default function NaoEncontrado() {
  return (
    <div>
      <h1>404 - Página não encontrada</h1>
      <img src="https://http.cat/404" alt="404 - Página não encontrada" />
      <p>
        <Link to="/">Voltar para a página inicial</Link>
      </p>
    </div>
  );
}
