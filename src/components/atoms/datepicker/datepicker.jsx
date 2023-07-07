import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Datepicker({ id, onChange }) {
  const [startDate, setStartDate] = useState(new Date());

  const handleDateChange = (date) => {
    setStartDate(date);
    onChange(date); 
  };

  return (
    <DatePicker
      className="hnt-input"
      id={id}
      selected={startDate}
      onChange={handleDateChange} 
    />
  );
}

export default Datepicker;