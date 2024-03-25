import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import List from "./List";

const App = () => {
  const [str, setStr] = useState();
  const props = (e) => {
    setStr(e);
  };
  return (
    <div className="'">
      {str}
      <Form props={props} />
      <List />
    </div>
  );
};

export default App;
