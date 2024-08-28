import React from "react";
import "./Navbar.css";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar(){

    return(
        <nav>
          <ul id="menu">
            <li>
              <Link to="#location">
                <i className="fas fa-map" />
                <span className="description">
                    Location
                </span>
              </Link>
            </li>
            <li>
              <Link to="#RSVP">
                <i className="fas fa-envelope-open" />
                <span className="description">
                    RSVP
                </span>
              </Link>
            </li>
            <li>
              <Link to="#guestInfo">
                <i className="fas fa-info-circle" />
                <span className="description">
                    Guest Info
                </span>
              </Link>
            </li>
            <li>
              <Link to="#aboutUs">
                <i className="fas fa-address-card" />
                <span className="description">
                    About Us
                </span>
              </Link>
            </li>
          </ul>
        </nav>
    );
}