import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';

import 'leaflet/dist/leaflet.css';

import marker from '../../img/map/marker.png';

const customIcon = new Icon({
  iconUrl: marker,
  iconSize: [40, 40],
});

export const Map = () => {
  return (
    <MapContainer center={[34.3978054, -112.2372734]} zoom={15}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[34.3982554, -112.2372962]} icon={customIcon}>
        <Popup>Office LoftHouse</Popup>
      </Marker>
    </MapContainer>
  );
};
