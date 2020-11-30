import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

// const App = () => {
//   return (
//     <div>Latitude: </div>
//     );
// }

const App = () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const setPostion = () => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => setLat(position.coords.latitude),
      (err) => setErrorMessage(err.message)
    );
  };

  useEffect(() => {
    setPostion();
  }, [lat]);

  if (errorMessage && !lat) {
    return <div>Error: {errorMessage}</div>;
  }

  if (!errorMessage && lat) {
    return <SeasonDisplay lat={lat} />;
  }

  return <div>Loading...</div>;
};

ReactDOM.render(<App />, document.getElementById("root"));
