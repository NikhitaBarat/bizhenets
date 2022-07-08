import React from "react";
import './sosform.styles.css'
const Sosform = () => {
  return (
    <div className="sos-container">
      <form className="sos-form">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Location" />
        <input type="text" placeholder="SOS Type" />
        <textarea className="sos-msg">SOS message</textarea>
        <button type="submit">SEND</button>
      </form>
    </div>
  );
};

export default Sosform;
