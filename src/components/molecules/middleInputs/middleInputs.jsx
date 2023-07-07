import React, { useContext } from 'react';
import { FormDataContext } from '../../../context/formDataContext';
import InputLabel from "../inputLabel/inputLabel";
import SelectInputLabel from "../selectInputLabel/selectInputLabel";
import "./middleInputs.css"

const options = [
    {
        value: "alabama",
        label: "Alabama"
    },
    {
        value: "alaska",
        label: "Alaska"
    },
    {
        value: "americanSamoa",
        label: "American Samoa"
    },
    {
        value: "arizona",
        label: "Arizona"
    },
    {
        value: "arkansas",
        label: "Arkansas"
    },
    {
        value: "california",
        label: "California"
    },
    {
        value: "colorado",
        label: "Colorado"
    },
    {
        value: "connecticut",
        label: "Connecticut"
    },
    {
        value: "delaware",
        label: "Delaware"
    },
    {
        value: "districtOfColumbia",
        label: "District Of Columbia"
    },
    {
        value: "federatedStatesOfMicronesia",
        label: "Federated States Of Micronesia"
    },
    {
        value: "florida",
        label: "Florida"
    },
    {
        value: "georgia",
        label: "Georgia"
    },
    {
        value: "guam",
        label: "Guam"
    },
    {
        value: "hawaii",
        label: "Hawaii"
    },
    {
        value: "idaho",
        label: "Idaho"
    },
    {
        value: "illinois",
        label: "Illinois"
    },
    {
        value: "indiana",
        label: "Indiana"
    },
    {
        value: "iowa",
        label: "Iowa"
    },
    {
        value: "kansas",
        label: "Kansas"
    },
    {
        value: "kentucky",
        label: "Kentucky"
    },
    {
        value: "louisiana",
        label: "Louisiana"
    },
    {
        value: "maine",
        label: "Maine"
    },
    {
        value: "marshallIslands",
        label: "Marshall Islands"
    },
    {
        value: "maryland",
        label: "Maryland"
    },
    {
        value: "massachusetts",
        label: "Massachusetts"
    },
    {
        value: "michigan",
        label: "Michigan"
    },
    {
        value: "minnesota",
        label: "Minnesota"
    },
    {
        value: "mississippi",
        label: "Mississippi"
    },
    {
        value: "missouri",
        label: "Missouri"
    },
    {
        value: "montana",
        label: "Montana"
    },
    {
        value: "nebraska",
        label: "Nebraska"
    },
    {
        value: "nevada",
        label: "Nevada"
    },
    {
        value: "newHampshire",
        label: "New Hampshire"
    },
    {
        value: "newJersey",
        label: "New Jersey"
    },
    {
        value: "newMexico",
        label: "New Mexico"
    },
    {
        value: "newYork",
        label: "New York"
    },
    {
        value: "northCarolina",
        label: "North Carolina"
    },
    {
        value: "northDakota",
        label: "North Dakota"
    },
    {
        value: "northernMarianaIslands",
        label: "Northern Mariana Islands"
    },
    {
        value: "ohio",
        label: "Ohio"
    },
    {
        value: "oklahoma",
        label: "Oklahoma"
    },
    {
        value: "oregon",
        label: "Oregon"
    },
    {
        value: "palau",
        label: "Palau"
    },
    {
        value: "pennsylvania",
        label: "Pennsylvania"
    },
    {
        value: "puertoRico",
        label: "Puerto Rico"
    },
    {
        value: "rhodeIsland",
        label: "Rhode Island"
    },
    {
        value: "southCarolina",
        label: "South Carolina"
    },
    {
        value: "southDakota",
        label: "South Dakota"
    },
    {
        value: "tennessee",
        label: "Tennessee"
    },
    {
        value: "texas",
        label: "Texas"
    },
    {
        value: "utah",
        label: "Utah"
    },
    {
        value: "vermont",
        label: "Vermont"
    },
    {
        value: "virginIslands",
        label: "Virgin Islands"
    },
    {
        value: "virginia",
        label: "Virginia"
    },
    {
        value: "washington",
        label: "Washington"
    },
    {
        value: "westVirginia",
        label: "West Virginia"
    },
    {
        value: "wisconsin",
        label: "Wisconsin"
    },
    {
        value: "wyoming",
        label: "Wyoming"
    }
]

function MiddleInputs() {
    const { updateFormData } = useContext(FormDataContext);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        updateFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value
        }));
    };

    const handleSelectChange = (id, selectedValue) => {
        updateFormData((prevFormData) => ({
            ...prevFormData,
            [id]: selectedValue
        }));
    };

    return (
        <div className="hnt-middle-border">
            <div className="hnt-address-container">
                <p className="hnt-label hnt-address">Address</p>
            </div>
            <InputLabel htmlFor="street" label="Street" id="street" onChange={handleInputChange}></InputLabel>
            <InputLabel htmlFor="city" label="City" id="city" onChange={handleInputChange}></InputLabel>
            <SelectInputLabel htmlFor="state" label="State" id="state" options={options} onChange={handleSelectChange}></SelectInputLabel>
            <InputLabel htmlFor="zip-code" label="Zip Code" id="zipCode" onChange={handleInputChange}></InputLabel>
        </div>
    );
}

export default MiddleInputs;