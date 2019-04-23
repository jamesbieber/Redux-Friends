import React from "react";

const Friend = props => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.age}</h3>
      <h3>{props.email}</h3>
    </div>
  );
};

export default Friend;
