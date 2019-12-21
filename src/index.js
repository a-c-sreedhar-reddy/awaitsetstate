import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  state = { name: "erase this to see the difference" };
  render() {
    console.log(this.state.name);
    return (
      <>
        <input
          value={this.state.name}
          onChange={async e => {
            let name = e.target.value;
            await this.setState({ name });
            await this.setState({ name });
          }}
        />
        <span>await before setstate</span>
        <input
          value={this.state.name}
          onChange={async e => {
            let name = e.target.value;
            this.setState({ name });
            this.setState({ name });
          }}
        />
        <span>setstate without await</span>
        <HeavyComponent />
      </>
    );
  }
}
function sleep(time) {
  const done = Date.now() + time;
  while (done > Date.now()) {
    // sleep...
  }
}
const HeavyComponent = function HeavyComponent({ onChange }) {
  sleep(200);
  return <></>;
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
