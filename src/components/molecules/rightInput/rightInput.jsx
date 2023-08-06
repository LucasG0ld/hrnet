import React from 'react';
import SelectInputLabel from "../selectInputLabel/selectInputLabel";

// Ce composant représente une section contenant un champ de sélection réutilisable pour le département.

// Données :
// - Le composant utilise un tableau d'objets "options" pour les choix du département dans le champ de sélection.
// - Chaque objet dans le tableau "options" a une "value" et un "label" pour la valeur et l'étiquette de l'option.

// Fonctionnement :
// - Le composant rend une div contenant un champ de sélection réutilisable pour le département.
// - Le champ de sélection est créé en utilisant le composant moléculaire "SelectInputLabel".
// - Le champ de sélection est configuré avec une étiquette associée (label), un ID unique pour l'attribut "htmlFor", et les options définies dans le tableau "options".

const options = [
    { value: "sales", label: "Sales" },
    { value: "marketing", label: "Marketing" },
    { value: "engineering", label: "Engineering" },
    { value: "humanResources", label: "Human Resources" },
    { value: "legal", label: "Legal" },
]

function RightInput() {

    return (
        <div>
            <SelectInputLabel htmlFor="department" label="Department" id="department" options={options} name="department" verificationMessage="Please, select your department."/>
        </div>
    );
}

export default RightInput;