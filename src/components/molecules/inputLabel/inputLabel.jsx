import React, {useState} from "react";
import Input from "../../atoms/input/input";

// Ce composant représente un champ de saisie de texte avec une étiquette (label) réutilisable.

// Props :
// - htmlFor : L'ID de l'élément auquel l'étiquette (label) est associée.
// - label : Le texte de l'étiquette (label) qui sera affiché à côté du champ de saisie de texte.
// - id : Identifiant HTML optionnel pour le champ de saisie de texte.
// - onChange : La fonction de rappel à exécuter lorsque le contenu du champ de saisie de texte change.
// - name : Nom optionnel du champ de saisie de texte, utile lorsqu'il est utilisé dans un formulaire.

// Fonctionnement :
// - Le composant rend un champ de saisie de texte (utilisant le composant Input) avec une étiquette (label) associée.
// - L'étiquette est associée au champ de saisie de texte via la prop "htmlFor" correspondant à l'ID de l'élément de champ de saisie de texte.
// - Le contenu du champ de saisie de texte lui-même est géré par le composant atomique "Input".

function InputLabel({ htmlFor, label, id, onChange, name, verificationMessage }) {
    const [inputValue, setInputValue] = useState("");
    const [isInputValid, setInputValid] = useState(true);
  
    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setInputValue(inputValue);
        setInputValid(inputValue.length > 0);
        if (onChange) {
          onChange(event);
        }
    };
  
    return (
      <div className="hnt-input-container">
        <label className="hnt-label" htmlFor={htmlFor}>{label}</label>
        <Input id={id} onChange={handleInputChange} name={name} isValid={isInputValid} verificationMessage={verificationMessage} />
      </div>
    );
  }
  
  export default InputLabel;