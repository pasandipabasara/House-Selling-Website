// Popup.js
import React from "react";

const Popup = ({ handleClose, show }) => {
  // Determine modal visibility based on the 'show' prop
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <p>Hello, World!</p>
        <button onClick={handleClose}>Close</button> {/* Close the popup */}
      </section>
    </div>
  );
};

export default Popup;
