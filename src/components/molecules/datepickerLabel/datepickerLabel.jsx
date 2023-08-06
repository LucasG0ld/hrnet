import React, {useState} from "react";
import Datepicker from "../../atoms/datepicker/datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Ce composant représente un champ de saisie de date avec une étiquette (label) réutilisable.

// Props :
// - htmlFor : L'ID de l'élément auquel l'étiquette (label) est associée.
// - label : Le texte de l'étiquette (label) qui sera affiché à côté du champ de saisie de date.
// - id : Identifiant HTML optionnel pour le champ de saisie de date.
// - name : Nom optionnel du champ de saisie de date, utile lorsqu'il est utilisé dans un formulaire.

// Fonctionnement :
// - Le composant rend un champ de saisie de date (utilisant le composant Datepicker) avec une étiquette (label) associée.
// - L'étiquette est associée au champ de saisie de date via la prop "htmlFor" correspondant à l'ID de l'élément de champ de saisie de date.
// - Le contenu du champ de saisie de date lui-même est géré par le composant atomique "Datepicker".

function DatepickerLabel({ htmlFor, label, id, name, verificationMessage }) {
  const [startDate, setStartDate] = useState(null);
  const [isDateValid, setDateValid] = useState(true);

  const handleDateChange = (date) => {
    setStartDate(date);
    setDateValid(date !== null);
  };

  return (
    <div className="hnt-input-container">
      <label className="hnt-label" htmlFor={htmlFor}>{label}</label>
      <Datepicker
        className="hnt-input"
        id={id}
        selected={startDate}
        onChange={handleDateChange}
        name={name}
        placeholderText={"Select a date"}
      />
      {!isDateValid && <div className="validation-message">{verificationMessage}</div>}
    </div>
  );
}

export default DatepickerLabel;