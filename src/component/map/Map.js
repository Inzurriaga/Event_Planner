import React, { Component } from "react";
import { connect } from "react-redux";
import { Map, TileLayer, Popup, Marker } from "react-leaflet";

export class MapComponent  extends Component {
  constructor() {
    super();
    this.state = {
      test: "test"
    }
  }

  render() {
    const { userLocation } = this.props
    return (
      <Map  center={userLocation} zoom={13} className="map">
        <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          />
          <Marker position={userLocation}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
      </Map>
    )
  }
}

export const mapStateToProps = (state) => ({
  userLocation: state.userLocation
})

export default connect(mapStateToProps)(MapComponent)