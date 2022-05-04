import React from "react";
import UserCreate from "./UserCreate";
import { LanguageStore } from "../contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";

class App extends React.Component {
  state = { language: "english" };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className='ui container'>
        <LanguageStore>
          <LanguageSelector onLanguageChange={this.onLanguageChange} />
          <UserCreate />
        </LanguageStore>
      </div>
    );
  }
}

export default App;
