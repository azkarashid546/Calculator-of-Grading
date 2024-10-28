import React, { useState } from "react";
import Logo from "../images/My-Grade-Calculator-1536x342.webp";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  let navigate = useNavigate();


  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  
  const handleSidebarLinkClick = () => {
    setIsOpen(false); 
  };

  return (
    <>
      <div className="header">
        <div className="navbar">
          <nav>
            <div className="nav">
              <div className="logo">
                <img src={Logo} alt="" />
              </div>
              <div className="nav-list">
                <ul>
                  <li>
                    <Link to="/">LinkEasy Grade Calculator</Link>
                  </li>
                  <li>
                    <Link to="/average">Average Grade Calculator</Link>
                  </li>
                  <li>
                    <Link to="/final">Final Grade Calculator</Link>
                  </li>
                </ul>
              </div>
              <div className="icon">
                <i className="fa-solid fa-bars fa-lg" onClick={toggleSidebar}></i>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className={`mobile-navbar ${isOpen ? "open" : ""}`}>
        <nav>
          <div className="mobnav-list">
            <div className="mob-img">
              <img src={Logo} alt="" />
            </div>
            <ul>
              <li>
                <Link to="/" onClick = {handleSidebarLinkClick}>LinkEasy Grade Calculator</Link>
              </li>
              <li>
                <Link to="/average" onClick = {handleSidebarLinkClick}>Average Grade Calculator</Link>
              </li>
              <li>
                <Link to="/final" onClick = {handleSidebarLinkClick}>Final Grade Calculator</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
