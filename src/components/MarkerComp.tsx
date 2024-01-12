// import { useEffect } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import { GeoSearchControl, MapBoxProvider } from "leaflet-geosearch";

export default function MarkerComp({ coordinates }: { coordinates: number[] }) {
  // const provider = new MapBoxProvider();

  // // @ts-ignore
  // const searchControl = new GeoSearchControl({
  //   provider: provider,
  // });

  // const map = useMap();
  // useEffect(() => {
  //   map.addControl(searchControl);
  //   return () => map.removeControl(searchControl);
  // }, []);

  function MapView() {
    let map = useMap();
    map.setView([51.0, 19.0], map.getZoom());
    //Sets geographical center and zoom for the view of the map
    return null;
  }

  return (
    // <MapContainer
    //   className="markercluster-map"
    //   center={[51.0, 19.0]}
    //   zoom={4}
    //   maxZoom={18}
    // >
    //   <TileLayer
    //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    //   />

    //   <Marker position={[49.8397, 24.0297]}>
    //     <Popup>Name</Popup>
    //   </Marker>
    //   <Marker position={[52.2297, 21.0122]} />
    //   <Marker position={[51.5074, -0.0901]} />
    //   <MapView />
    // </MapContainer>
    <MapContainer center={[51.0, 19.0]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.0, 19.0]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
