import React, { useState } from 'react';
import Modal from 'g0ld-modal';
import "./modal.css"

function CustomModal({ isOpen, onClose, children }) {

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {children}
    </Modal>
  );
}

export default CustomModal;