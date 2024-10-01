import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import './Modal.css'; // Import your CSS for styling

const Modal = ({ onClose, children }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Close button to trigger the onClose function */}
        <button className="close-button" onClick={onClose}>
          ❌
        </button>
        {/* Render children (content inside the modal) */}
        {children}
      </div>
    </div>
  );
};

// PropTypes validation to ensure correct usage
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,  // onClose is required and must be a function
  children: PropTypes.node.isRequired, // children can be any renderable content (node) and is required
};

export default Modal;
