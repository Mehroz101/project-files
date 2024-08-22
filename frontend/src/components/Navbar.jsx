import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [profileNav, setProfileNav] = useState(false);
  return (
    <>
      <nav className="container">
        <div className="nav_items">
          <div className="nav_left">
            <h1>Parkify</h1>
          </div>
          <div className={navbar ? `nav_right nav_show` : `nav_right`}>
            <div className="nav_right_list">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/searchResult">Find Parking</Link>
                </li>
                <li>
                  <Link>About</Link>
                </li>
                <li>
                  <Link>Contact</Link>
                </li>
                <li className="profile">
                  <Link
                    to="/profile"
                    onClick={() => setProfileNav(!profileNav)}
                  >
                    <i class="fa-solid fa-user"></i>
                    <span>mehroz farooq</span>
                  </Link>
                </li>
                {profileNav && (
                  <>
                    <ul className="profile_links">
                      <li>
                        <Link to="booking">Booking</Link>
                      </li>
                      <li>
                        <Link to="">Messages</Link>
                      </li>
                      <li>
                        <Link to="listyourspace">List your space</Link>
                      </li>
                      <li>
                        <Link to="">Logout</Link>
                      </li>
                    </ul>
                  </>
                )}
              </ul>
            </div>
            {/* <div className="nav_right_btn">
              <Link to="/login">
                <button>Login</button>
              </Link>
            </div> */}
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
