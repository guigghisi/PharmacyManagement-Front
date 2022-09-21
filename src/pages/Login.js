import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAutenticado } from "../context/auth.js";
export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { setAuth } = useAutenticado();
  const navigate = useNavigate();
  const regex = new RegExp("^(?=.*([A-Za-z]{1,}))(?=.*[0-9]{1,}).{8,100}$");
  function logar(event) {
    event.preventDefault();
    if (validarForm() === true) {
      setAuth(true);
      navigate("/mapa");
    }
  }

  function validarForm() {
    console.log("alou" + regex.test(senha));
    console.log(senha);
    if (email.length === 0) {
      alert("Preencha o email");
      return false;
    } else if (senha.length === 0) {
      alert("Preencha a senha");
      return false;
    } else if (!regex.test(senha)) {
      alert("A senha deve conter letras e números");
      return false;
    } else {
      alert("Logado com sucesso");
      return true;
    }
  }

  return (
    <div class="mb-3">
      <form onSubmit={logar}>
        <label for="inputEmailLogin" class="form-label">
          Endereço de email
        </label>
        <input
          type="email"
          class="form-control"
          id="inputEmailLogin"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label for="inputSenhaLogin" class="form-label">
          Senha
        </label>
        <input
          type="password"
          class="form-control"
          id="inputSenhaLogin"
          placeholder="Digite sua senha"
          minLength={8}
          onChange={(e) => setSenha(e.target.value)}
        />
        <input type="submit" class="btn btn-primary" value="Entrar" />
      </form>
    </div>
  );
}
