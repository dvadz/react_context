import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  static contextType = LanguageContext;

  render() {
    const renderSubmit = this.context === "english" ? "Submit" : "Envoyer";

    return <button className='ui button primary'>{renderSubmit}</button>;
  }
}

export default Button;
