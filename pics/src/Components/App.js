import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageResult from "./ImageResult";

class App extends React.Component {
  state = { term: "", imgData: [] };

  onSearchSubmit = (term) => {
    this.setState({ term: term });
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          query: term,
        },
        headers: {
          Authorization:
            "Client-ID 3zNQ3iB8aVhsuseO0r9MpFGP0_1sXy6v_6fK9-pmmzE",
        },
      })
      .then((response) => {
        this.setState({ imgData: response.data.results });
      });
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: "10px" }}>
        <div>
          <SearchBar onSubmit={this.onSearchSubmit} />
          <br />
          <ImageResult imgData={this.state.imgData} />
        </div>
      </div>
    );
  }
}

export default App;
