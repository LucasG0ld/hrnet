import Logo from "../atoms/logo/logo";

// Ce composant représente l'en-tête de la page qui contient le logo de l'application.

// Fonctionnement :
// - Le composant rend un élément "header" qui contient le logo de l'application.
// - Le logo est affiché en utilisant le composant atomique "Logo".

function Header() {

    return (
        <header>
            <Logo></Logo>
        </header>
        
    )
}

export default Header;