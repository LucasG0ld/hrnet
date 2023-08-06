import Link from "../../atoms/link/link";
import "./homeLinks.css"

// Ce composant représente une section contenant des liens de navigation vers les pages "Create Employee" et "View Current Employee".

// Fonctionnement :
// - Le composant rend une div contenant deux liens de navigation.
// - Chaque lien est créé en utilisant le composant atomique "Link".
// - Chaque lien est configuré avec une URL spécifique (link) pour naviguer vers la page "Create Employee" ou "View Current Employee".
// - Chaque lien a une classe CSS spécifique pour le style (hnt-home-link hnt-link-create pour "Create Employee" et hnt-home-link hnt-link-view pour "View Current Employee").

function HomeLinks() {

    return (
        <div className="hnt-home-container">
            <Link link="/create-employee" className="hnt-home-link hnt-link-create">Create Employee</Link>
            <Link link="/view-employee" className="hnt-home-link hnt-link-view">View Current Employee</Link>
        </div>
        
    )
}

export default HomeLinks;