import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import Header from "../components/Header.js";
export default function Mapa() {
  const [farmacias, setFarmacias] = useState([]);
  const whats = `https://wa.me/55${farmacias.celular}`;
  useEffect(() => {
    fetch("http://localhost:3001/farmacias")
      .then((response) => response.json())
      .then((data) => setFarmacias(data));
  }, []);
  const position = [-27.59627854569889, -48.53315487350991];
  return (
    <div class="mb-3">
      <Header />
      <MapContainer
        center={position}
        zoom={7}
        scrollWheelZoom={true}
        style={{ height: "92vh", width: "99vw" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {farmacias.map((farmacia) => (
          <Marker
            position={[farmacia.latitude, farmacia.longitude]}
            key={farmacia.id}
          >
            <Popup>
              <p>Razão Social: {farmacia.razao}</p>
              <p>CNPJ: {farmacia.cnpj}</p>
              <p>Nome Fantasia: {farmacia.nome}</p>
              <p>E-Mail: {farmacia.email}</p>
              <p>Telefone: {farmacia.telefone}</p>
              <p>
                WhatsApp:
                <a href={whats}>{farmacia.celular}</a>
              </p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
