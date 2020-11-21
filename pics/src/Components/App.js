import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageResult from "./ImageResult";

class App extends React.Component {
  state = { term: "", imgData: [] };

  onSearchSubmit = async (term) => {
    this.setState({ term: term });
    const response = await unsplash.get("search/photos", {
      params: {
        query: term,
      },
    });

    this.setState({ imgData: response.data.results });
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: "10px" }}>
        <div>
          <SearchBar onSubmit={this.onSearchSubmit} />
          
          <ImageResult imgData={this.state.imgData} />
        </div>
      </div>
    );
  }
}

export default App;
