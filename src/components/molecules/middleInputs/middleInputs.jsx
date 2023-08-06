import React from 'react';
import InputLabel from "../inputLabel/inputLabel";
import SelectInputLabel from "../selectInputLabel/selectInputLabel";
import "./middleInputs.css"

// Ce composant représente une section contenant des champs de saisie de texte et un champ de sélection réutilisables pour l'adresse.

// Données :
// - Le composant utilise un tableau d'objets "options" pour les choix de l'état dans le champ de sélection.
// - Chaque objet dans le tableau "options" a une "value" et un "label" pour la valeur et l'étiquette de l'option.

// Fonctionnement :
// - Le composant rend une div contenant des champs de saisie de texte et un champ de sélection réutilisables pour l'adresse.
// - Les champs de saisie de texte sont créés en utilisant le composant moléculaire "InputLabel".
// - Le champ de sélection est créé en utilisant le composant moléculaire "SelectInputLabel".
// - Chaque champ de saisie de texte et de sélection est configuré avec une étiquette associée (label) et un ID unique pour l'attribut "htmlFor".
// - Le champ de sélection est configuré avec les options définies dans le tableau "options".

const options = [
    {
        value: "AL",
        label: "Alabama",
    },
    {
        value: "AK",
        label: "Alaska",
    },
    {
        value: "AS",
        label: "American Samoa",
    },
    {
        value: "AZ",
        label: "Arizona",
    },
    {
        value: "AR",
        label: "Arkansas",
    },
    {
        value: "CA",
        label: "California",
    },
    {
        value: "CO",
        label: "Colorado",
    },
    {
        value: "CT",
        label: "Connecticut",
    },
    {
        value: "DE",
        label: "Delaware",
    },
    {
        value: "DC",
        label: "District Of Columbia",
    },
    {
        value: "FM",
        label: "Federated States Of Micronesia"
    },
    {
        value: "FL",
        label: "Florida"
    },
    {
        value: "GA",
        label: "Georgia"
    },
    {
        value: "GU",
        label: "Guam"
    },
    {
        value: "HI",
        label: "Hawaii"
    },
    {
        value: "ID",
        label: "Idaho"
    },
    {
        value: "IL",
        label: "Illinois"
    },
    {
        value: "IN",
        label: "Indiana"
    },
    {
        value: "IA",
        label: "Iowa"
    },
    {
        value: "KS",
        label: "Kansas"
    },
    {
        value: "KY",
        label: "Kentucky"
    },
    {
        value: "LA",
        label: "Louisiana"
    },
    {
        value: "ME",
        label: "Maine"
    },
    {
        value: "MH",
        label: "Marshall Islands"
    },
    {
        value: "MD",
        label: "Maryland"
    },
    {
        value: "MA",
        label: "Massachusetts"
    },
    {
        value: "MI",
        label: "Michigan"
    },
    {
        value: "MN",
        label: "Minnesota"
    },
    {
        value: "MS",
        label: "Mississippi"
    },
    {
        value: "MO",
        label: "Missouri"
    },
    {
        value: "MT",
        label: "Montana"
    },
    {
        value: "NE",
        label: "Nebraska"
    },
    {
        value: "NV",
        label: "Nevada"
    },
    {
        value: "NH",
        label: "New Hampshire"
    },
    {
        value: "NJ",
        label: "New Jersey"
    },
    {
        value: "NM",
        label: "New Mexico"
    },
    {
        value: "NY",
        label: "New York"
    },
    {
        value: "NC",
        label: "North Carolina"
    },
    {
        value: "ND",
        label: "North Dakota"
    },
    {
        value: "MP",
        label: "Northern Mariana Islands"
    },
    {
        value: "OH",
        label: "Ohio"
    },
    {
        value: "OK",
        label: "Oklahoma"
    },
    {
        value: "OR",
        label: "Oregon"
    },
    {
        value: "PW",
        label: "Palau"
    },
    {
        value: "PA",
        label: "Pennsylvania"
    },
    {
        value: "PR",
        label: "Puerto Rico"
    },
    {
        value: "RI",
        label: "Rhode Island"
    },
    {
        value: "SC",
        label: "South Carolina"
    },
    {
        value: "SD",
        label: "South Dakota"
    },
    {
        value: "TN",
        label: "Tennessee"
    },
    {
        value: "TX",
        label: "Texas"
    },
    {
        value: "UT",
        label: "Utah"
    },
    {
        value: "VT",
        label: "Vermont"
    },
    {
        value: "VI",
        label: "Virgin Islands"
    },
    {
        value: "VA",
        label: "Virginia"
    },
    {
        value: "WA",
        label: "Washington"
    },
    {
        value: "WV",
        label: "West Virginia"
    },
    {
        value: "WI",
        label: "Wisconsin"
    },
    {
        value: "WY",
        label: "Wyoming"
    }
]

function MiddleInputs() {

    return (
        <div className="hnt-middle-border">
            <div className="hnt-address-container">
                <p className="hnt-label hnt-address">Address</p>
            </div>
            <InputLabel htmlFor="street" label="Street" id="street" name="street" verificationMessage="Please, enter your street."></InputLabel>
            <InputLabel htmlFor="city" label="City" id="city" name="city" verificationMessage="Please, enter your city."></InputLabel>
            <SelectInputLabel htmlFor="state" label="State" id="state" options={options} name="state" verificationMessage="Please, select your state."></SelectInputLabel>
            <InputLabel htmlFor="zip-code" label="Zip Code" id="zipCode" name="zipCode" verificationMessage="Please, enter your zip code."></InputLabel>
        </div>
    );
}

export default MiddleInputs;