import { NavLink } from "react-router-dom";

// Ce composant représente un lien de navigation réutilisable qui utilise react-router-dom.

// Props :
// - link : L'URL de destination du lien.
// - className : Une classe CSS optionnelle à appliquer au lien pour le style personnalisé.
// - onClick : Une fonction de rappel à exécuter lorsque le lien est cliqué.
// - children : Contenu à afficher à l'intérieur du lien.

// Fonctionnement :
// - Le composant utilise la balise NavLink de react-router-dom pour créer des liens de navigation réactifs.
// - Le lien est rendu avec la destination spécifiée par la prop "link".
// - Vous pouvez également ajouter une classe CSS personnalisée via la prop "className".
// - Si un événement de clic est fourni via la prop "onClick", il sera appelé lorsque le lien est cliqué.
// - Le contenu du lien est défini par la prop "children", ce qui permet d'inclure du texte ou d'autres éléments dans le lien.

function Link({link, className, onClick, children}) {

    return (
        <NavLink to={link} className={className} onClick={onClick}>{children}</NavLink>
    )
}

export default Link;