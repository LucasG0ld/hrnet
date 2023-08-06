// Ce composant représente un bouton réutilisable pouvant être utilisé dans différentes parties de l'application.

// Props :
// - className : Une classe CSS optionnelle à appliquer au bouton pour le style personnalisé.
// - onClick : Une fonction de rappel à exécuter lorsque le bouton est cliqué.
// - children : Contenu à afficher à l'intérieur du bouton.

function Button({ className, onClick, children}) {

    return (
        <button className={className} onClick={onClick}>{children}</button>
    )
}

export default Button;