import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
  static contextType = LanguageContext;

  render() {
    const renderName = this.context === "english" ? "Name" : "Nom";
    return (
      <div className='ui field'>
        <label>{renderName}</label>
        <input />
      </div>
    );
  }
}

export default Field;
