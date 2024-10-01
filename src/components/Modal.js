import React from 'react';
import './Modal.css'; // Import your CSS for styling

const Modal = ({ onClose, children }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>❌</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
