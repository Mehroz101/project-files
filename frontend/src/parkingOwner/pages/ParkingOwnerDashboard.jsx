import React from "react";
import "../styles/ParkingOwnerDashboard.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import ReservationRequest from "../components/ReservationRequest";
import ManageSpace from "../components/ManageSpace";
const ParkingOwnerDashboard = () => {
  return (
    <>
      <Navbar />
      <div className="dashboard_page">
        <div className="dashboard_left">
          <ul>
            <li>
              <Link className="active">Dashboard</Link>
            </li>
            <li>
              <Link>Reservation Request</Link>
            </li>
            <li>
              <Link>Manage Space</Link>
            </li>
            <li>
              <Link>Earning</Link>
            </li>
          </ul>
        </div>
        <div className="dashboard_right">
          {/* <div className="dashboard_container">
            <h1>Dashboard</h1>
            <div className="featured_boxs">
              <div className="featured_box">
                <div className="box_icon">0</div>
                <div className="box_text">
                  <h2>43</h2>
                  <p>Total Listing</p>
                </div>
              </div>
              <div className="featured_box">
                <div className="box_icon">0</div>
                <div className="box_text">
                  <h2>43</h2>
                  <p>Total Listing</p>
                </div>
              </div>
              <div className="featured_box">
                <div className="box_icon">0</div>
                <div className="box_text">
                  <h2>43</h2>
                  <p>Total Listing</p>
                </div>
              </div>
            </div>
          </div> */}
          {/* <ReservationRequest/> */}
          <ManageSpace/>
        </div>
      </div>
    </>
  );
};

export default ParkingOwnerDashboard;
