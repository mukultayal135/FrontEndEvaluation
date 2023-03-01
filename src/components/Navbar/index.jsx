/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="nav-container">
      <div className="navbar">
        <div onClick={() => navigate('/')}>EVENTIFY</div>
      </div>
    </div>
  );
};

export default Navbar;
