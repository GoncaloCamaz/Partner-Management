import React from 'react';
import './Map.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'

export default function Map(props)
{
    const position = props.position

    return (
      <div id="mapid" className="leaflet-container">
          <MapContainer center={position} zoom={16} scrollWheelZoom={true}>
          <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          <Marker position={position} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} />
          </MapContainer>
      </div>
    );
}