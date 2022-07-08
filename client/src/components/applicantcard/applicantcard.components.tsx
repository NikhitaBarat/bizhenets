import React from "react";
import "./applicantcard.styles.css";

const Applicantcard = () => {
  return (
    <div className="application-card">
      <div>
        <div className="application-img-sec">
          <img
            className="application-img"
            src={`https://pickaface.net/gallery/avatar/unr_randomavatar_170412_0236_9n4c2i.png`}
            alt=""
          />
        </div>
        <div className="form-section">
          <form className="applicant-form" action="">
            <div className="applying-to">Applying to: Harry Maguire</div>
            <input className="full-cover applicant-inp" type="text" placeholder="Enter your full name" />
            <input className="full-cover applicant-inp" type="text" placeholder="Location" />
            <div className="horz-section">
              <input className="half-cover applicant-inp" type="number" placeholder="Age" />
              <input className="half-cover applicant-inp mrg-right" type="text" placeholder="Employment" />
            </div>
            <div className="horz-section">
              <input className="half-cover applicant-inp" type="number" placeholder="Room for" />
              <input className="half-cover applicant-inp mrg-right" type="text" placeholder="Criminal Status" />
            </div>
            <button type="submit" className="submit-application">SUBMIT APPLICATION</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Applicantcard;
