"use client";

import { GoogleMap, Marker } from "@react-google-maps/api";

export const defaultMapContainerStyle = {
  width: "100%",
  height: "50vh",
};

const defaultMapCenter = {
  lat: 50.458511109620595,
  lng: 30.429938612870675,
};

const defaultMapZoom = 18;

const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: "auto",
  mapTypeId: "roadmap",
};

export default function Map() {
  return (
    <section className="relative w-full">
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={defaultMapCenter}
        zoom={defaultMapZoom}
        options={defaultMapOptions}
      >
        <Marker position={defaultMapCenter} />
      </GoogleMap>
    </section>
  );
}
