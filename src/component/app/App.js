import React, { Component } from "react";
import { connect } from "react-redux";
import Map from "../map/Map";
import Controls from "../controls/Controls";
import { setUserLocation } from "../../action";

class App extends Component {

  componentDidMount() {
    navigator.geolocation.getCurrentPosition( this.geoSuccess , this.geoErro )
  }

  geoSuccess = (position) => {
    this.props.setUserLocation([...[], position.coords.latitude, position.coords.longitude])
  }

  geoError() {
    console.log("error with geoloaction")
  }


  render() {
    return (
      <div className="App">
        <Map />
        <Controls />
      </div>
    );
  }
}

const dispatchToProps = (dispatch) => ({
  setUserLocation: position => dispatch(setUserLocation(position))
})

export default connect(null, dispatchToProps)(App);
