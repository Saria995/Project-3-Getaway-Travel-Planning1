import React, { userState } from "react";
import { Link } from "react-router-dom";
import video from "../assets/Travel_Planner_Background_Compressed.mp4";
import "../style/video.css";
import Button from 'react-bootstrap/Button';

import Auth from "../utils/auth";


const Home = () => {
  const userId = Auth.getUser()?.data?.username;

  return (
    <div className="video-container">
      <video autoPlay={true} muted={true} loop={true} src={video}></video>
      <div className="content mt-5">
        <div className="container">
          <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold">Getaway Travel Planner</h1>
              <p className="col-md-8 fs-4">
                Keep track of all your trips with this trip planner
              </p>
              {userId ? (
                <Link to={`/users/${userId}`}>
                  <button type="button" className="grey-button btn-lg">
                    {userId.toUpperCase()}'s Trips
                  </button>
                </Link>
              ) : (
                <Link to={`/login`}>
                  <button type="button" className="grey-button btn-lg">
                    Get Started
                  </button>
                </Link>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
