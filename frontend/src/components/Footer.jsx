import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer_section">
          <h2>Parkify</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            itaque nisi alias impedit iure cupiditate saepe assumenda quod
            quaerat eius!
          </p>
        </div>
        <div className="footer_section">
          <ul>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Find Parking</Link>
            </li>
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
            <li>
              <Link>List Your Space</Link>
            </li>
          </ul>
        </div>
        <div className="footer_section">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Find Parking</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
          <li>
            <Link>List Your Space</Link>
          </li>
        </div>
      </footer>
    </>
  );
};

export default Footer;
