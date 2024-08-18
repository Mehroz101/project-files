import React, { useState } from "react";
import "../styles/Profile.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import AccountInformation from "../components/AccountInformation";
import ReservationHistory from "../components/ReservationHistory";
import ListyourSpace from "../components/ListyourSpace";
const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="profile_page">
        <div className="profile_left">
          <ul>
            <li>
              <Link className="active">My Profile</Link>
            </li>
            <li>
              <Link>Booking</Link>
            </li>
            <li>
              <Link>Message</Link>
            </li>
            <li>
              <Link>List Your Space</Link>
            </li>
            <li>
              <Link>Logout</Link>
            </li>
          </ul>
        </div>
        <div className="profile_right">

        {/* <AccountInformation/> */}
        {/* <ReservationHistory/> */}
        <ListyourSpace/>
        </div>
      </div>
    </>
  );
};

export default Profile;
