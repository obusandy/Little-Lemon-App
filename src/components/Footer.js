import React from "react";
import small_logo from "../images/small_logo.png";

const Footer = () => {
  return (
    <footer>
      <section>
        <div>
          <img src={small_logo} />
        </div>
        <div>
          <h3>Document Navigation</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </div>
        <div className="locations">
          <h3>LOCATIONS</h3>
          <ul>
            <li>Nairobi</li>
            <li>Kampala</li>
            <li>Dodoma</li>
            <li>Malawi</li>
          </ul>
        </div>
        <div>
          <h3>OPENING TIMES</h3>
          <ul>
            <li>Mon - Wed: 10:30AM - 12:00AM</li>
            <li>Fri: 12:00PM - 1:00AM</li>
            <li>Sat - Sun: 10:30AM - 12:00AM</li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
