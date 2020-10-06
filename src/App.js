import React, { Fragment } from "react";
import Headering from "./components/Headering.jsx";
import Form from "./components/Form.jsx";

function App() {
  return (
    <Fragment>
      <Headering />
      <div className="container white">
        <Form></Form>
      </div>
    </Fragment>
  );
}

export default App;
