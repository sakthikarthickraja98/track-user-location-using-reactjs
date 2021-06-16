import React from "react";
import Season from "./seasondisplay"

export default class Tractlocation extends React.Component {
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

  /*render(){
      return(
      <div>
          latitude:{this.state.lat}
          <br/>
          Error:{this.state.errormessage}
      </div>
      );
  } */

  render() {
    if (!this.state.lat && this.state.errormessage) {
        return <div>Error:{this.state.errormessage}</div>;
    }

    if (!this.state.errormeaasge && this.state.lat) {
        return <div><Season lat={this.state.lat}/></div>;
    }
    
    return <div>loading!</div>;
  }
}
