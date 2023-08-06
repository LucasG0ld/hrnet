import "./input.css"

// Ce composant représente un champ de saisie de texte réutilisable pour les formulaires.

// Props :
// - id : Identifiant HTML optionnel pour le champ de saisie.
// - onChange : Une fonction de rappel à appeler lorsque le contenu du champ de saisie change.
// - name : Nom optionnel du champ de saisie, utile lorsqu'il est utilisé dans un formulaire.

// Fonctionnement :
// - Ce composant est une simple balise d'entrée (input) de type texte.
// - Lorsque l'utilisateur saisit du texte, la fonction "onChange" spécifiée est appelée pour gérer les modifications.
// - Le composant utilise la classe CSS "hnt-input" pour appliquer un style personnalisé.

function Input({ id, onChange, name, verificationMessage, isValid }) {
    const inputStyle = isValid ? "hnt-input" : "hnt-input invalid";
  
    return (
      <>
        <input
          className={inputStyle}
          id={id}
          type="text"
          onChange={onChange}
          name={name}
        />
        {!isValid && <div className="validation-message">{verificationMessage}</div>}
      </>
    );
  }
  
  export default Input;