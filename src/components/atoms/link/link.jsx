import { NavLink } from "react-router-dom";

function Link({link, className, onClick, children}) {

    return (
        <NavLink to={link} className={className} onClick={onClick}>{children}</NavLink>
    )
}

export default Link;