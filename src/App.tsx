//@ts-ignore
import { OpenStreetMapProvider } from "leaflet-geosearch";
import { useEffect, useState } from "react";
import MarkerComp from "./components/MarkerComp";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

function App() {
  const provider = new OpenStreetMapProvider();
  const [coordinates, setCoordinates] = useState<number[]>([]);

  useEffect(() => {
    provider
      .search({ query: "17 Hillside Close, Morden" })
      .then((res: any) => setCoordinates([res[0].x, res[0].y]))
      .catch((e: any) => console.log(e));
  }, [provider]);

  // console.log(coordinates);

  // return <MarkerComp coordinates={coordinates} />;
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
    // <MapContainer
    //   zoom={3}
    //   scrollWheelZoom={false}
    //   style={{
    //     height: "`enter code here`400px",
    //     backgroundColor: "red",
    //     marginTop: "80px",
    //     marginBottom: "90px",
    //   }}
    // ></MapContainer>
  );
}

export default App;
