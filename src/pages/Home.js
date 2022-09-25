import "./styles.css";
import Header from "../components/Header.js";
export default function Home() {
  return (
    <div class="mb-3">
      <Header />
      <div className="container text-center">
        <h1>Bem Vindo ao Pharmacy Management</h1>
      </div>
    </div>
  );
}
