import "./logo.css"

// Ce composant représente le logo de l'application HRNET.

// Fonctionnement :
// - Le composant rend une structure de div qui contient le titre du logo.
// - Le titre du logo est défini comme "HRNET" et est rendu dans une balise h1 avec la classe CSS "hnt-logo-title".
// - Le logo lui-même est enveloppé dans une div avec la classe CSS "hnt-container-logo".


function Logo() {

    return (
        <div className="hnt-container-logo">
            <h1 className="hnt-logo-title">HRNET</h1>
        </div>
        
    )
}

export default Logo;