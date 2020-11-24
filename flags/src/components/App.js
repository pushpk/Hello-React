import React from "react";
import Usercreate from './UserCreate';

class App extends React.Component {
  state = { language: "english" };

  onLanguageChange = language =>{
      this.setState({language : language});
  }
  render() {
    return (
      <div className='ui container'>
        <div>
          Select a language:
          <i className='flag us' onClick={() =>  this.onLanguageChange('english')}/>
          <i className='flag nl' onClick={() =>  this.onLanguageChange('dutch')}/>
        </div>

        <Usercreate />
      </div>
    );
  }
}

export default App;