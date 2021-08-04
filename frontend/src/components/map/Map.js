import React from 'react';
import './Map.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'

export class DeviceMap extends React.Component {
    constructor() {
      super();
      this.state = {
        lat: 41.5616,
        lng: -8.39653,
        zoom: 13,
      };
    }

    render() {
      const position = [this.state.lat, this.state.lng];
      return (
            <div id="mapid" className="leaflet-container">
                <MapContainer center={position} zoom={this.state.zoom} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                <Marker position={position} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
                    <Popup>
                    <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
                    </Popup>
                </Marker>
                </MapContainer>
            </div>
      );
    }
  }
  
  export default DeviceMap