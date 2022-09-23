import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useAutenticado } from "../context/auth.js";
import Header from "../components/Header.js";
export default function Mapa() {
  const { useAuth } = useAutenticado();
  console.log(useAuth);
  const position = [-28.47580788432588, -49.00404157508996];

  return (
    <div class="mb-3">
      <Header />
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "90vh", width: "98vw" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
