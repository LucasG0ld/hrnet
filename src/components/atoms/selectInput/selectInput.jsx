import React, { useState } from "react";
import Select from 'react-select';

// Ce composant représente un champ de sélection réutilisable utilisant la bibliothèque externe "react-select".

// Props :
// - id : Identifiant HTML optionnel pour le champ de sélection.
// - options : Un tableau d'objets représentant les options disponibles dans le champ de sélection.
// - name : Nom optionnel du champ de sélection, utile lorsqu'il est utilisé dans un formulaire.

// Fonctionnement :
// - Lorsque l'utilisateur sélectionne une option, la fonction "handleSelectChange" est appelée pour mettre à jour l'état "selectedOption".
// - Le champ de sélection est rendu avec la classe CSS "hnt-input" pour appliquer un style personnalisé.

function SelectInput({ id, options, name, verificationMessage, isValid }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const inputStyle = isValid ? "hnt-input" : "hnt-input invalid";

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <>
      <Select
        className={inputStyle}
        id={id}
        value={selectedOption}
        onChange={handleSelectChange}
        options={options}
        name={name}
      />
      {!isValid && <div className="validation-message">{verificationMessage}</div>}
    </>
  );
}

export default SelectInput;