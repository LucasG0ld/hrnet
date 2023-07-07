import React from "react";
import SelectInput from "../../atoms/selectInput/selectInput";

function SelectInputLabel({ htmlFor, label, id, options, onChange }) {
    const handleSelectChange = (id, value) => {
        onChange(id, value); 
      };

  return (
    <div className="hnt-input-container">
      <label className="hnt-label" htmlFor={htmlFor}>
        {label}
      </label>
      <SelectInput
        id={id}
        options={options}
        onChange={handleSelectChange}
      />
    </div>
  );
}

export default SelectInputLabel;