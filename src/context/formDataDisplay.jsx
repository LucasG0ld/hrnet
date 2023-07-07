import React, { useContext } from 'react';
import { FormDataContext } from './formDataContext'; 

function FormDataDisplay() {
    const { formData } = useContext(FormDataContext);
  
    return (
      <div>
        <h2>Form Data</h2>
        {formData.map((user, index) => (
          <div key={index}>
            <p>First Name: {user.firstName}</p>
            <p>Last Name: {user.lastName}</p>
            <p>Date of Birth: {user.dateOfBirth}</p>
            <p>Start Date: {user.startDate}</p>
            <p>Street: {user.street}</p>
            <p>City: {user.city}</p>
            <p>State: {user.state}</p>
            <p>Zip Code: {user.zipCode}</p>
            <p>Department: {user.department}</p>
          </div>
        ))}
      </div>
    );
  }

export default FormDataDisplay;