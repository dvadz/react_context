import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
  renderName(language) {
    return language == "english" ? "Name" : "Nom";
  }

  render() {
    return (
      <div className='ui field'>
        <label>
          <LanguageContext.Consumer>
            {({ language }) => this.renderName(language)}
          </LanguageContext.Consumer>
        </label>
        <input />
      </div>
    );
  }
}

export default Field;
