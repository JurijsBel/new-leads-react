import { OpenStreetMapProvider } from "leaflet-geosearch";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { Map, Marker } from "pigeon-maps";
import { mockedData } from "./data/mockedData";

function App() {
  const [data, setData] = useState(mockedData);
  const [isTitle, setIsTitle] = useState(false);

  useEffect(() => {
    if (isTitle)
      setTimeout(() => {
        setIsTitle(false);
      }, 5000);
  }, [isTitle]);

  return (
    <Map defaultCenter={[51.5072, -0.1276]} defaultZoom={12} height={900}>
      {data.map((el) => {
        return (
          <Marker
            key={el.companyName}
            onClick={() => setIsTitle(true)}
            width={50}
            color={el.scoreResult !== "COLD LEAD" ? "red" : undefined}
            anchor={el.coordinates as [number, number]}
          >
            {isTitle ? (
              <span style={{ fontWeight: 900, fontSize: "10px" }}>
                {el.companyName}
              </span>
            ) : undefined}
          </Marker>
        );
      })}
    </Map>
  );
}

export default App;
