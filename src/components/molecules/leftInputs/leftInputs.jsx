import React, { useContext } from 'react';
import { FormDataContext } from '../../../context/formDataContext';
import InputLabel from '../inputLabel/inputLabel';
import DatepickerLabel from '../datepickerLabel/datepickerLabel';

function LeftInputs() {
  const { updateFormData } = useContext(FormDataContext);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    console.log('Input Changed:', id, value);
    updateFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value
    }));
  };
  
  const handleDateChange = (id, date) => {
    console.log('Date Changed:', id, date);
    updateFormData((prevFormData) => ({
      ...prevFormData,
      [id]: date.toISOString()
    }));
  };

  return (
    <div>
      <InputLabel htmlFor="first-name" label="First Name" id="firstName" onChange={handleInputChange}></InputLabel>
      <InputLabel htmlFor="last-name" label="Last Name" id="lastName" onChange={handleInputChange}></InputLabel>
      <DatepickerLabel htmlFor="date-of-birth" label="Date of Birth" id="dateOfBirth" onChange={handleDateChange}></DatepickerLabel>
      <DatepickerLabel htmlFor="start-date" label="Start Date" id="startDate" onChange={handleDateChange}></DatepickerLabel>
    </div>
  );
}

export default LeftInputs;