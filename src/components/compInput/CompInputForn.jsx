import React from "react";

const CompInputForn = ({ id, label, onChange, value }) => {
  return (
    <>
      <label htmlFor={id}></label>
      {label}
      <input type="text" id={id} name={id} value={value} onChange={onChange} />
    </>
  );
};

export default CompInputForn;
