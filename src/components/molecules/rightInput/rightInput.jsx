import React, { useContext } from 'react';
import { FormDataContext } from '../../../context/formDataContext';
import SelectInputLabel from "../selectInputLabel/selectInputLabel";

const options = [
    { value: "sales", label: "Sales" },
    { value: "marketing", label: "Marketing" },
    { value: "engineering", label: "Engineering" },
    { value: "humanResources", label: "Human Resources" },
    { value: "legal", label: "Legal" },
]

function RightInput() {
    const { updateFormData } = useContext(FormDataContext);

    const handleSelectChange = (id, value) => {
        console.log(value)
        updateFormData((prevFormData) => ({
          ...prevFormData,
          [id]: value
        }));
      };
    return (
        <div>
            <SelectInputLabel htmlFor="department" label="Department" id="department" options={options} onChange={handleSelectChange} />
        </div>
    );
}

export default RightInput;