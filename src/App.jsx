import React, { Fragment } from "react";
import AddToDo from "./Components/AddToDo";
import DisplayToDo from "./Components/DisplayToDo";
import Header from "./Components/Header";

const App = () => {
  return (
    <Fragment>
      <Header />
      <AddToDo />
    </Fragment>
  );
};

export default App;
