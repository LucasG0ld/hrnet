import React, { useState } from 'react';
import Modal from 'g0ld-modal';
import "./modal.css"

// Ce composant représente un modal personnalisé utilisant la bibliothèque externe "g0ld-modal".

// Props :
// - isOpen : Un booléen indiquant si le modal doit être affiché ou masqué.
// - onClose : Une fonction de rappel à exécuter lorsque l'utilisateur souhaite fermer le modal.
// - children : Contenu à afficher à l'intérieur du modal, tels que des titres, des textes, des formulaires, etc.

function CustomModal({ isOpen, onClose, children }) {

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {children}
    </Modal>
  );
}

export default CustomModal;