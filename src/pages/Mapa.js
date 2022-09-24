import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import Header from "../components/Header.js";
export default function Mapa() {
  const [farmacias, setFarmacias] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/farmacias")
      .then((response) => response.json())
      .then((data) => setFarmacias(data));
  }, []);
  const position = [-27.59627854569889, -48.53315487350991];
  console.log(farmacias);
  return (
    <div class="mb-3">
      <Header />
      <MapContainer
        center={position}
        zoom={8}
        scrollWheelZoom={true}
        style={{ height: "90vh", width: "98vw" }}
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
              <h3>{farmacia.nome}</h3>
              <p>{farmacia.endereco}</p>
              <p>{farmacia.telefone}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
