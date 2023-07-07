import React, { useState } from "react";
import Select from 'react-select';

function SelectInput({ id, options, onChange }) {
    const [selectedOption, setSelectedOption] = useState(null);
  
    const handleSelectChange = (selectedOption) => {
      setSelectedOption(selectedOption);
      onChange(id, selectedOption.value); 
    };
  
    return (
      <Select
        className="hnt-input"
        id={id}
        value={selectedOption}
        onChange={handleSelectChange}
        options={options}
      />
    );
  }

export default SelectInput;