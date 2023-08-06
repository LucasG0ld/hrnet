import React from 'react';
import Link from '../../atoms/link/link';

// Ce composant représente le contenu personnalisé à afficher dans un modal (fenêtre modale) après la création d'un nouvel employé.

// Props :
// - handleCreateEmployee : La fonction de rappel à exécuter lorsque l'utilisateur clique sur le lien "Create New Employee".

// Fonctionnement :
// - Le composant rend un contenu personnalisé à afficher dans un modal après la création d'un nouvel employé.
// - Le contenu comprend un titre "New Employee" et un message de félicitations.
// - Deux liens sont affichés, l'un pour créer un nouvel employé et l'autre pour voir les employés actuels.
// - Les liens sont créés en utilisant le composant atomique "Link" avec des classes CSS spécifiées pour le style.

function CustomModalContent({ handleCreateEmployee }) {

  return (
    <div>
        <div className="hnt-modal-title-container">
            <h2 className="hnt-modal-title">New Employee</h2>
        </div>
        <p>Congratulations, new employee created!</p>
        <div className='hnt-modal-btn-container'>
            <div className='hnt-modal-btn hnt-modal-btn-left'>
                <Link onClick={handleCreateEmployee} className="hnt-home-link hnt-link-create">Create New Employee</Link>
            </div>
            <div className='hnt-modal-btn hnt-modal-btn-right'>
                <Link link="/view-employee" className="hnt-home-link hnt-link-view">View Current Employee</Link>
            </div>
      </div>
    </div>
  );
}

export default CustomModalContent;