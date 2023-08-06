import "./titleH2.css"

// Ce composant représente un titre de niveau 2 (H2) réutilisable.

// Fonctionnement :
// - Le titre de niveau 2 est rendu à l'aide de la balise h2 de HTML.
// - Le titre est passé au composant via la prop "title".
// - Une classe CSS personnalisée peut être ajoutée via la prop "className" pour appliquer des styles supplémentaires.

function TitleH2({ title, className }) {
    const titleClass = `hnt-title-h2 ${className || ""}`

    return (
        <h2 className={titleClass}>{title}</h2>
    )
}

export default TitleH2;