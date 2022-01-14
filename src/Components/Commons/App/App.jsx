
// React imports :
import React from "react";
import { Fragment } from "react/cjs/react.development";

// Components import :
import { Routing } from "../Routing/Routing";



export class App extends React.Component {
  render() {
    return (
      <Fragment>
        <h1> Bienvenue sur Benoit Routier Fact ! </h1>
        <Routing />
      </Fragment>
    );
  }
}

export default App;