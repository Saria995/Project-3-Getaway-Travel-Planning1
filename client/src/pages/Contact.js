import React from "react";
import logo from "../assets/contact-us.jpg";


const Contact = () => {
  const centerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div className="container mt-2">
      <h2 className="display-6" style={centerStyle}>Contact us today to help plan your trip</h2>
      <div className="row mb-3">
        <div className="col">
          <img
            src={logo}
            width="50%"
            alt="Team Procedural"
            className="rounded mx-auto d-block"
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col" style={centerStyle}>
          <h2 className="display-6"></h2>
          <a href={"https://github.com/Saria995"} className="link-dark" target="_blank" rel="noopener noreferrer" >
            Contact Us
          </a>
          <h2 className="display-6"></h2>
          <a href={"https://hotmail.com"} className="link-dark" target="_blank" rel="noopener noreferrer" >
            Email
          </a>
          <h2 className="display-6"></h2>
          <a href={"https://hotmail.com"} className="link-dark" target="_blank" rel="noopener noreferrer" >
            Phone
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
