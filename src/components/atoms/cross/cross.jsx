import { NavLink } from "react-router-dom";
import CrossImg from "../../../assets/cross.svg"
import "./cross.css"

function Cross() {

    return (
        <NavLink to="/" className="hnt-cross-container">
            <img src={CrossImg} alt="Cross" />
        </NavLink>
    )
}

export default Cross;