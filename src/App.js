import { Rotas } from "./routes/Rotas";
import { UsuarioProvider } from "./context/auth.js";

function App() {
  return (
    <div className="teste">
      <UsuarioProvider>
        <Rotas />
      </UsuarioProvider>
    </div>
  );
}

export default App;
