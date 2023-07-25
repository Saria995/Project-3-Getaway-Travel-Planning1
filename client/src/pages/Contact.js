import React from "react";
import logo from "../assets/group.png";

const Contact = () => {
  const centerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div className="container mt-2">
      <h2 className="display-6" style={centerStyle}>Contact</h2>
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
          <h2 className="display-6">Student</h2>
          <a href={"https://google.com"} className="link-dark" target="_blank" rel="noopener noreferrer" >
            Student's Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
