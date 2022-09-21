import { Rotas } from "./routes/Rotas";
import { UsuarioProvider } from "./context/auth.js";
import Header from "./components/Header";
function App() {
  return (
    <div className="teste">
      <UsuarioProvider>
        <Header />
        <Rotas />
      </UsuarioProvider>
    </div>
  );
}

export default App;
