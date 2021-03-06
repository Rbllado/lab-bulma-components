import React from "react";
import "./App.css";
import SignUp from "./SignUp";
import Message from "./Message";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <SignUp />
          <br />
          <Message classMessage="message is-info" title="Hello World">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <strong>Pellentesque risus mi</strong>.
          </Message>
        </div>
      </div>
    );
  }
}

export default App;
