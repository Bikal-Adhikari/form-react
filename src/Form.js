import React, { useState } from "react";

const Form = (props) => {
  const [str, setStr] = useState("");
  const handleOnChange = (e) => {
    setStr(e.target.value);
  };

  return (
    <div className="form">
      {str}
      <form action="">
        <input type="text" name="name" onChange={handleOnChange} />
        <button onClick={() => props(str)}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
