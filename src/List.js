import React, { useState } from "react";

const List = (props) => {
  const [str, setStr] = useState(props);
  return (
    <div>
      <ul>
        <li>{props.str}</li>
      </ul>
    </div>
  );
};

export default List;
