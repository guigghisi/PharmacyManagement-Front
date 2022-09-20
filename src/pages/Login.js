import { useState } from "react";
import { UsuarioContext } from "../context/Auth";
export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const regex = new RegExp("^(?=.*([A-Za-z]{1,}))(?=.*[0-9]{1,}).{8,100}$");
  function logar(event) {
    if (validarForm()) {
      console.log(email, senha);
      event.preventDefault();
    } else {
      event.preventDefault();
    }
  }

  function validarForm() {
    console.log(regex.test(senha));
    console.log(senha);
    if (email.length === 0) {
      return (false, alert("Preencha o email"));
    } else if (senha.length === 0) {
      return (false, alert("Preencha a senha"));
    } else if (!regex.test(senha)) {
      return (false, alert("A senha deve conter letras e números"));
    }
    UsuarioContext.setAuth(true);
    return (true, alert("Logado com sucesso"));
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
