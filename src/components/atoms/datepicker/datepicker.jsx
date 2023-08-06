import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Ce composant représente un sélecteur de date réutilisable pour choisir une date dans un formulaire.

// Props :
// - id : Identifiant HTML optionnel pour le composant Datepicker.
// - name : Nom optionnel du composant Datepicker, utile lorsqu'il est utilisé dans un formulaire.

// Fonctionnement :
// - Lorsque l'utilisateur choisit une date, la fonction "handleDateChange" est appelée, mettant à jour l'état "startDate".
// - Le sélecteur de date est rendu avec la classe CSS "hnt-input" pour appliquer un style personnalisé.

function Datepicker({ id, name, verificationMessage, isValid }) {
  const [startDate, setStartDate] = useState(null);
  const inputStyle = isValid ? "hnt-input" : "hnt-input invalid";

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  return (
    <>
      <DatePicker
        className={inputStyle}
        id={id}
        selected={startDate}
        onChange={handleDateChange}
        name={name}
        placeholderText={"Select a date"}
      />
      {!isValid && <div className="validation-message">{verificationMessage}</div>}
    </>
  );
}

export default Datepicker;