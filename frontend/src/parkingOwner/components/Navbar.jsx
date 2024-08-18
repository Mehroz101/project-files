import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <nav className="dashboard_container_nav">
        <div className="nav_items">
          <div className="nav_left">
            <h1>Parkify</h1>
          </div>
          <div className={navbar ? `nav_right nav_show` : `nav_right`}>
            <div className="nav_right_list">
              <ul>
                <li>
                  <Link to="/">Dashboard</Link>
                </li>

                <li>
                  <Link>Manage Space</Link>
                </li>
                <li>
                  <Link>Reservation Request</Link>
                </li>
                <li>
                  <Link>Earning</Link>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
        <div
          // className={navbar ? `menu_icon` : ``}
          className="menu_icon"
          onClick={() => {
            setNavbar(!navbar);
          }}
        >
          PPP
        </div>
      </nav>
    </>
  );
};

export default Navbar;
