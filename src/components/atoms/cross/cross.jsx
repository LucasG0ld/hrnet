import { NavLink } from "react-router-dom";
import CrossImg from "../../../assets/cross.svg"
import "./cross.css"

// Ce composant représente une icône de croix (X) utilisée comme bouton de navigation.

// Fonctionnement :
// - L'icône de croix est rendue à l'intérieur d'un composant NavLink pour permettre la navigation vers une autre page en cliquant sur la croix.

function Cross() {

    return (
        <NavLink to="/" className="hnt-cross-container">
            <img src={CrossImg} alt="Cross" />
        </NavLink>
    )
}

export default Cross;