import React, {useState} from "react";
import SelectInput from "../../atoms/selectInput/selectInput";

// Ce composant représente un champ de sélection avec une étiquette (label) réutilisable.

// Props :
// - htmlFor : L'ID de l'élément auquel l'étiquette (label) est associée.
// - label : Le texte de l'étiquette (label) qui sera affiché à côté du champ de sélection.
// - id : Identifiant HTML optionnel pour le champ de sélection.
// - options : Les options du champ de sélection. C'est un tableau d'objets avec des valeurs et des étiquettes pour les différentes options.
// - name : Nom optionnel du champ de sélection, utile lorsqu'il est utilisé dans un formulaire.

// Fonctionnement :
// - Le composant rend un champ de sélection (utilisant le composant SelectInput) avec une étiquette (label) associée.
// - L'étiquette est associée au champ de sélection via la prop "htmlFor" correspondant à l'ID de l'élément de champ de sélection.
// - Le contenu du champ de sélection lui-même est géré par le composant atomique "SelectInput" et est configuré avec les options fournies.

function SelectInputLabel({ htmlFor, label, id, options, name, verificationMessage }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSelectValid, setSelectValid] = useState(true);

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    setSelectValid(selectedOption !== null);
  };

  return (
    <div className="hnt-input-container">
      <label className="hnt-label" htmlFor={htmlFor}>
        {label}
      </label>
      <SelectInput
        id={id}
        options={options}
        name={name}
        onChange={handleSelectChange}
        isValid={isSelectValid}
        verificationMessage="Please, select a valid option."
      />
      {!isSelectValid && <div className="validation-message">{verificationMessage}</div>}
    </div>
  );
}

export default SelectInputLabel;