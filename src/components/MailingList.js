import React from "react";
import mailinglist from "../img/mailing-list-img.png";

const MailingList = () => (
  <>
    <div className="mailing-list">
      <img src={mailinglist} alt="mailing-list" />
      <div className="mailing-list-container">
        <p className="signUp">
          Sign up for our newsletter and get 10% off your next order.
        </p>
        <input
          className="emailInput"
          type="text"
          name="email"
          placeholder="Your Email"
        />
      </div>
    </div>
  </>
);

export default MailingList;
