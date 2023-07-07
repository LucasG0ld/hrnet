import React, { useState } from "react";
import Datepicker from "../../atoms/datepicker/datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DatepickerLabel({ htmlFor, label, id, onChange }) {
    const handleDateChange = (date) => {
      onChange(id, date);
    };
  
    return (
      <div className="hnt-input-container">
        <label className="hnt-label" htmlFor={htmlFor}>
          {label}
        </label>
        <Datepicker id={id} onChange={handleDateChange} />
      </div>
    );
  }
export default DatepickerLabel;