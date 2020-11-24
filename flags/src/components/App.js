import React from "react";
import Usercreate from "./UserCreate";
import LanguegeContext from "./contexts/LangaugeContext";

class App extends React.Component {
  state = { language: "english" };

  onLanguageChange = (language) => {
    this.setState({ language: language });
  };
  render() {
    return (
      <div className='ui container'>
        <div>
          Select a language:
          <i
            className='flag us'
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className='flag nl'
            onClick={() => this.onLanguageChange("dutch")}
          />
        </div>
        <LanguegeContext.Provider value={this.state.language}>
          <Usercreate />
        </LanguegeContext.Provider>
      </div>
    );
  }
}

export default App;
