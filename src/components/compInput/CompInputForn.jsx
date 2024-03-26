import React from "react";

const CompInputForn = ({ id, text, name }) => {
  return (
    <div>
      <label htmlFor={id}>
        {text}
        <input
          type="text"
          id={id}
          name={name}
          onChange={({ target }) => target.value}
        />
      </label>
    </div>
  );
};

export default CompInputForn;
