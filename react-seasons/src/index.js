import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from './SeasonDisplay'

// const App = () => {
//   return (
//     <div>Latitude: </div>
//     );
// }

class App extends React.Component {
 
  state = { lat: null, errorMessage : null };

  componentDidMount(){

    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err =>  this.setState({ errorMessage: err.message})
    );

  }

  componentDidUpdate(){
    console.log("cmp did update!")
  }

  render() {
    if(this.state.errorMessage && !this.state.lat)
    {
      return <div>Error: {this.state.errorMessage}</div>;

    }

    if(!this.state.errorMessage && this.state.lat)
    {
      return <SeasonDisplay lat={this.state.lat} />;
      
    }

    return <div>Loading...</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
