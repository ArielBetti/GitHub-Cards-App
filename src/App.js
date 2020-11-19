import React from "react";
import Routes from "./routes";
import { Container } from "./globalStyles";

class App extends React.Component {
  render() {
    return (
        <Container id="App">
          <Routes />
        </Container>
    );
  }
}

export default App;
