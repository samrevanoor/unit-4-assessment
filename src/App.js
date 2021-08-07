import React, { Component } from "react";
import "./App.css";
import CircleSelector from "./components/CircleSelector/CircleSelector";
import Circles from "./components/Circles/Circles";

class App extends Component {
  constructor() {
    super();
    this.state = {
      circle: 1,
    };
  }

  handleButtonClick = (button) => {
    this.setState({
      circle: button
    });
  }


  render() {
    const { circle } = this.state;
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector circle={circle} handleButtonClick={this.handleButtonClick}/>{" "}
          <Circles circle={circle}/>
        </main>
      </div>
    );
  }
}

export default App;
