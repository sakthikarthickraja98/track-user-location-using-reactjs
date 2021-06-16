import React from "react";

export default class Seasondisplay extends React.Component {
  state = {
    lat: null,
    errormessage: "",
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errormessage: err.message });
      }
    );
  }

  render() {
    return (
      <div>
        <div>Latitude:{this.state.lat}</div>
        <div>Error:{this.state.errormessage}</div>
      </div>
    );
  }
}
