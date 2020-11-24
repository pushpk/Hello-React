import React from "react";
import LanguegeContext from "./contexts/LangaugeContext";

class Button extends React.Component {
  static contextType = LanguegeContext;

  render() {
    const text = this.context === "english" ? "Submit" : "Voorleggen";
    return <button className='ui button primary'>{text}</button>;
  }
}

export default Button;
