import React, { Component } from "react";
import { Map, TileLayer, Popup, Marker } from "react-leaflet";

export default class MapComponent  extends Component {
  constructor() {
    super();
    this.state = {
      test: "test"
    }
  }

  render() {
    return (
      <Map  center={[51.505, -0.09]} maxZoom={19} zoom={13} className="map">
        <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
      </Map>
    )
  }
}